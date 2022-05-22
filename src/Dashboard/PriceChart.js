import HighchartsConfig from "./HighchartsConfig";
import { Tile } from "../Shared/Tile";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HighchartsTheme from "./HighChartsTheme";

Highcharts.setOptions(HighchartsTheme);

const PriceChart = () => {
  return (
    <Tile>
      <HighchartsReact highcharts={Highcharts} options={HighchartsConfig()} />
    </Tile>
  );
};

export default PriceChart;
