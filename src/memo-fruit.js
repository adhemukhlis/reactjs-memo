import React, { memo } from "react";
import { title } from "case";
export const MemoFruit = memo(({ fruit_name, from }) => {
  console.log(`from: ${from} -> render: MemoFruit with value '${fruit_name}'`);
  return <b>{title(fruit_name)}</b>;
});
