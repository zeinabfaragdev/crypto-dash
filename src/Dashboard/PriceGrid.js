import styled from "styled-components";
import { useSelector } from "react-redux";
import PriceTile from "./PriceTile";

const PriceGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

const PriceGrid = () => {
  const prices = useSelector((state) => state.coins.prices);

  return (
    <PriceGridStyled>
      {prices.map((price, i) => (
        <PriceTile key={i} price={price} index={i} />
      ))}
    </PriceGridStyled>
  );
};

export default PriceGrid;
