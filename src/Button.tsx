import React from "react";

import "./Button.css";

export interface IProps {
  label: string;
  link?: string;
  // getNewContent: () => void;
}

export default function Button({ label }: IProps) {
  return (
    <button className="navLink">{label}</button>
  );
}
