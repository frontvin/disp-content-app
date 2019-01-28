import React from "react";

import Button, { Props as ButtonProps } from "./Button";
import "./Buttons.css";

const btnNames: ButtonProps[] = [
  {
    label: "Posts",
    link: "/posts",
  },
  {
    label: "Comments",
    link: "/comments",
  },
  {
    label: "Albums",
    link: "/albums",
  },
  {
    label: "Photos",
    link: "/photos",
  },
  {
    label: "Todos",
    link: "/todos",
  },
  {
    label: "Users",
    link: "/users",
  },
];

export function Buttons() {
  return (
      <div className="buttonGroup">
        {btnNames.map((button) => <Button key={button.label} {...button} />)}
      </div>
  );
}
