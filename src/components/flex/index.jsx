import PropTypes from 'prop-types';
import { Container } from './flexStyle';

export default function Flex({ children, orientation, justify }) {
  return (
    <Container orientation={ orientation } justify={ justify } >
      { children }
    </Container>
  );
}

Flex.propTypes = {
  children: PropTypes.node,
  orientation: PropTypes.string,
  justify: PropTypes.string,
};
