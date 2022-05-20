import withSpinner from "../Shared/WithSpinner";
import PriceGrid from "./PriceGrid";

const Dashboard = () => {
  return (
    <div>
      <PriceGrid />
    </div>
  );
};

export default withSpinner(Dashboard, "dashboard");
