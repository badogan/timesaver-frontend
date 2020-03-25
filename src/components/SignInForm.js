import React, { useState, useEffect } from "react";
import useValidation from "../hooks/useValidation";
import ListErrors from "./ListErrors";

const SignInForm = props => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { validate, errorArray } = useValidation();

  useEffect(() => {
    doSignIn();
  }, [errorArray]);

  const doSignIn = () => {
    if (errorArray && (errorArray.length === 0)) {
      console.log("I can initiate the process now!");
      props.updateUserSignin({ username, password });
    }
  };

  const sendToUpdateUserSignIn = () => validate(username, password)

  const handlePassword = e => setPassword(e.target.value);
  const handleUsername = e => setUsername(e.target.value);

  return (
    <div className="signin-container wrapper">
        {errorArray ? <ListErrors errorArray={errorArray} /> : null }
    
      <h3>Signin form</h3>
      <form id="form33">
        {/* <label>Username: </label> */}
        <input
          onChange={handleUsername}
          type="text"
          placeholder="Username..."
          name="username"
        ></input>
        <br />
        {/* <label>Password: </label> */}
        <input
          onChange={handlePassword}
          type="password"
          placeholder="Password..."
          name="password"
        ></input>
      </form>
      <br />
      <button className="signin-button" onClick={sendToUpdateUserSignIn}>
        {/* {" "} */}
        Signin
      </button>
    </div>
  );
};

export default SignInForm;
