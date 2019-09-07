import React from 'react';
import profile from '../../assets/img/people-default.svg';
import citizen from '../../assets/img/citizen.svg';
import professional from '../../assets/img/professional.svg';
import './card.scss'




export default class Card extends React.Component {
  
    render() {
      var item =  this.props.item;
      return (
        <div className="card">
            <div className="top-section">
                        <img className='profile-pic' src={item.profile_image? item.profile_image : profile} alt=""/>
                        <img className='icon' src={item.driverType && item.driverType.toLowerCase().trim() == 'professional'? professional :  citizen}  alt=""/>
                        {/* <img src="../assets/img/{item.driverType && item.driverType.toLowerCase().trim()}.svg"  alt=""/> */}
                        {/* <img *ngIf="contact.driverType && contact.driverType.toLowerCase().trim()  === 'citizen'"  class="icon" src="../assets/img/citizen.svg"> */}
                        {/* {item_text} */}
                </div>
                <div className="contact-details">
                    <h1 className="title">
                        {/* {item.driverType} */}
                        {item.name}
                    </h1>
                    <p className="driver-rank">
                        {item.driverRank}
                    </p>
            </div>
        </div>
      )
    }
  }