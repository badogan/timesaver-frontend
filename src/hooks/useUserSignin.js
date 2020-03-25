import { useState } from "react";
import API from "../APIsHelpers/API";

const useUserSignin = () => {
  const [userSignin, setUserSignin] = useState({});
  const updateUserSignin = userSigninObject =>
    API.UserSignIn(userSigninObject).then(loggedinUser => {
      setUserSignin(loggedinUser);
      localStorage.token = loggedinUser.token
    });
  const userSignout = () => {
    setUserSignin({});
    localStorage.removeItem("token");
  };
  return { userSignin, updateUserSignin, userSignout };
};

export default useUserSignin;