import styled from "styled-components";
import PropTypes from 'prop-types';
import theme from "../../styles/theme";

const { xs, sm } = theme.breakpoints;

const WrapperContainer = styled.div`
  margin: 72px 250px;

  @media screen and (min-width: ${xs}) and (max-width: ${sm}) {
    margin: 0;
    padding: 0;
  }
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
