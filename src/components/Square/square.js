import React from 'react';

export default class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {this.props.number}
        </button>
      );
    }
  }