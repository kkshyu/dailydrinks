import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
    </BrowserRouter>
  );
};

export default App;
