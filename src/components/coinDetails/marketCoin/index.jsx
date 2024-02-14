import styled from "styled-components";
import PriceCard from "../priceCard";
import PropTypes from "prop-types";
import theme from "../../../styles/theme";

const { xs, sm } = theme.breakpoints;

const Panel = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 18px 0;

  @media screen and (min-width: ${xs}) and (max-width: ${sm}) {
    margin: 24px;
    flex-direction: column;
  }
`;

export default function MarketCoin(props) {
  const priceFormat = (price) => price < 1 ? price : price?.toFixed(2);
  const { market_data } = props;

  return (
    <>
      <Panel>
        <PriceCard
          label='Menor cotação'
          price={ priceFormat(market_data?.current_price?.usd) }
          $tagColor='red'
        />
        <PriceCard
          label='Preço atual'
          price={ priceFormat(market_data?.current_price?.usd) }
        />
        <PriceCard
          label='Maior cotação'
          price={ priceFormat(market_data?.high_24h?.usd) }
          $tagColor='green'
        />
      </Panel>
    </>
  );
}

MarketCoin.propTypes = {
  market_data: PropTypes.shape({
    current_price: PropTypes.shape({
      usd: PropTypes.number,
    }),
    high_24h: PropTypes.shape({
      usd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
}
