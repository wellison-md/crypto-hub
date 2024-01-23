import iconTrending from '../../assets/icons/trending.svg';
import iconFalling from '../../assets/icons/falling.svg'
import iconCoins from '../../assets/icons/coins.svg';
import styled from "styled-components";

const Button = styled.button`
  padding: 16px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  transition: 0.1s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Header = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export default function HeaderTable() {
  return (
    <Header>
      <Button>
        <img src={ iconTrending } alt='botão "em alta"' /> &nbsp;
        <span>Em alta</span>
      </Button>

      <Button>
        <img src={ iconFalling } alt='botão "em queda"' /> &nbsp;
        <span>Em queda</span>
      </Button>

      <Button>
        <img src={ iconCoins } alt='botão "todos"' /> &nbsp;
        <span>Todos</span>
      </Button>
    </Header>
  );
}
