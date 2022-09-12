import Row from 'react-bootstrap/Row';
import useFruits from '../../hooks/useFruits/useFruits';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Fruits = () => {

    const [fruits, setFruits] = useFruits();

    const handleDelete = (id) => {
        // console.log('delete', id);
        const url = `https://shielded-oasis-06280.herokuapp.com/fruits/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const rem = fruits.filter(fruit => fruit._id !== id);
                setFruits(rem);
            })
    }

    return (
        <div className='mt-5'>
            <h2>FRUITS</h2>
            <Row xs={1} md={3} className="w-75 my-4 mx-auto g-4">
                {
                    fruits.map(fruit => <Col key={fruit._id}>
                        <Card className='bg-light'>
                            <Card.Img variant="top" src={fruit.img} />
                            <Card.Body>
                                <Card.Title>নাম: {fruit.name}</Card.Title>
                                <Card.Text>দাম: {fruit.price}টাকা/মণ</Card.Text>
                                <Card.Text>পরিমাণ: {fruit.quantity}টন</Card.Text>
                                <Card.Text>সরবরাহকারী: {fruit.supplierName}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <button
                                    onClick={() => handleDelete(fruit._id)}
                                    className='btn btn-danger w-100'
                                    variant="primary">Delete</button>
                            </Card.Footer>
                        </Card>
                    </Col>)
                }
            </Row>
            <div style={{ margin: '150px auto 40px auto' }} className='w-100'>
                <Link className='btn btn-primary fs-3 w-50' to="/addfruits">Add New Fruits</Link>
            </div>
        </div>
    );
};

export default Fruits;