import React from 'react';
import './App.scss';
import Cards from './components/Cards/cards';
import Header from './components/Header/header'
import { Navbar  } from 'react-bootstrap';



function App() {
  return (
    <div>
      <Navbar>
        <Header />
      </Navbar>
      <div>
        <div className="main-page">
          <Cards />
        </div>
      </div>
  </div>
  );
}

export default App;
