import styled from "styled-components";

export const CoinLinks = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 24px 60px;
`;

export const CoinBio = styled.p`
  font-size: 16px;
  text-align: justify;
  line-height: 1.5;
  margin: auto;
  padding: 24px 60px;
`;

export const CoinLink = styled.a`
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px;
  margin-right: 8px;
  margin-bottom: 12px;
  color: white;
  background-color: transparent;
  border-radius: 4px;

  &:hover {
    background-color: #8500d3;
  }
`;
