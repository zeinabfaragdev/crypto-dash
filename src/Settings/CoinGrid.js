import styled from "styled-components";
import { useSelector } from "react-redux";
import CoinTile from "./CoinTile";

const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`;

const getCoinsDisplay = (coins, topSection, favorites) => {
  return topSection ? favorites : Object.keys(coins).slice(0, 100);
};

const CoinGrid = ({ topSection }) => {
  const coins = useSelector((state) => state.coins);
  const favorites = useSelector((state) => state.favorites);

  return (
    <CoinGridStyled>
      {getCoinsDisplay(coins, topSection, favorites).map((coinKey) => (
        <CoinTile
          topSection={topSection}
          key={coinKey}
          coinKey={coinKey}
          coin={coins[coinKey]}
        />
      ))}
    </CoinGridStyled>
  );
};

export default CoinGrid;
