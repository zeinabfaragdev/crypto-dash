import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import Settings from "../Settings/Settings";
import Dashboard from "../Dashboard/Dashboard";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCoinsAsync,
  getCoinPricesAsync,
  getPriceHistoryAsync,
} from "../redux/coins/coinsActions";

const App = () => {
  const page = useSelector((state) => state.page.type);
  const currentFav = useSelector((state) => state.coins.currentFav);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoinsAsync());
    dispatch(getCoinPricesAsync());
    dispatch(getPriceHistoryAsync());
  }, [dispatch]);

  return (
    <AppLayout>
      <AppBar />
      {page === "settings" && <Settings />}
      {page === "dashboard" && currentFav && <Dashboard />}
    </AppLayout>
  );
};

export default App;
