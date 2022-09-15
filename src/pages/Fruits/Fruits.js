import Row from 'react-bootstrap/Row';
import useFruits from '../../hooks/useFruits/useFruits';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Fruits = () => {
    const [user] = useAuthState(auth);
    const [fruits, setFruits] = useFruits();

    if ((user.email !== 'admin@gmail.com') && (user.email !== 'admin1@gmail.com') && (user.email !== 'admin2@gmail.com') && (user.email !== 'admin3@gmail.com') && (user.email !== 'admin4@gmail.com') && (user.email !== 'admin5@gmail.com') && (user.email !== 'admin6@gmail.com') && (user.email !== 'admin7@gmail.com')) {
        return (<div>
            <p className='fs-4 text-danger'>আপনি এই পেজের এ্যাডমিন নন। যে কোনো প্রয়োজনে এ্যাডমিনদের সাথে যোগাযোগ করুন...</p>
        </div>)
    }
    const handleDelete = (id) => {
        const proceed = window.confirm("আপনি কী এই পণ্যটি ডিলিট করতে চাচ্ছেন?");
        if (proceed) {
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
    }

    return (
        <div className='mt-5'>
            <Row xs={1} md={3} className="w-75 my-4 mx-auto g-4">
                {
                    fruits.map(fruit => <Col key={fruit._id}>
                        <Card className='bg-light'>
                            <Card.Img variant="top" src={fruit.img} />
                            <Card.Body>
                                <Card.Title>নাম: {fruit.name}</Card.Title>
                                <Card.Text>তথ্য সরবরাহকারী: {fruit.supplierName}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <button
                                    onClick={() => handleDelete(fruit._id)}
                                    className='btn btn-danger w-100'
                                    variant="primary">ডিলিট করুন</button>
                            </Card.Footer>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default Fruits;