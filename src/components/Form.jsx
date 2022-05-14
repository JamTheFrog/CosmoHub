import { useState } from "react";
import './style.css'
const Form = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [className, setClassName] = useState("");
  const [arg, setArg] = useState(0)

  const inputError = (a) => {
    if (a == 0) {
        return (
        <>
        </>
        );
    }
    else if (a == 1){
        return (
        <>
            <p>This is an error</p>
            {setClassName("notNormalCSSsecond")}
        </>
        )
    }
  }
  const nameInputHandler = (event) => {
    setName(event.target.value);
  };
  const numberInputHandler = (event) => {
    setNumber(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (name.length > 20 || name.length < 6){
        setArg(1);
    }
    else {
        setArg(0);
    }
    
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <h1>This is a form</h1>
      <input type="text" onChange={nameInputHandler} value={name} className={className}/>
      <input type="number" onChange={numberInputHandler} value={number} className={className}/>
      <p>This is your name {name}</p>
      <p>This is your age {number}</p>
      <div>{inputError(arg)}</div>
      <button>Nesta</button>
    </form>
  );
};

export default Form;
