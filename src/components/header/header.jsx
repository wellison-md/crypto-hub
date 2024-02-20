import styled from "styled-components";
import theme from '../../styles/theme';

import { FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import { Store } from "../../context/store";
import { searchByName } from "../../utils/handleData";

const { xs, sm } = theme.breakpoints;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchBtn = styled.button`
  padding: 8px 12px;
  background-color: black;
  border: none;
  color: white;
`;

const Label = styled.h1`
  align-items: center;
  background-color: black;
  color: white;
  display: flex;
  font-size: 28px;
  font-weight: 600;
  height: 64px;
  padding-left: 250px;
  width: 100%;

  @media screen and (min-width: ${xs}) and (max-width: ${sm}) {
    padding-left: 12px;
  }
`;

const SearcInput = styled.input`
  position: fixed;
  top: 64px;
  padding: 8px;
  width: 100%;
  background-color: lightgray;
  z-index: 1000;
`;

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const { vault, setCoins } = useContext(Store);
  const [term, setTerm] = useState('');

  const isHome = window.location.pathname.includes('/coins/details')

  function handleClick(target) {
    setTerm(target);
    return setCoins(searchByName([...vault], target));
  }

  return (
    <Container>
      <Label>crypto.hub</Label>
      {
        !isHome &&
        (<SearchBtn onClick={ () => setIsVisible(!isVisible) }>
           <FaSearch size='16px' />
         </SearchBtn>)
      }
      {
        isVisible && (
        <SearcInput
          type='text'
          placeholder="digite o nome da moeda"
          onChange={ (e) => handleClick(e.target.value) }
          value={ term }
        />)
      }
    </Container>
  )
}
