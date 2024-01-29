import styled from "styled-components";

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

  @media (max-width: ${ ({ theme }) => theme.breakpoints.xs }) {
    padding-left: 12px;
  }
`;

export default function Header() {
  return <Label>crypto.hub</Label>
}
