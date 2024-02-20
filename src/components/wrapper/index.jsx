import styled from "styled-components";
import PropTypes from 'prop-types';

const WrapperContainer = styled.div`
  @media screen and (min-width: 1366px) and (max-width: 1600px) {
    margin: 12px 100px;
  }

  @media screen and (min-width: 1600px) and (max-width: 1920px) {
    margin: 64px 250px;
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
