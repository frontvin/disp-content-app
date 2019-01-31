import React from "react";
import {btnNames} from "./App";
import Button from "./Button";
import "./ButtonsGroup.css";

export interface IBtnGroup {
    button: string;
}

export const ButtonsGroup: React.FC<IBtnGroup> = () => {
  return (
      <div className="buttonGroup">
        {btnNames.map((button) => <Button key={button.label} {...button} />)}
      </div>
  );
}
