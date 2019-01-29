import React from "react";
import { ButtonsGroup } from "./ButtonsGroup";
import { Content } from "./Content";

import "./App.css";

// declare App Interface
interface IState {
  activeButton: boolean;
  currentContent: string;
  error: boolean;
  loading: boolean;
  response: string;
}

class App extends React.Component<{}, IState> {
  public constructor(props: object) {
    super(props);

    this.state = {
      activeButton: false,
      currentContent: "",
      error: false,
      loading: false,
      response: "",
    };
  }

  public getNewContent = (newContent: string) => {
    this.setState({ currentContent: newContent });
  }

  public render() {
    const { currentContent } = this.state;
    return (
      <div className="App">
        <ButtonsGroup content={this.getNewContent} />
        <Content content={currentContent} />
      </div>
    );
  }
}

export default App;
