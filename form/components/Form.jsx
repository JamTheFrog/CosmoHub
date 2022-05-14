import { useState } from "react";

const Form = (props) => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  const inputNumberHandler = (event) => {
    setNumber(event.target.value);
  };

  const inputTextHandler = (event) => {
    setText(event.target.value);
  };
  const sumbitFormHandler = (event) => {
    event.preventDefault();
    const person = { name: text, age: number };
    props.onGetPersonData(person);
    setNumber("");
    setText("");
  };

  return (
    <form onSubmit={sumbitFormHandler}>
      <input
        onChange={inputTextHandler}
        type="text"
        placeholder="Add text"
        value={text}
      />
      <input
        onChange={inputNumberHandler}
        type="number"
        placeholder="Add number"
        value={number}
      />
      <button>Submit</button>
    </form>
  );
};
export default Form;
