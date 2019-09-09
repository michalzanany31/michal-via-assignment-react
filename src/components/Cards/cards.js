import React from 'react';
import { Container, Row, Col  } from 'react-bootstrap';
import Card from '../Card/card';


export default class Cards extends React.Component {
    constructor(props) {
        super(props);
      // Defining the state that will handle the request
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
        };
      }

    componentDidMount() {
      // fetch data with an API request
        fetch("http://private-05627-frontendnewhire.apiary-mock.com/contact_list")
          .then(res => res.json())
          .then(
            (result) => {
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
      const { error, isLoaded, items } = this.state;
      var res = ''
      
      if (error) {
        // Show the error message in case of a request error like "no network"
        res = <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        // Will show "Loading..." mesaage while the page and its content is being loaded
        res = <div>Loading...</div>;
      } else {
        // If the page finished loading and there are no errors, this will present the main content
        res =
        <Container>
        <Row>
          {/*We go over items (contact details array) and build the main page*/}
          {items.map(item => {
          return (
            <Col sm={3} key={item.name}>
            {/*This is the card component with the response objects as an input, named "item"*/}
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