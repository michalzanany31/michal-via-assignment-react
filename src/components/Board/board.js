import React from 'react';
import BoardRow from '../BoardRow/board-row'
import './board.scss'
import { Container, Row, Col  } from 'react-bootstrap';
import profile from '../../assets/img/people-default.svg';
import Card from '../Card/card';






export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          onHover: false
        };
      }

    componentDidMount() {
        fetch("http://private-05627-frontendnewhire.apiary-mock.com/contact_list")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result);
              this.setState({
                isLoaded: true,
                items: result
              });
            },
          //   // Note: it's important to handle errors here
          //   // instead of a catch() block so that we don't swallow
          //   // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

      someHandler() {
        let prevState = Object.assign({}, this.state);
        prevState.onHover = true;
    this.setState(prevState);
        }

      someOtherHandler() {
        let prevState = Object.assign({}, this.state);
        prevState.onHover = false;
    this.setState(prevState);
      }
    render() {
    //   const status = 'Next player: X';
      var numbers1 = [1, 2, 3];
      var numbers2 = [4, 5, 6];
      var numbers3 = [7, 8, 9];  
      
      const { error, isLoaded, items, onHover } = this.state;
        console.log(onHover);
      var res = ''
      
      if (error) {
        res = <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        res = <div>Loading...</div>;
      } else {
        res =











        <Container>
        <Row>
          {items.map(item => {
          var item_text = 's';
          if (onHover) {
            item_text = item.name;
          }
          return (
            <Col sm={3} key={item.name} onMouseEnter={() => this.someHandler()} onMouseLeave={() => this.someOtherHandler()}>
                <Card item={item} />
            </Col>
          )})}
        </Row>
        </Container>
      }
      return (          
        <div>
          {res}
          {/* <div className="status">{status}</div> */}
           <BoardRow numbers={numbers1} />
           <BoardRow numbers={numbers2} />
           <BoardRow numbers={numbers3} />
        </div>
      );
    }
  }