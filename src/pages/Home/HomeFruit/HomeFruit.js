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
                    <Card.Title>নাম: {fruit.name}</Card.Title>
                    <Card.Text>সরবরাহকারী: {fruit.supplierName}</Card.Text>
                </Card.Body>
                <Card.Link>
                    <Link to={`/fruits/${fruit._id}`}>
                        <button
                            className='btn btn-primary w-100'
                            variant="primary">বিস্তারিত দেখুন</button>
                    </Link>
                </Card.Link>
            </Card>

        </Col>
    );
};

export default Fruit;