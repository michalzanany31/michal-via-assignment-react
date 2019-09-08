import React from 'react';
import { Container, Row, Col  } from 'react-bootstrap';
import Card from '../Card/card';


export default class Cards extends React.Component {
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
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

     
    render() {   
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
          return (
            <Col sm={3} key={item.name}>
                <Card item={item} />
            </Col>
          )})}
        </Row>
        </Container>
      }
      return (          
        <div>
          {res}
        </div>
      );
    }
  }