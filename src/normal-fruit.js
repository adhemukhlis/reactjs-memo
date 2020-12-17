import React from "react";
import { title } from "case";
export const NormalFruit = ({ fruit_name, from }) => {
  console.log(
    `from: ${from} -> render: NormalFruit with value '${fruit_name}'`
  );
  return <b>{title(fruit_name)}</b>;
};
