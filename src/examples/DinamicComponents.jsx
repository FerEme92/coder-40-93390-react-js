import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const DinamicComponents = (props) => {
    return(
        <>
        <div>DinamicComponents</div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img}/>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <Button variant="primary">{props.botonText}</Button>
        </Card.Body>
        </Card>;

        
        </>
    )
}

export default DinamicComponents