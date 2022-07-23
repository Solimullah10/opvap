import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyFruits = () => {
    const [myfruits, setMyFruits] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = 'http://localhost:5000/add';
        fetch(url)
            .then(res => res.json())
            .then(data => {

                const curFruits = data.filter(d => d.email === user.email);
                // console.log(curFruits);
                setMyFruits(curFruits);
            });
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete this fruit?");
        if (proceed) {
            const url = `http://localhost:5000/add/${id}`;
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
            <div className='w-50 mx-auto my-5'>
                {
                    myfruits.map(fruit => <div key={fruit._id}
                        className='w-100 mx-auto my-4 p-4 border border-primary rounded'>
                        <p>Name: {fruit.name}</p>
                        <p>Price: {fruit.price}</p>
                        <p>Quantity: {fruit.quantity}</p>
                        <p>Description: {fruit.shortDescription}</p>
                        <p>Supplier Name: {fruit.supplierName}</p>
                        <p>Total Sold: {fruit.sold}</p>
                        <button onClick={() => handleDelete(fruit._id)} className='btn btn-danger w-50'>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyFruits;