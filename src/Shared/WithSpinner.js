import Spinner from "./Spinner";
import { useSelector } from "react-redux";

const withSpinner = (WrappedComponent, page) => (props) => {
  let isLoading =
    page === "settings"
      ? useSelector((state) => state.coins.coinLoading)
      : useSelector((state) => state.coins.priceLoading);
  return isLoading ? (
    <div>
      <Spinner />
      <span>
        Loading
        {page === "settings" ? <span> Coins</span> : <span> Prices</span>}...
      </span>
    </div>
  ) : (
    <WrappedComponent {...props} />
  );
};
export default withSpinner;
