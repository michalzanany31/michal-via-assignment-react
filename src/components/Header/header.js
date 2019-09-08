import React from 'react';
import search from '../../assets/img/search.svg';
import './header.scss'





export default class Header extends React.Component {

   render() {
    return (
    <div className="header">
        <div className="contact">Contact List</div> 
        <div className="search">
        <input type="text" placeholder="Search..."/>
          <img alt="" src={search}/>
        </div>
      </div>
    );
   }
}