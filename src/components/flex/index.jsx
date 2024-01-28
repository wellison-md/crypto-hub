import PropTypes from 'prop-types';
import { Container } from './flexStyle';

export default function Flex({ children, orientation, justify, align, bg }) {
  return (
    <Container orientation={ orientation } justify={ justify } align={ align } bg={ bg }>
      { children }
    </Container>
  );
}

Flex.propTypes = {
  children: PropTypes.node,
  orientation: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  bg: PropTypes.string,
};
