import { useEffect, useState } from "react";
import { getCoinEndpoint } from "../../utils/handleEnpoints";

import Footer from "../../components/footer";
import Header from "../../components/header/header";
import Wrapper from "../../components/wrapper";
import styled from "styled-components";
import InfoCoin from "../../components/coinDetails/infoCoin";
import CoinLabel from "../../components/coinDetails/coinLabel";
import CoinField from "../../components/coinDetails/coinField";

const Content = styled.div`
  min-height: 600px;
  max-width: 50%;
  width: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function CoinDetails() {
  const id = window.location.pathname.split('/')[3];
  document.title = `:: ch :: ${id}`;

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const request = await fetch(getCoinEndpoint(id));
      const response = await request.json();
      setData(response);
    })()
  }, [id]);

  return (
    <>
      <Header />
      <Wrapper>
        <CoinLabel {...data } />

        <Container>
          <Content>
            <InfoCoin { ...data } />

            <CoinField
              label='Data de origem'
              value={ data?.genesis_date }
            />

            <CoinField
              label='Algoritmo de hash'
              value={ data?.hashing_algorithm ?? 'Desconhecido' }
            />

            <CoinField
              label='Ranking de capitalização'
              value={ `${data?.market_cap_rank}º` ?? 'Desconhecido' }
            />
            <CoinField
              label='Aceitação do mercado'
              value={ `${data?.sentiment_votes_up_percentage?.toFixed(2)} %` ?? 'Desconhecido' }
            />

            <CoinField
              label='Limite em circulação'
              value={ data?.market_data?.max_supply ?? 'Desconhecido' }
            />

          </Content>

          <Content>
            <h3>Mercado</h3>

            <h3>Preço atual: USD { data?.market_data?.current_price?.usd.toFixed(2) }</h3>
            <p>última atualizaçao { data?.market_data?.last_updated }</p>
            <p>Variação Preço em 24h: { data?.market_data?.price_change_percentage_24h } %</p>
            <p>Variação Preço em 7d ias: { data?.market_data?.price_change_percentage_7d } %</p>
            <p>Variação Preço em 14 dias: { data?.market_data?.price_change_percentage_14d } %</p>
            <p>Variação Preço em 30 dias: { data?.market_data?.price_change_percentage_30d } %</p>

            <details>
              <summary>Tópico abc</summary>
              <p>texto oculto</p>
              <p>outro texto oculto</p>
            </details>

            <details>
              <summary>Tópico def</summary>
              <p>texto oculto</p>
              <p>outro texto oculto</p>
            </details>
          </Content>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
}
