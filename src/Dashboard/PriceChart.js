import HighchartsConfig from "./HighchartsConfig";
import { Tile } from "../Shared/Tile";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HighchartsTheme from "./HighChartsTheme";
import { useSelector } from "react-redux";

Highcharts.setOptions(HighchartsTheme);

const PriceChart = () => {
  const priceHistory = useSelector((state) => state.coins.priceHistory);
  return (
    <Tile>
      {priceHistory ? (
        <HighchartsReact
          highcharts={Highcharts}
          options={HighchartsConfig(priceHistory)}
        />
      ) : (
        <div> Loading Price History ...</div>
      )}
    </Tile>
  );
};

export default PriceChart;
