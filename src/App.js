import React from "react";
import "./style.css";
import Home from "./Home";
import Setup from "./Setup";
import Jsx from "./Jsx";
import Apicalls from "./Api calls";
import Appphases from "./App phases";
import { Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/setup" component={Setup} />
        <Route path="/jsx" component={Jsx} />
        <Route path="/api calls" component={Apicalls} />
        <Route path="/app phases" component={Appphases} />
      </Switch>
    </>
  );
};
export default App;
