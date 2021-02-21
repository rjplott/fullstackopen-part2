import React from "react";
import Part from "./Part";

const Content = ({ course }) => (
  <div>
    {course.parts.map((part) => (
      <Part part={part.name} exercise={part.exercises} key={part.id} />
    ))}
  </div>
);

export default Content;
