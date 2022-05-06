import WelcomeMessage from "./WelcomeMessage";
import ConfirmButton from "./ConfirmButton";
import WithSpinner from "../Shared/WithSpinner";

const Settings = () => {
  return (
    <>
      <WelcomeMessage />
      <ConfirmButton />
    </>
  );
};

export default WithSpinner(Settings);
