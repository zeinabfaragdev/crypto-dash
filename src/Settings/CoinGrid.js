import styled from "styled-components";
import { useSelector } from "react-redux";

const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const CoinGrid = () => {
  const coins = useSelector((state) => Object.keys(state.coins.list));
  return (
    <CoinGridStyled>
      {coins.map((coin) => (
        <div key={coin}>{coin}</div>
      ))}
    </CoinGridStyled>
  );
};

export default CoinGrid;
