import styled from "styled-components";
import theme from "../../styles/theme";

const { xs, sm, md } = theme.breakpoints;

const Container = styled.footer`
  align-items: center;
  background-color: black;
  bottom: 0;
  color: white;
  display: flex;
  height: 64px;
  padding-left: 250px;
  position: fixed;
  width: 100%;

  & p > span { font-weight: 800; }
  & a { text-decoration: none; color: rgb(133, 35, 210) }

  @media screen and (min-width: ${xs}) and (max-width: ${sm}) {
    padding-left: 24px;
    text-align: center;
    justify-content: center;
  }

  @media screen and (min-width: ${sm}) and (max-width: ${md}) {
    padding-left: 0;
    justify-content: center;
  }
`;

export default function Footer() {
  const DEV_LINK = 'https://github.com/wellison-md';

  return (
    <Container>
      <p><span>crypto.hub</span> - Elaborado e desenvolvido por
        &nbsp; <a href={ DEV_LINK } target="_blank" rel="noreferrer">@wellison-md</a>
      </p>
    </Container>
  );
}
