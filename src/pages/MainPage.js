
import React from "react";
import useUserSignin from "../hooks/useUserSignin";
import SignInForm from "../components/SignInForm";
import WelcomeAndSignoutForm from "../components/WelcomeAndSignoutForm.js";
// import PanicStatusAndForm from "../components/PanicStatusAndForm";

const MainPage = () => {
  const { userSignin, updateUserSignin, userSignout } = useUserSignin();

  return (
    <React.Fragment>
      {userSignin.token ? null : (<SignInForm updateUserSignin={updateUserSignin} />)}
      {userSignin.token ? (<WelcomeAndSignoutForm
          username={userSignin.username}
          userSignout={userSignout}
        />) : null}
      {/* {userSignin.token ? <PanicStatusAndForm /> : null} */}
    </React.Fragment>
  );
};

export default MainPage;