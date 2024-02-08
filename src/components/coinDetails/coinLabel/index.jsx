import { useNavigate } from "react-router-dom";
import { CoinLabelContainer } from "./coinLabelStyle";

import PropTypes from 'prop-types';
import icon from "../../../assets/icons/arrowback.svg";

export default function CoinLabel(props) {
  const { name, image } = props;

  const navigate = useNavigate();
  const iconHolder = 'https://cryptohub-proto.vercel.app/holderIcon.svg';

  return (
    <>
      <CoinLabelContainer>
        <button title='Voltar à página inicial' onClick={ () => navigate('/') }>
          <img src={ icon } alt='Voltar' /> &nbsp;
        </button>

        <img src={ image?.small ?? iconHolder } alt={ name ?? '' } height='32px' />
        <h2>{ name ?? 'Coin' }</h2>
      </CoinLabelContainer>
    </>
  );
}

CoinLabel.propTypes = {
  name: PropTypes.string,
  image: PropTypes.shape({
    small: PropTypes.string,
  }),
}
