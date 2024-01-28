import styled from "styled-components";
import PropTypes from 'prop-types';

const WrapperContainer = styled.div`
  margin: 72px 250px;
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
