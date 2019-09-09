import React from "react";
import profile from "../../assets/img/people-default.svg";
import citizen from "../../assets/img/citizen.svg";
import professional from "../../assets/img/professional.svg";
import "./card.scss";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.professional = professional;
    this.citizen = citizen;
    this.state = {
      isHovering: false
    };
  }

  // We use the onMouseEnter and onMouseLeave events on the component and toggle the class accordingly.
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    var item = this.props.item;
    return (
      <div
        className={"card " + (this.state.isHovering ? "hover" : "")}
        // We use onMouseEnter and onMouseLeave to change the state and render a component conditionally based on the value of the state.
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <div className="top-card">
          <img
            className="profile-pic"
            src={item.profile_image ? item.profile_image : profile}
            alt=""
          />
        </div>
        <div className="contact-details">
          {/*After trimming "driverType" and convert it to lowercase to handle edge cases, image will be shown according to the variables defined at the top of the page*/}
          <img
            src={this[item.driverType.toLowerCase().trim()]}
            className="icon"
            alt=""
          />
          <h1>{item.name}</h1>
          <div className="rank">{item.driverRank}</div>
          {/*Will only show in hover mode*/}
          <div className="additional-info">
            {this.state.isHovering && <div>Phone Number: {item.phone}</div>}
            {this.state.isHovering && <div>Email: {item.email}</div>}
          </div>
        </div>
      </div>
    );
  }
}
