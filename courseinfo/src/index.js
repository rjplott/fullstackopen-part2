import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => <h2>{props.course.name}</h2>;

const Part = (props) => (
  <p>
    {props.part} {props.exercise}
  </p>
);

const Content = (props) => (
  <div>
    {props.course.parts.map((part) => (
      <Part part={part.name} exercise={part.exercises} key={part.id} />
    ))}
  </div>
);

const Total = (props) => (
  <h3>
    Number of exercises{" "}
    {props.course.parts.reduce((sum, part) => sum + part.exercises, 0)}
  </h3>
);

const Course = (props) => {
  console.log(props);
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
      <Total course={props.course} />
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Web development curriculum</h1>
      <div>
        {courses.map((course) => {
          return <Course course={course} key={course.id} />;
        })}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
