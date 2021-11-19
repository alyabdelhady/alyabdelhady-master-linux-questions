import React from "react";
import Login from "./Components/Login/Login";
import Exam from "./Components/Exam/Exam";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Result from "./Components/Result/Result";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/exam" component={Exam} />
        <Route path="/result" component={Result} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
