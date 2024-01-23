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
`;

export default function Mapper({ list }) {
  return (
    <MapperContainer>
      {
        list?.map((coin) => (<Card key={ coin.id } { ...coin }/>))
      }
    </MapperContainer>
  );
}

Mapper.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
}

Mapper.defaultProps = {
  list: [],
}
