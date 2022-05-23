import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import Settings from "../Settings/Settings";
import Dashboard from "../Dashboard/Dashboard";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoinsAsync, getCoinPricesAsync } from "../redux/coins/coinsActions";
import { ThemeProvider } from "styled-components";
import Toggle from "./Toggle";

const App = () => {
  const page = useSelector((state) => state.page.type);
  const currentFav = useSelector((state) => state.coins.currentFav);
  const theme = useSelector((state) => state.page.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinsAsync());
    dispatch(getCoinPricesAsync());
  }, [dispatch]);

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <AppLayout>
        <AppBar />
        <Toggle theme={theme} />
        {page === "settings" && <Settings />}
        {page === "dashboard" && currentFav && <Dashboard />}
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;
