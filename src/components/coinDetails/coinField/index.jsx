import PropTypes from "prop-types";
import { Container } from "./coinFieldStyle";

export default function CoinField({ label, value, icon }) {
  return (
    <Container title={ `${label}: ${value}` }>
      <div>
        <img src={ icon } height='24px' />
        <p>{ label }</p>
      </div>
      <p>{ value }</p>
    </Container>
  );
}

CoinField.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}

CoinField.defaultProps = {
  icon: `${import.meta.env.BASE_URL}propHolder.svg`,
  label: 'nome da propriedade',
  value: 'valor da prop',
}
