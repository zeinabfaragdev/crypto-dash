import styled from "styled-components";
import { useSelector } from "react-redux";
import CoinTile from "./CoinTile";

const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`;

const getLowerSectionCoins = (coins, filteredCoins) => {
  return (
    (filteredCoins && Object.keys(filteredCoins)) ||
    Object.keys(coins).slice(0, 100)
  );
};

const getCoinsDisplay = (coins, filteredCoins, topSection, favorites) => {
  return topSection ? favorites : getLowerSectionCoins(coins, filteredCoins);
};

const CoinGrid = ({ topSection }) => {
  const coins = useSelector((state) => state.coins.list);
  const filteredCoins = useSelector((state) => state.coins.filtered);

  const favorites = useSelector((state) => state.favorites);

  return (
    <CoinGridStyled>
      {getCoinsDisplay(coins, filteredCoins, topSection, favorites).map(
        (coinKey) => (
          <CoinTile
            topSection={topSection}
            key={coinKey}
            coinKey={coinKey}
            coin={coins[coinKey]}
          />
        )
      )}
    </CoinGridStyled>
  );
};

export default CoinGrid;
