import styled, { css } from "styled-components";

const CoinImageStyled = styled.img`
  height: 50px;
  ${(props) =>
    props.spotlight &&
    css`
      height: 200px;
      display: block;
      margin: auto;
    `}
`;

const CoinImage = ({ symbol, imageUrl, spotlight }) => {
  return (
    <CoinImageStyled
      spotlight={spotlight}
      alt={symbol}
      src={`http://cryptocompare.com${imageUrl}`}
    />
  );
};

export default CoinImage;
