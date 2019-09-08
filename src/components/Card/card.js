import React from 'react';
import profile from '../../assets/img/people-default.svg';
import citizen from '../../assets/img/citizen.svg';
import professional from '../../assets/img/professional.svg';
import './card.scss'




export default class Card extends React.Component {
    constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.professional = professional;
    this.citizen = citizen;
    this.state = {
      isHovering: false,
    };
  }


  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

   
  
    render() {
      var item =  this.props.item;
      return (
        <div className={"card " + (this.state.isHovering ? "hover" : "")}
        onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >

            <div className="top-card">
                        <img className='profile-pic' src={item.profile_image? item.profile_image : profile} alt=""/>
                </div>
                <div className="contact-details">
                        <img src={this[item.driverType.toLowerCase().trim()]} className="icon" alt=""/>
                    <h1>
                        {item.name}
                    </h1>
                    <div className="rank">
                        {item.driverRank}
                    </div>
                    <div className="additional-info">
                        {this.state.isHovering && <div>Phone Number: {item.phone}</div>}
                        {this.state.isHovering && <div>Email: {item.email}</div>}                          
                    </div>
              </div>
        </div>
      )
    }
  }