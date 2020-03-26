const URL_userSignup = "http://localhost:3003/signup";
const URL_userSignin = "https://backend-config-app.herokuapp.com/signin";
const URL_NewsAPIBase = 'https://newsapi.org/v2/top-headlines?'

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

const getNews = (country, category) => {
    let targetURL = `${URL_NewsAPIBase}` +
        `country=${country}&` +
        `category=${category}&` +
        `apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`
    console.log(targetURL)
    return getSimple(targetURL).then(response => response.json())
}

export default { newUserSignUp, UserSignIn, getNews };