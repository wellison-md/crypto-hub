import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../../../styles/theme";

const { xs, sm } = theme.breakpoints;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  align-items: center;
  width: 200px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  & h2 {
    font-size: 24px;
    font-weight: 800;
  }

  & p:first-child { font-size: small }

  @media screen and (min-width: ${xs}) and (max-width: ${sm}) {
    width: 100%;
  }
`;

const TagCurrency = styled.section`
  font-size: smaller;
  font-weight: bold;
  background-color: ${ (props) => props.$tagColor || '#8500d3' };
  width: clamp(35px, 45px, 30%);
  border-radius: 4px;
  padding: 4px 8px;
  margin: 4px;
`;

export default function PriceCard(props) {
  const { label, price, currency, $tagColor } = props;

  return (
    <Container title={ `${label}: $${currency.toUpperCase()} ${price}` } >
      <p>{ label }</p>
      <h2>$ { price }</h2>
      <TagCurrency $tagColor={ $tagColor }>{ currency.toUpperCase() }</TagCurrency>
    </Container>
  );
}

PriceCard.propTypes = {
  label: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  currency: PropTypes.string,
  $tagColor: PropTypes.string,
}

PriceCard.defaultProps = {
  label: 'Label',
  price: 0.0000,
  currency: 'USD',
}
