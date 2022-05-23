import Spinner from "./Spinner";
import { useSelector } from "react-redux";

const withSpinner = (WrappedComponent, page) => (props) => {
  let coinLoading = useSelector((state) => state.coins.coinLoading);
  let priceLoading = useSelector((state) => state.coins.priceLoading);

  let isLoading;

  if (page === "settings") {
    isLoading = coinLoading;
  }

  if (page === "dashboard") {
    isLoading = coinLoading || priceLoading;
  }

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
