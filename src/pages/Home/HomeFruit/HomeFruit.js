import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const Fruit = ({ fruit }) => {
    return (
        <Col>
            <Card className='bg-light'>
                <Card.Img variant="top" src={fruit.img} />
                <Card.Body>
                    <Card.Title>Name: {fruit.name}</Card.Title>
                    <Card.Text>Price: {fruit.price}$/ton</Card.Text>
                    <Card.Text>Quantity: {fruit.quantity}Ton</Card.Text>
                    <Card.Text>{fruit.shortDescription}</Card.Text>
                    <Card.Text>Supplier: {fruit.supplierName}</Card.Text>
                </Card.Body>
                <Card.Link>
                    <Link to={`/fruits/${fruit._id}`}>
                        <button
                            className='btn btn-primary w-100'
                            variant="primary">Manage Fruits</button>
                    </Link>
                </Card.Link>
            </Card>

        </Col>
    );
};

export default Fruit;