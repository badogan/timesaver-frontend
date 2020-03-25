const URL_userSignup = "http://localhost:3003/signup";
const URL_userSignin = "http://localhost:3003/signin";
const URL_currentPanic = "http://localhost:3003/panic_current";
const URL_updatePanic = "http://localhost:3003/panic_update";

const postSimple = (url, obj) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(obj)
  });
};

const postAuth = (url, obj) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify(obj)
  });
};

const getSimple = url => {
  return fetch(url);
};

const newUserSignUp = userSignupObject => {
  return postSimple(URL_userSignup, userSignupObject).then(response =>
    response.json()
  );
};

const UserSignIn = userSignInObject => {
  return postSimple(URL_userSignin, userSignInObject).then(response =>
    response.json()
  );
};

const getCurrentPanicStatus = () => {
  return getSimple(URL_currentPanic);
};

const postNewPanicStatus = obj => {
  return postAuth(URL_updatePanic, obj);
};

export default {
  newUserSignUp,
  UserSignIn,
  getCurrentPanicStatus,
  postNewPanicStatus
};