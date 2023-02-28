import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default class MovieCard extends Component {
    constructor(props){
        super(props)
    }
    
  render() {
    return (
      <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          <p>{this.props.date}</p>
          <h4>Movie.rating</h4>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    )
  }
}
