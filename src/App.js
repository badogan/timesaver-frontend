import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header'
import PageSignInSignOut from './pages/PageSignInSignOut'
import PageNews from './pages/PageNews'

const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <PageSignInSignOut/>
      <PageNews/>
    </div>
  );
};

export default App;
