import styled from "styled-components";

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

  @media (max-width: ${ ({ theme }) => theme.breakpoints.xs }) {
    padding-left: 12px;
    text-align: center;

    & p > span, p { font-size: 12px }
    & a { font-size: 12px }
  }

  @media (max-width: ${ ({ theme }) => theme.breakpoints.sm }) {
    padding-left: 36px;
    text-align: center;

    & p > span, p { font-size: 13px }
    & a { font-size: 13px }
  }

  @media (max-width: ${ ({ theme }) => theme.breakpoints.md }) {
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
    justify-content: center;
  }

  @media (max-width: ${ ({ theme }) => theme.breakpoints.lg }) {
    padding-left: 0;
    text-align: center;
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
