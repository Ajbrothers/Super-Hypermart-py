import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import ProductPanel from "./components/ProductPanel";
import CustomerPanel from "./components/CustomerPanel";
import PunchInOut from "./components/PunchInOut";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/product-panel" component={ProductPanel} />
          <Route path="/customer-panel" component={CustomerPanel} />
          <Route path="/punch-in-out" component={PunchInOut} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
