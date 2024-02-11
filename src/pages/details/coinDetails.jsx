import { useEffect, useState } from "react";
import { getCoinEndpoint } from "../../utils/handleEnpoints";

import Footer from "../../components/footer";
import Header from "../../components/header/header";
import Wrapper from "../../components/wrapper";
import styled from "styled-components";
import InfoCoin from "../../components/coinDetails/infoCoin";
import CoinLabel from "../../components/coinDetails/coinLabel";
import CoinField from "../../components/coinDetails/coinField";
import MarketCoin from "../../components/coinDetails/marketCoin";
import { formatDateToView } from "../../utils/dates";
import CurrencyCardMapper from "../../components/coinDetails/currencyCardMapper";

const Content = styled.div`
  min-height: 600px;
  max-width: 50%;
  width: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;

  & hr { opacity: 0.2 }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function CoinDetails() {
  const id = window.location.pathname.split('/')[3];
  document.title = `:: ch :: ${id}`;

  const DATE_OPTIONS = {
    dateStyle: 'medium',
    timeStyle: 'short',
  };

  const DATE_ORIGIN_OPTIONS = {
    dateStyle: 'short',
  }

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
              value={ formatDateToView(data?.genesis_date, DATE_ORIGIN_OPTIONS) }
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
            <MarketCoin { ...data } />

            <CoinField
              label='Última atualização:'
              value={ formatDateToView(data?.market_data?.last_updated, DATE_OPTIONS) }
            />

            <CoinField
              label='Variação das últimas 24h'
              value={ `${data?.market_data?.price_change_percentage_24h?.toFixed(3)} %` }
            />

            <CoinField
              label='Variação das últimos 7 dias'
              value={ `${data?.market_data?.price_change_percentage_7d?.toFixed(3)} %` }
            />

            <CoinField
              label='Variação das últimos 14 dias'
              value={ `${data?.market_data?.price_change_percentage_14d?.toFixed(3)} %` }
            />

            <CoinField
              label='Variação das últimos 30 dias'
              value={ `${data?.market_data?.price_change_percentage_30d?.toFixed(3)} %` }
            />

            <CurrencyCardMapper { ...data } />

          </Content>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
}
