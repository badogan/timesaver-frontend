import React, { useState, useEffect } from "react";
import useValidation from "../hooks/useValidation";
import ListErrors from './ListErrors'

const SignInForm = props => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { validate, errorArray } = useValidation();

  const sendToUpdateUserSignIn = event => {
    validate(username, password);


    //   if (validationResultsArray.length === 0) {
    //     console.log("everything is OK!");
    //     // event.preventDefault();
    //     props.updateUserSignin({ username, password });
    //     // document.getElementById('form33').reset()
    //   } else {
    //     console.log("somethngs wrong");
    //     console.log(validationResultsArray);
    //   }
  };

  const handlePassword = e => setPassword(e.target.value);
  const handleUsername = e => setUsername(e.target.value);

  return (
    <div className="signin-container wrapper">
        <ListErrors errorArray={errorArray}/>
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
