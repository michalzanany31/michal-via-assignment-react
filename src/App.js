import React from 'react';
import './App.scss';
import Board from './components/Board/board';
import search from './assets/img/search.svg';






function App() {
  return (
    <div className="game">
      <div className="first-container">
      <div className="header">
        <div className="contact">Contact List</div> 
        <div className="search">
        <input type="text" placeholder="Search..."/>
          <img alt="" src={search}/>
        </div>
      </div>
    </div>
      {/* <img alt="" src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"/> */}
    <div className="game-board">
    <div className="main-page">
      <Board />
    </div>
    </div>
    <div className="game-info">
      <div>{/* status */}</div>
      <ol>{/* TODO */}</ol>
    </div>
  </div>
  );
}

export default App;
