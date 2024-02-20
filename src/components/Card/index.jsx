import PropTypes from 'prop-types';
import { CardContainer } from "./cardStyle";
import { useNavigate } from 'react-router-dom';
import { maskName } from './cardHelpers';

export default function Card(props) {
  const navigate = useNavigate();
  const { id, name, image, current_price, high_24h,
    low_24h, price_change_percentage_24h } = props;

  return (
    <CardContainer title={ name } onClick={ () => navigate(`/coins/details/${id}`)}>
      <img src={ image } alt={ name } height='32px' />

      <div>
        <h2>{ maskName(name) }</h2>
        <p>preço: USD { current_price }</p>
        <p><span>▲</span> $/24h: USD { high_24h }</p>
        <p><span>▼</span> $/24h: USD { low_24h }</p>
      </div>

      <p>{ price_change_percentage_24h?.toFixed(1) }%</p>
    </CardContainer>
  );
}

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  current_price: PropTypes.number,
  high_24h: PropTypes.number,
  low_24h: PropTypes.number,
  price_change_percentage_24h: PropTypes.number,
}

Card.defaultProps = {
  id: '@id',
  name: 'Nome moeda',
  image: '/holderIcon.svg',
  current_price: 99999.99,
  high_24h: 99999.99,
  low_24h: 99999.99,
  price_change_percentage_24h: 0.00,
}
