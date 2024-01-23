import PropTypes from 'prop-types';
import { Container } from './flexStyle';

export default function Flex({ children, orientation, justify, align }) {
  return (
    <Container orientation={ orientation } justify={ justify } align={ align } >
      { children }
    </Container>
  );
}

Flex.propTypes = {
  children: PropTypes.node,
  orientation: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
};
