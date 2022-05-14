import React, { useState } from "react";
import ItemContainer from "./components/ItemContainer";
import Form from "./components/Form";
import Persons from "./components/Persons";

const App = () => {
  const getPersonData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Form onGetPersonData={getPersonData} />
      <Persons />
    </div>
  );
};

export default App;
