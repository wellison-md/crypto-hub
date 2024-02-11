import styled from "styled-components";
import PropTypes from "prop-types";
import CurrencyCard from "../currencyCard";
import { currencies } from "../../../utils/currency";
import { maskName } from "../../Card/cardHelpers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 60px;
  overflow-y: scroll;
  height: clamp(200px, 250px, 250px);
`;

export default function CurrencyCardMapper(props) {
  const { market_data } = props;
  const price = market_data?.current_price;
  const percents = market_data?.price_change_24h_in_currency;
  const defaultFlag = `${import.meta.env.BASE_URL}flags/defaultFlag.png`;
  const priceList = price && Object.entries(price) || [];

  return (
    <Container>
      {
        priceList?.map((c) => (
          <CurrencyCard
            key={ c[0] }
            id={ c[0] }
            price={ c[1] }
            varr={ percents[c[0]] }
            label={ currencies[c[0]].label && maskName(currencies[c[0]].label, 25) }
            image={ defaultFlag }
          />
        ))
      }
    </Container>
  );
}

CurrencyCardMapper.propTypes = {
  market_data: PropTypes.shape({
    current_price: PropTypes.shape({}),
    price_change_24h_in_currency: PropTypes.shape({}),
  }),
}