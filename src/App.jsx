import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import About from "./pages/About";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/leaderboard">
          <Leaderboard />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
