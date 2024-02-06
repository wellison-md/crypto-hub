import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCoinEndpoint } from "../../utils/handleEnpoints";

import Footer from "../../components/footer";
import Header from "../../components/header/header";
import Wrapper from "../../components/wrapper";
import styled from "styled-components";
import icon from "../../assets/icons/arrowback.svg";

const CoinLabel = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
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

export default function CoinDetails() {

  const navigate = useNavigate();
  const iconHolder = `https://cryptohub-proto.vercel.app/holderIcon.svg`;
  const id = window.location.pathname.split('/')[3];
  document.title = `:: ch :: ${id}`;

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const request = await fetch(getCoinEndpoint(id));
      const [response] = await request.json();
      setData(response);
    })()
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <CoinLabel>
          <button onClick={ () => navigate('/') }>
            <img src={ icon ?? iconHolder } alt='Voltar' /> &nbsp;
          </button>

          <img src={ data?.image } alt={ data?.name } height='32px' />
          <h2>{ data?.name ?? id }</h2>
        </CoinLabel>
      </Wrapper>
      <Footer />
    </>
  );
}
