import { falling, trending } from '../../utils/handleData';
import { useContext } from 'react';
import { Store } from '../../context/store';
import { Button, Header } from './headerTableStyle';

import iconTrending from '../../assets/icons/trending.svg';
import iconFalling from '../../assets/icons/falling.svg'
import iconCoins from '../../assets/icons/coins.svg';

const trendingMessage = 'Lista as moedas com crescimento \nacima de 3% nas últimas 24h';
const fallingMessage = 'Lista top-30 moedas em queda \nabaixo de 3% nas últimas 24h';
const allMessage = 'Lista as 250 principais criptomoedas';

export default function HeaderTable() {
  const { setCoins, vault } = useContext(Store);

  return (
    <Header>
      <Button title={ trendingMessage } onClick={ () => setCoins(trending([...vault], 'price_change_percentage_24h', 3)) }>
        <img src={ iconTrending } alt='botão "em alta"' /> &nbsp;
        <span>Em alta</span>
      </Button>

      <Button title={ fallingMessage } onClick={ () => setCoins(falling([...vault], 'price_change_percentage_24h', -3)) }>
        <img src={ iconFalling } alt='botão "em queda"' /> &nbsp;
        <span>Em queda</span>
      </Button>

      <Button title={ allMessage } onClick={ () => setCoins(vault) }>
        <img src={ iconCoins } alt='botão "todos"' /> &nbsp;
        <span>Todos</span>
      </Button>
    </Header>
  );
}
