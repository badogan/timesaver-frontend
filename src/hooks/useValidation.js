import { useState } from "react";

const useValidation = () => {
  const [usernameToValidate, setUsernameToValidate] = useState();
  const [passwordToValidate, setPasswordToValidate] = useState();
  const [errorArray, setErrorArray] = useState([]);

  const addToErrorArray = (string) => {
      setErrorArray(errorArray=>[...errorArray, string])
    };

  const validate = (name, password) => {
    setUsernameToValidate(name);
    setPasswordToValidate(password);
    setErrorArray([])
    if (!passwordToValidate) {
        addToErrorArray("Password does not exist!");
    }
    if (!usernameToValidate) {
        addToErrorArray("Username does not exist!");
    }
    if (passwordToValidate && passwordToValidate.length < 5 ) {
        addToErrorArray("Password length less than 5 characters!");
    }
  };

  return { validate,errorArray };

};

export default useValidation;