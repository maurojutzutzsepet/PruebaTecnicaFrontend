import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";

export default function search({ onchange }) {
  return (
    <div className="bg-white px-2 rounded flex">
      <InputBase
        placeholder="Buscar fiscalias"
        className="m-2"
        fullWidth
        onChange={onchange}
      />
      <SearchIcon className="m-3" />
    </div>
  );
}
