import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage'
import Header from './components/Header'

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
};

export default App;
