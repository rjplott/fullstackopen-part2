import React from "react";

const Total = (props) => (
  <h3>
    Number of exercises{" "}
    {props.course.parts.reduce((sum, part) => sum + part.exercises, 0)}
  </h3>
);

export default Total;
