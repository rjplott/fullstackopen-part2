import React from "react";

const Filter = ({ filter, eventHandler }) => {
  return (
    <div>
      <label>
        filter shown with <input value={filter} onChange={eventHandler} />
      </label>
    </div>
  );
};

export default Filter;
