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


    if ((user.email !== 'admin@gmail.com') && (user.email !== 'admin1@gmail.com') && (user.email !== 'admin2@gmail.com') && (user.email !== 'admin3@gmail.com') && (user.email !== 'admin4@gmail.com') && (user.email !== 'admin5@gmail.com') && (user.email !== 'admin6@gmail.com') && (user.email !== 'admin7@gmail.com')) {
        return (<div>
            <p className='fs-4 text-danger'>আপনি এই পেজের এ্যাডমিন নন। যে কোনো প্রয়োজনে এ্যাডমিনদের সাথে যোগাযোগ করুন...</p>
        </div>)
    }

    const handleDelete = (id) => {
        const proceed = window.confirm("আপনি কী এই পণ্যটি ডিলিট করতে চাচ্ছেন?");
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
                        <p>নাম: {fruit.name}</p>
                        <p>দাম: {fruit.price}</p>
                        <p>সরবরাহকারী: {fruit.supplierName}</p>
                        <button onClick={() => handleDelete(fruit._id)} className='btn btn-danger w-50'>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyFruits;