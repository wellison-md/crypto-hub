import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCoinEndpoint } from "../../utils/handleEnpoints";

import Footer from "../../components/footer";
import Header from "../../components/header/header";
import Wrapper from "../../components/wrapper";
import styled from "styled-components";
import icon from "../../assets/icons/arrowback.svg";

const Content = styled.div`
  min-height: 600px;
  max-width: 50%;
  width: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;

  p:first-child {
    font-size: 16px;
    text-align: justify;
    line-height: 1.5;
    margin: auto;
    padding: 24px 64px;
  }

  ul {
    padding-left: 40px;
    list-style: square;
  }

  details {
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  section {
    display: flex;
    margin-left: 64px;
  }

  a {
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 8px;
    margin-right: 8px;
    margin-bottom: 12px;
    color: white;
    background-color: transparent;
    border-radius: 4px;
  }

  a:hover {
    background-color: #8500d3;
  }
`;

const CoinLabel = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;

  & button {
    background-color: transparent;
    border: none;
    padding: 16px;
    height: inherit;
  }

  & button:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  & h2 {
    font-weight: 600;
    font-size: 20px;
    padding-left: 12px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;


export default function CoinDetails() {

  const navigate = useNavigate();
  const iconHolder = `https://cryptohub-proto.vercel.app/holderIcon.svg`;
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

          <CoinLabel>
            <button onClick={ () => navigate('/') }>
              <img src={ icon } alt='Voltar' /> &nbsp;
            </button>

            <img src={ data?.image?.small ?? iconHolder } alt={ data?.name ?? '' } height='32px' />
            <h2>{ data?.name ?? id }</h2>
          </CoinLabel>

        <Container>
          <Content>
            <p>{ data?.description?.en?.split('.').filter((_c, i) => i <= 3) }</p>
            <br />

            <section>
              <a href="" target="_blank" rel="noreferrer">Página Oficial</a>
              <a href="" target="_blank" rel="noreferrer">Fórum</a>
              <a href="" target="_blank" rel="noreferrer">Reddit</a>
              <a href="" target="_blank" rel="noreferrer">Github</a>
            </section>

            <p>Data de origem: { data?.genesis_date ?? 'Desconhecido' }</p>
            <br />
            <p>algoritmo de hashing: { data?.hashing_algorithm ?? 'Desconhecido' }</p>

            <br />
            <h3>Categories</h3>
            <ul>
              {
                data?.categories?.length === 0
                ? <p>Sem categorias associadas</p>
                : data?.categories?.map((c, i) => (<li key={i}>{ c }</li>))
              }
            </ul>

            <br />
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
