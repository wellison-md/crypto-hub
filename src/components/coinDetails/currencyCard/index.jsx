import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../../../styles/theme";

const { xs, sm, } = theme.breakpoints;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 6px;

  &:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.05);
  }

  & p { font-size: 14px; }
  & img { padding-right: 8px; }
  & p:first-of-type { width: 60px; }
  & p:nth-of-type(2) { width: 220px; }
  & p:nth-of-type(3) { width: 130px; }
  & p:last-of-type { padding-right: 6px; }

  @media screen and (min-width: ${xs}) and (max-width: ${sm}) {
    & p:last-of-type { display: none }
  }
`;

export default function CurrencyCard(props) {
  const { image, id, label, price, varr } = props;

  return (
    <Container title={ `${label}:  $ ${price}  -> ${varr?.toFixed(2)}%` }>
      <img src={ image } alt={ label } height='18px' />
      <p>{ id?.toUpperCase() }</p>
      <p>{ label }</p>
      <p>$ { price }</p>
      <p>{ varr } %</p>
    </Container>
  );
}

CurrencyCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  label: PropTypes.string,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  varr: PropTypes.number,
}

CurrencyCard.defaultProps = {
  id: '@@@',
  image: `${import.meta.env.BASE_URL}defaultFlag.png`,
  label: 'Nome da moeda',
  price: 0.00,
  varr: 0.00,
}
