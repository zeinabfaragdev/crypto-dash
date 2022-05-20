import styled, { css } from "styled-components";
import { SelectableTile } from "../Shared/Tile";
import { fontSize3, fontSizeBig } from "../Shared/Styles";
import { CoinHeaderGridStyled } from "../Settings/CoinHeaderGrid";

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

const PriceTileCompact = ({ priceData, changePct, sym }) => (
  <PriceTileStyled compact>
    <JustifyLeft>{sym}</JustifyLeft>
    <ChangePercent red={changePct < 0}>{numberFormat(changePct)}</ChangePercent>
    <div>${numberFormat(priceData)}</div>
  </PriceTileStyled>
);

const PriceTile = ({ price, index }) => {
  let sym = Object.keys(price)[0];
  let priceData = price[sym].USD.PRICE;
  let changePct = price[sym].USD.CHANGEPCT24HOUR;

  return index < 5 ? (
    <PriceTileStyled>
      <CoinHeaderGridStyled>
        <div>{sym}</div>
        <ChangePercent red={changePct < 0}>
          {numberFormat(changePct)}
        </ChangePercent>
      </CoinHeaderGridStyled>
      <TickerPrice>${numberFormat(priceData)}</TickerPrice>
    </PriceTileStyled>
  ) : (
    <PriceTileCompact priceData={priceData} changePct={changePct} sym={sym} />
  );
};

export default PriceTile;
