import styled from "styled-components";
import Card from "../Card";
import PropTypes from 'prop-types';

const MapperContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 600px;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  justify-content: space-evenly;

  @media (max-width: ${ ({ theme }) => theme.breakpoints.sm }) {
    padding-bottom: 96px;
  }

  @media (max-width: ${ ({ theme }) => theme.breakpoints.sm }) {
    padding-bottom: 96px;
    justify-content: center;
  }
`;

const Info = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: ${ ({ theme }) => theme.colors.comp };
  padding: 8px 0 8px 24px ;
  width: inherit;
`;

export default function Mapper({ list }) {
  return (
    <>
      <Info>{ list.length } resultado(s) encontrado(s)</Info>
      <MapperContainer>
        {
          list?.map((coin) => (<Card key={ coin.id } { ...coin }/>))
        }
      </MapperContainer>
    </>
  );
}

Mapper.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
}

Mapper.defaultProps = {
  list: [],
}
