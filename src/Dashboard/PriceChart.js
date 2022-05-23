import HighchartsConfig from "./HighchartsConfig";
import { Tile } from "../Shared/Tile";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HighchartsTheme from "./HighChartsTheme";
import { useSelector, useDispatch } from "react-redux";
import { setTimeInterval } from "../redux/coins/coinsActions";
import ChartSelect from "./ChartSelect";

Highcharts.setOptions(HighchartsTheme);

const PriceChart = () => {
  const priceHistory = useSelector((state) => state.coins.priceHistory);
  const timeInterval = useSelector((state) => state.coins.timeInterval);
  const dispatch = useDispatch();

  return (
    <Tile>
      <ChartSelect
        defaultValue={timeInterval}
        onChange={(e) => dispatch(setTimeInterval(e.target.value))}
      >
        <option value="days"> Days </option>
        <option value="weeks"> Weeks </option>
        <option value="months"> Months </option>
      </ChartSelect>
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
