
import React from "react";
import useUserSignin from "../hooks/useUserSignin";
import SignInForm from "../components/SignInForm";
import WelcomeAndSignoutForm from "../components/WelcomeAndSignoutForm.js";

const PageSignInSignOut = () => {
  const { userSignin, updateUserSignin, userSignout } = useUserSignin();

  return (
    <React.Fragment>
      {userSignin.token ? null : (<SignInForm updateUserSignin={updateUserSignin} />)}
      {userSignin.token ? (<WelcomeAndSignoutForm
          username={userSignin.username}
          userSignout={userSignout}
        />) : null}
    </React.Fragment>
  );
};

export default PageSignInSignOut;