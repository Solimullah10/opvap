import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const FruitsDetail = () => {
    const fruitId = useParams().fruitId;
    const [fruit, setFruit] = useState({});

    const url = `https://shielded-oasis-06280.herokuapp.com/fruits/${fruitId}`;

    useEffect(() => {
        // const url = `https://shielded-oasis-06280.herokuapp.com/fruits/${fruitId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFruit(data));
    }, []);

    const handleQuantity = (event) => {
        event.preventDefault();
        const num = event.target.number.value;
        const proceed = window.confirm("Are you sure, you want to Stock?");
        if (proceed) {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    quantity: (parseInt(fruit.quantity) + parseInt(num)).toString()
                })
            })
                .then(res => res.json())
                .then(data => {
                    fruit.quantity = (parseInt(fruit.quantity) + parseInt(num)).toString();
                    // console.log(fruit);
                    setFruit(fruit);
                })
        }

    }
    const handleSold = (id) => {
        // console.log('sold');
        const proceed = window.confirm("Are you sure, you want to Delivered?");
        if (proceed && parseInt(fruit.quantity) > 0) {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    quantity: (parseInt(fruit.quantity) - 1).toString(),
                    sold: (parseInt(fruit.sold) + 1).toString()
                })
            })
                .then(res => res.json())
                .then(data => {
                    fruit.quantity = (parseInt(fruit.quantity) - 1).toString();
                    fruit.sold = (parseInt(fruit.sold) + 1).toString();
                    // console.log(fruit);
                    setFruit(fruit);
                })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>{fruit.name}</h2>
            <Card className='bg-light'>
                <Card.Img variant="top" src={fruit.img} />
                <Card.Body>
                    <Card.Title>Name: {fruit.name}</Card.Title>
                    <Card.Text>Price: {fruit.price}$/ton</Card.Text>
                    <Card.Text>Current Quantity: {fruit.quantity}Ton</Card.Text>
                    <Card.Text>{fruit.shortDescription}</Card.Text>
                    <Card.Text>Supplier: {fruit.supplierName}</Card.Text>
                    <Card.Text>Total Sold: {fruit.sold}</Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex'>
                    <div className='w-25 me-2'>
                        <button
                            onClick={() => handleSold(fruit._id)}
                            className='btn btn-primary w-100'
                            variant="primary">Delivered</button>
                    </div>
                    <form onSubmit={handleQuantity} className='w-50 ms-auto'>
                        <label className='fst-semibold' htmlFor="add">Add (1-50):&nbsp;&nbsp;</label>
                        <input className='p-2' type="number" id="add" name="number"
                            min="1" max="50" required />
                        <input className='btn btn-primary ms-3' type="submit" value="Restock" />
                    </form>
                </Card.Footer>
            </Card>
            <div style={{ margin: '150px auto 40px auto' }} className='w-100'>
                <Link className='btn btn-primary fs-3 w-50' to="/fruits">Manage Fruits</Link>
            </div>
        </div>
    );
};

export default FruitsDetail;