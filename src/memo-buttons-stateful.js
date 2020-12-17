import React, { memo } from "react";
import ReusableButtonComponent from "./reusable-button-component";
export const MemoButtons = memo(({ setValue, from, name }) => {
  console.log(`from: ${from} -> render: MemoButtons as ${name}`);
  return (
    <ReusableButtonComponent
      from="MemoButtons"
      name="MemoButtons"
      {...{ setValue }}
    />
  );
});
