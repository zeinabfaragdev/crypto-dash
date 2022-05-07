import styled from "styled-components";

const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const CoinSymbol = styled.div`
  justify-self: right;
`;

const CoinHeaderGrid = ({ name, symbol }) => {
  return (
    <CoinHeaderGridStyled>
      <div>{name}</div>
      <CoinSymbol>{symbol}</CoinSymbol>
    </CoinHeaderGridStyled>
  );
};

export default CoinHeaderGrid;
