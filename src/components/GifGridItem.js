import React from 'react';
// import Card from 'react-bootstrap/Card';
import {Card} from 'react-bootstrap';
export const GifGridItem = ({ title, url }) => {

    return (
        
        <Card style={{ width: '18rem' }} className="animate__animated animate__fadeIn">
        <Card.Body>
            <Card.Title>{ title }</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={ url } />
        </Card>
    )
}
