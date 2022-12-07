import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const CardPage = (prop)=> {
  return (
    <Card style={{ width: '17rem' }} className="m-auto mb-5">
    <Card.Img variant="top" src={prop.data.image} />
    <Card.Body className='text-center'>
      <Card.Title>{prop.data.name}</Card.Title>
      <Card.Text>
        {prop.data.location.name}
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default CardPage;