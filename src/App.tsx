import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [greetUser, setGreetUser] = useState("");
  const [username, setUsername] = useState(""); // text input

  const onButtonClick = () => {
    // alert("Hi");
    // setName("Hi " + name);
    setGreetUser(`Hi ${username}`);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setUsername(e.target.value);
  };

  return (
    <div className="container">
      <p>{greetUser}</p>
      <input
        type="text"
        name="userName"
        onChange={handleInput}
        value={username}
      />
      <button onClick={onButtonClick}>Greet the user</button>
    </div>
  );
}

export default App;
