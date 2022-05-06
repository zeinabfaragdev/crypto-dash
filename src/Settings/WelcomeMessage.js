import { useSelector } from "react-redux";

const WelcomeMessage = () => {
  const firstVisit = useSelector((state) => state.page.firstVisit);
  return firstVisit ? (
    <h1>Welcome to CryptoDash, please select your favorite coins to begin</h1>
  ) : null;
};

export default WelcomeMessage;
