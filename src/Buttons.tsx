import React from "react";
import { Button } from "./Button";

import "./Buttons.css";

const btnNames = [
  {
    label: "Posts",
    link: "/posts"
  },
  {
    label: "Comments",
    link: "/comments"
  },
  {
    label: "Albums",
    link: "/albums"
  },
  {
    label: "Photos",
    link: "/photos"
  },
  {
    label: "Todos",
    link: "/todos"
  },
  {
    label: "Users",
    link: "/users"
  }
];

class Buttons extends React.Component {
  public render(){
    return (
        <Button items={btnNames}/>
    )
  }
};

export { Buttons };
