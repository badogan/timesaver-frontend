import React from "react";

const WelcomeAndSignoutForm = props => {
  return (
    <div className="welcome-and-signout-container wrapper">
      <h3>Welcome {props.username} ! </h3>
      <button className="signout-button" onClick={() => props.userSignout()}>Signout!</button>
      <br />
    </div>
  );
};

export default WelcomeAndSignoutForm;