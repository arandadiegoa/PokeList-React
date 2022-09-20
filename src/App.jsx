import { Home } from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
