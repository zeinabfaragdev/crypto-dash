import { Tile } from "../Shared/Tile";
import CoinImage from "../Shared/CoinImage";
import { useSelector } from "react-redux";
import styled from "styled-components";

const SpotlightName = styled.h2`
  text-align: center;
`;
const CoinSpotlight = () => {
  const currentFav = useSelector((state) => state.coins.currentFav);
  const coins = useSelector((state) => state.coins.list);
  const coin = coins[currentFav];
  return (
    <Tile>
      <SpotlightName> {coin.CoinName}</SpotlightName>
      <CoinImage symbol={coin.Symbol} imageUrl={coin.ImageUrl} spotlight />
    </Tile>
  );
};

export default CoinSpotlight;
