import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import WelcomeMessage from "./WelcomeMessage";
import "./App.css";

const App = () => {
  return (
    <AppLayout>
      <AppBar />
      <WelcomeMessage />
    </AppLayout>
  );
};

export default App;
