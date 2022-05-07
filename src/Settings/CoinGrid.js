import styled from "styled-components";
import { useSelector } from "react-redux";
import { SelectableTile } from "../Shared/Tile";

const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

const CoinGrid = () => {
  const coins = useSelector((state) => state.coins.list);
  return (
    <CoinGridStyled>
      {Object.keys(coins).map((coin) => (
        <SelectableTile key={coin}>{coin}</SelectableTile>
      ))}
    </CoinGridStyled>
  );
};

export default CoinGrid;
