import * as React from "react";
import { ButtonsGroup } from "./ButtonsGroup";
import { Content } from "./Content";

import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ButtonsGroup />
        <Content />
      </div>
    );
  }
}

export default App;
