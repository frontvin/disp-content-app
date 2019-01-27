import * as React from "react";
import { Buttons } from "./Buttons";
import { Content } from "./Content";

import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Buttons />
        <Content />
      </div>
    );
  }
}

export default App;
