import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

import "./App.css";

const HatsPage = () => <div>HATS PAGE</div>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;