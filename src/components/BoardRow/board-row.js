import React from 'react';
import Square from '../Square/square'


export default class BoardRow extends React.Component {
  
    render() {
      return (
        <div className="board-row">
        {
            this.props.numbers.map((number, index) => {
            return (
                console.log('hihi')
            //   <Square key={number} number={number} />
            ) 
          })
          }
         </div>
      )
    }
  }