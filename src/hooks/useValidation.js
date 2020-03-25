import { useState, useEffect } from "react";

const useValidation = () => {
  const [usernameToValidate, setUsernameToValidate] = useState(null);
  const [passwordToValidate, setPasswordToValidate] = useState(null);
  const [errorArray, setErrorArray] = useState([]);

  useEffect(() => {
    runValidationRules();
  }, [usernameToValidate, passwordToValidate]);

  useEffect(() => {
    setErrorArray([])
  }, []);

  const addToErrorArray = string => {
    setErrorArray(errorArray => [...errorArray, string]);
  };

  const runValidationRules = () => {
      setErrorArray([])
    if (!passwordToValidate) {
      addToErrorArray("Password does not exist!");
    }
    if (!usernameToValidate) {
      addToErrorArray("Username does not exist!");
    }
    if (passwordToValidate && passwordToValidate.length < 5) {
      addToErrorArray("Password length less than 5 characters!");
    }
  };

  const validate = (name, password) => {
    setUsernameToValidate(name);
    setPasswordToValidate(password);
  };

  return { validate, errorArray };
};

export default useValidation;
