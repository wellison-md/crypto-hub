import styled from 'styled-components';

export const Container = styled.div`
  align-items: ${ (props) => props.align ? props.align : 'center' };
  display: flex;
  flex-direction: ${ (props) => props.orientation ? props.orientation : 'row' };
  flex-wrap: wrap;
  justify-content: ${ (props) => props.justify ? props.justify : 'center' };
`;
