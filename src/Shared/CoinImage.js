const CoinImage = ({ symbol, imageUrl, style }) => {
  return (
    <img
      alt={symbol}
      style={style || { height: "50px" }}
      src={`http://cryptocompare.com${imageUrl}`}
    />
  );
};

export default CoinImage;
