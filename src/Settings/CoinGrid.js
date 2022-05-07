import styled from "styled-components";
import { useSelector } from "react-redux";
import CoinTile from "./CoinTile";

const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

const getCoinsDisplay = (coins) => {
  return Object.keys(coins).slice(0, 100);
};

const CoinGrid = () => {
  const coins = useSelector((state) => state.coins.list);

  return (
    <CoinGridStyled>
      {getCoinsDisplay(coins).map((coinKey) => (
        <CoinTile key={coinKey} coin={coins[coinKey]} />
      ))}
    </CoinGridStyled>
  );
};

export default CoinGrid;
