import React from "react";

import Button, { IProps } from "./Button";
import "./Buttons.css";

const btnNames: IProps[] = [
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

export function ButtonsGroup() {
  return (
      <div className="buttonGroup">
        {btnNames.map((button) => <Button key={button.label} {...button} />)}
      </div>
  );
}
