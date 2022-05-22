import HighChartsConfig from "./HighChartsConfig";
import { Tile } from "../Shared/Tile";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const PriceChart = () => {
  return (
    <Tile>
      <HighchartsReact highcharts={Highcharts} options={HighChartsConfig()} />
    </Tile>
  );
};

export default PriceChart;
