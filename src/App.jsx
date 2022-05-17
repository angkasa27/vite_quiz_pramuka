import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <Switch>
        {/* <Route path="/leaderboard">
        <Leaderboard />
      </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
