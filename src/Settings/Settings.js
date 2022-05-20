import WelcomeMessage from "./WelcomeMessage";
import ConfirmButton from "./ConfirmButton";
import WithSpinner from "../Shared/WithSpinner";
import CoinGrid from "./CoinGrid";
import Search from "./Search";

const Settings = () => {
  return (
    <>
      <WelcomeMessage />
      <CoinGrid topSection />
      <ConfirmButton />
      <Search />
      <CoinGrid />
    </>
  );
};

export default WithSpinner(Settings, "settings");
