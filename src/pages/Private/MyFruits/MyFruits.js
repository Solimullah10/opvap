import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyFruits = () => {
    const [myfruits, setMyFruits] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = 'https://shielded-oasis-06280.herokuapp.com/add';
        fetch(url)
            .then(res => res.json())
            .then(data => {

                const curFruits = data.filter(d => d.email === user.email);
                // console.log(curFruits);
                setMyFruits(curFruits);
            });
    }, []);


    // if ((user.email !== 'admin@gmail.com') && (user.email !== 'admin1@gmail.com') && (user.email !== 'admin2@gmail.com') && (user.email !== 'admin3@gmail.com') && (user.email !== 'admin4@gmail.com') && (user.email !== 'admin5@gmail.com') && (user.email !== 'admin6@gmail.com') && (user.email !== 'admin7@gmail.com')) {
    //     return (<div>
    //         <p className='fs-4 text-danger'>আপনি এই পেজের এ্যাডমিন নন। যে কোনো প্রয়োজনে এ্যাডমিনদের সাথে যোগাযোগ করুন...</p>
    //     </div>)
    // }

    const handleDelete = (id) => {
        const proceed = window.confirm("আপনি কী এই পণ্যটি ডিলিট করতে চাচ্ছেন?");
        if (proceed) {
            const url = `https://shielded-oasis-06280.herokuapp.com/add/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const rem = myfruits.filter(fruit => fruit._id !== id);
                    setMyFruits(rem);
                })
        }
    }



    return (
        <div className='my-5'>
            <h2>My Fruits</h2>
            <Row xs={1} md={3} className="w-75 my-4 mx-auto g-4">
                {
                    myfruits.map(fruit => <Col key={fruit._id}>
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

export default MyFruits;