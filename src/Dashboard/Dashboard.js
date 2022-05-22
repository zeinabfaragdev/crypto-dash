import withSpinner from "../Shared/WithSpinner";
import PriceGrid from "./PriceGrid";
import CoinSpotlight from "./CoinSpotlight";
import styled from "styled-components";
import PriceChart from "./PriceChart";

const ChartGrid = styled.div`
  display: grid;
  margin-top: 20px;
  grid-gap: 15px;
  grid-template-columns: 1fr 3fr;
`;
const Dashboard = () => {
  return (
    <div>
      <PriceGrid />
      <ChartGrid>
        <CoinSpotlight />
        <PriceChart />
      </ChartGrid>
    </div>
  );
};

export default withSpinner(Dashboard, "dashboard");
