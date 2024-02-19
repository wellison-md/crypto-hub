import styled from "styled-components";
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

const { xs, sm } = theme.breakpoints;

const WrapperContainer = styled.div`
  @media screen and (min-width: ${xs}) and (max-width: ${sm}) {}
`;

export default function Wrapper({ children }) {
  return (
    <WrapperContainer>
      { children }
    </WrapperContainer>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
