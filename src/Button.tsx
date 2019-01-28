import React from "react";

import "./Button.css";

export interface IProps {
  label: string;
  link: string;
}

export default function Button({ label, link }: IProps) {
  return (
    <a href={link} className="navLink">{label}</a>
  );
}
