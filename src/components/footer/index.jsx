import styled from "styled-components";

const Container = styled.footer`
  align-items: center;
  background-color: black;
  bottom: 0;
  color: white;
  display: flex;
  height: 64px;
  padding-left: 250px;
  position: absolute;
  width: 100%;

  & p > span { font-weight: 800; }
  & a { text-decoration: none; color: rgb(133, 35, 210) }
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
