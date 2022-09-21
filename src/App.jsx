import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Body } from "./Styles/Styles.styled";

function App() {
  return (
    <div>
      <Body>
        <Header />

        <Home />
      </Body>
    </div>
  );
}

export default App;
