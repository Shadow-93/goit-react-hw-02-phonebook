import React from "react";

import s from "./Filter.module.css";

const Filter = ({ onSearchFilter }) => {
  return (
    <div>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.filterInput}
        type="text"
        onChange={(e) => onSearchFilter(e.target.value)}
      ></input>
    </div>
  );
};

export default Filter;
