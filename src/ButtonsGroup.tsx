import React from "react";
import {btnNames} from "./App";
import Button from "./Button";
import "./ButtonsGroup.css";

export function ButtonsGroup() {
  return (
      <div className="buttonGroup">
        {btnNames.map((button) => <Button key={button.label} {...button} />)}
      </div>
  );
}
