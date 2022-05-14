import React from "react";

function Person(props) {
  return (
    <div>
      <h1>
        {props.name} {props.age}
      </h1>
    </div>
  );
}

export default Person;
