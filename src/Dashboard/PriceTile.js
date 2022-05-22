import styled, { css } from "styled-components";
import { SelectableTile } from "../Shared/Tile";
import { fontSize3, fontSizeBig, greenBoxShadow } from "../Shared/Styles";
import { CoinHeaderGridStyled } from "../Settings/CoinHeaderGrid";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentFav } from "../redux/coins/coinsActions";
const PriceTileStyled = styled(SelectableTile)`
  ${(props) =>
    props.compact &&
    css`
      display: grid;
      ${fontSize3};
      grid-gap: 5px;
      grid-template-columns: repeat(3, 1fr);
      justify-items: right;
    `}
  ${(props) =>
    props.currentFav &&
    css`
      ${greenBoxShadow};
      pointer-events: none;
    `}
`;

const JustifyLeft = styled.div`
  justify-self: left;
`;

const ChangePercent = styled.div`
  justify-self: right;
  color: green;
  ${(props) =>
    props.red &&
    css`
      color: red;
    `}
`;

const TickerPrice = styled.div`
  ${fontSizeBig}
`;
const numberFormat = (number) => {
  return +(number + "").slice(0, 7);
};

const PriceTileCompact = ({
  priceData,
  changePct,
  sym,
  currentFav,
  handlePriceClick,
}) => (
  <PriceTileStyled compact currentFav={currentFav} onClick={handlePriceClick}>
    <JustifyLeft>{sym}</JustifyLeft>
    <ChangePercent red={changePct < 0}>{numberFormat(changePct)}</ChangePercent>
    <div>${numberFormat(priceData)}</div>
  </PriceTileStyled>
);

const PriceTileFull = ({
  currentFav,
  changePct,
  priceData,
  sym,
  handlePriceClick,
}) => (
  <PriceTileStyled currentFav={currentFav} onClick={handlePriceClick}>
    <CoinHeaderGridStyled>
      <div>{sym}</div>
      <ChangePercent red={changePct < 0}>
        {numberFormat(changePct)}
      </ChangePercent>
    </CoinHeaderGridStyled>
    <TickerPrice>${numberFormat(priceData)}</TickerPrice>
  </PriceTileStyled>
);

const PriceTile = ({ price, index }) => {
  let sym = Object.keys(price)[0];
  let priceData = price[sym].USD.PRICE;
  let changePct = price[sym].USD.CHANGEPCT24HOUR;

  const TileClass = index < 5 ? PriceTileFull : PriceTileCompact;
  const currentFav = useSelector((state) => state.coins.currentFav);
  const dispatch = useDispatch();

  const handlePriceClick = () => {
    dispatch(setCurrentFav(sym));
  };
  return (
    <TileClass
      currentFav={currentFav === sym}
      priceData={priceData}
      changePct={changePct}
      sym={sym}
      style={{ color: "red" }}
      handlePriceClick={handlePriceClick}
    />
  );
};

export default PriceTile;
