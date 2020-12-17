import React from "react";
import ReusableButtonComponent from "./reusable-button-component";
export const NormalButtons = ({ setValue, from, name }) => {
  console.log(`from: ${from} -> render: NormalButtons as ${name}`);
  return (
    <ReusableButtonComponent
      from="NormalButtons"
      name="NormalButtons"
      {...{ setValue }}
    />
  );
};
