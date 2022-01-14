import React, { useState } from 'react';
import phone from './assets/phone.png';
import './App.scss';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

const App = () => {
  const [workers, setWorkers] = useState();
  const [summary, setSummary] = useState();
  return (
    <div className="App">

      <div className="phone-screen">
        <Header />
        <Content />
        <Footer />
        {/* <img className="phone" src={phone} alt="Phone" /> */}

      </div>
    </div>
  );
};

export default App;
