import React from "react";
import { InputBase } from "@material-ui/core";

export default function iputslabes({
  id,
  placeholder,
  onchange,
  defaultValue,
}) {
  return (
    <div className="bg-gray-200 m-3 w-full px-2 rounded flex">
      <InputBase
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        fullWidth
        className="m-2"
        margin="normal"
        variant="filled"
        onChange={onchange}
      />
    </div>
  );
}
