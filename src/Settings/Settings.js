import WelcomeMessage from "./WelcomeMessage";
import ConfirmButton from "./ConfirmButton";
import WithSpinner from "../Shared/WithSpinner";
import CoinGrid from "./CoinGrid";

const Settings = () => {
  return (
    <>
      <WelcomeMessage />
      <CoinGrid topSection />
      <ConfirmButton />
      <CoinGrid />
    </>
  );
};

export default WithSpinner(Settings);
