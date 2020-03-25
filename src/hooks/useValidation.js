import { useState, useEffect } from "react";

const useValidation = () => {
  const [usernameToValidate, setUsernameToValidate] = useState(null);
  const [passwordToValidate, setPasswordToValidate] = useState(null);
  const [errorArray, setErrorArray] = useState(null);

  useEffect(() => {
    runValidationRules();
  }, [usernameToValidate, passwordToValidate]);

  useEffect(() => {
    setErrorArray(null);
  }, []);

  const pushValidationResultsToErrorArray = validationTestResults => {
    setErrorArray(errorArray => [...errorArray].concat(validationTestResults));
  };

  const runValidationRules = () => {
    setErrorArray([]);
    let validationTestResults = [];
    if (!passwordToValidate) {
      validationTestResults.push("Password does not exist!");
    }
    if (!usernameToValidate) {
      validationTestResults.push("Username does not exist!");
    }
    if (passwordToValidate && passwordToValidate.length < 5) {
      validationTestResults.push("Password length less than 5 characters!");
    }
    pushValidationResultsToErrorArray(validationTestResults);
  };

  const validate = (name, password) => {
    setUsernameToValidate(name);
    setPasswordToValidate(password);
  };

  return { validate, errorArray };
};

export default useValidation;
