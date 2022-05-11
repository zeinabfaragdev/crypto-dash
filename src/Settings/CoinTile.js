import { SelectableTile, DeletableTile, DisabledTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";
import {
  addFavoriteCoin,
  removeCoin,
} from "../redux/favorites/favoritesActions";
import { useDispatch, useSelector } from "react-redux";

const CoinTile = ({ coin, coinKey, topSection }) => {
  const favorites = useSelector((state) => state.favorites);

  let inFavorites = favorites.includes(coinKey);

  const TileClass = topSection
    ? DeletableTile
    : inFavorites
    ? DisabledTile
    : SelectableTile;

  const dispatch = useDispatch();

  const clickCoinHandler = (coinKey, topSection) => {
    topSection
      ? dispatch(removeCoin(coinKey))
      : dispatch(addFavoriteCoin(coinKey));
  };

  return (
    <TileClass onClick={() => clickCoinHandler(coinKey, topSection)}>
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
