import React from 'react';
import search from '../../assets/img/search.svg';
import searchMobile from '../../assets/img/search-mobile.svg';
import './header.scss'
import '../../index.scss';






export default class Header extends React.Component {

   render() {
    return (
    <div className="header">
        <div className="title">Contact List</div> 
        {/*Will only show in mobile mode*/}
        <img  alt="" src={searchMobile}  className="search-mobile d-md-none"/>
        {/*Will only show in desktop mode*/}
        <div className="search d-none d-sm-flex">
        <input type="text" placeholder="Search..."/>
          <img alt="" src={search}/>
        </div>
      </div>
    );
   }
}