import { SelectableTile, DeletableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

const CoinTile = ({ coin, topSection }) => {
  const TileClass = topSection ? DeletableTile : SelectableTile;
  return (
    <TileClass>
      <CoinHeaderGrid
        topSection={topSection}
        name={coin.CoinName}
        symbol={coin.Symbol}
      />
      <CoinImage symbol={coin.Symbol} imageUrl={coin.ImageUrl} />
    </TileClass>
  );
};

export default CoinTile;
