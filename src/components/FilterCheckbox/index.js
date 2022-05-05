import React from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox({ id, name, checked, setChecked }) {
  function handleFilterClick(e) {
    const val = e.target.id;
    const currentIndex = checked.indexOf(val);
    const newChecked = [...checked];

    if (currentIndex === -1) newChecked.push(val);
    else newChecked.splice(currentIndex, 1);

    setChecked(newChecked);
  }

  return (
    <div className="filter-pairs">
      <input
        className="filters"
        type="checkbox"
        id={id}
        onChange={handleFilterClick}
      ></input>
      <label className="filters-label" htmlFor={id}>
        {name}
      </label>
    </div>
  );
}
