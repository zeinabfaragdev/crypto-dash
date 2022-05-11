import Spinner from "./Spinner";
import { useSelector } from "react-redux";

const withSpinner = (WrappedComponent) => (props) => {
  const isLoading = useSelector((state) => state.page.loading);
  return isLoading ? (
    <div>
      <Spinner />
      <span> Loading Coins... </span>
    </div>
  ) : (
    <WrappedComponent {...props} />
  );
};
export default withSpinner;
