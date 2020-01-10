import React from 'react'
import './App.css';
import Header from './Header/Header'
import MainSection from './Main/Main';
import Clients from "./Main/Clients";
import Footer from "./Footer/Footer";


function App() {

  return (
    <div className="App">
       <Header/>
       <MainSection/>
       <Clients/>
       <Footer/>
    </div>
  );
}

export default App;
