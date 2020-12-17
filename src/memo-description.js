import React, { memo } from "react";
import { upper } from "case";
export const MemoDescription = memo(({ description, from }) => {
  console.log(
    `from: ${from} -> render: MemoDescription with value '${description}'`
  );
  return (
    <>
      <i>{upper(description)}</i>
      <hr />
    </>
  );
});
