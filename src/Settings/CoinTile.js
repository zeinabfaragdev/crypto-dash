import { SelectableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

const CoinTile = ({ coin }) => {
  console.log(coin);
  return (
    <SelectableTile>
      <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
      <CoinImage symbol={coin.Symbol} imageUrl={coin.ImageUrl} />
    </SelectableTile>
  );
};

export default CoinTile;
