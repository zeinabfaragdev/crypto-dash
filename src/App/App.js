import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import Settings from "../Settings/Settings";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCoinsAsync } from "../redux/coins/coinsActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoinsAsync());
  }, [dispatch]);

  return (
    <AppLayout>
      <AppBar />
      <Settings />
    </AppLayout>
  );
};

export default App;
