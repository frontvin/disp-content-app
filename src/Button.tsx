import React from "react";

import "./Button.css";

export interface Props {
  label: string;
  link: string;
}

export default function Button({ label, link }: Props) {
  return (
    <a href={link} className="navLink">{label}</a>
  );
}
