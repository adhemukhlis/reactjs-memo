import React from "react";
import { upper } from "case";
export const NormalDescription = ({ description, from }) => {
  console.log(
    `from: ${from} -> render: NormalDescription with value '${description}'`
  );
  return (
    <>
      <i>{upper(description)}</i>
      <hr />
    </>
  );
};
