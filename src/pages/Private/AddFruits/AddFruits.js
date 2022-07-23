import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useFruits from '../../../hooks/useFruits/useFruits';

const AddFruits = () => {
    const [user] = useAuthState(auth);
    // console.log(user.email);
    const [added, setAdded] = useState(false);


    const handleAddFuit = (event) => {
        const proceed = window.confirm('Are you sure, you want to add this Fruit?');
        if (proceed) {
            event.preventDefault();
            const fruitName = event.target.name.value;
            const price = event.target.price.value;
            const quantity = event.target.quantity.value;
            const description = event.target.description.value;
            const supplierName = event.target.supplierName.value;
            const url = event.target.url.value;

            console.log(fruitName, price, quantity, description, supplierName, url);

            const newFruit = {
                name: fruitName,
                price: price,
                quantity: quantity,
                shortDescription: description,
                supplierName: supplierName,
                img: url,
                email: user.email,
                sold: 0
            }


            const URL = `https://shielded-oasis-06280.herokuapp.com/fruits`;

            fetch(URL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newFruit)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.insertedId);
                    setAdded(true);
                    const newRecord = newFruit;


                    const Url = `http://localhost:5000/add`;

                    fetch(Url, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newRecord)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        })

                    // event.target.reset();
                })
        }
    }


    return (
        <div className='my-5'>
            {
                added && <p>Fruit has been added successfully!</p>
            }
            <h2>Add New Fruits</h2>
            <form onSubmit={handleAddFuit} className='w-50 mx-auto'>
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="name"
                    placeholder="Enter Fruit Name" required />
                <input
                    className='w-100 p-1 mb-2'
                    type="number" name="price"
                    placeholder="Enter price greater than or equal 50" min={50} required />
                <input
                    className='w-100 p-1 mb-2'
                    type="number" name="quantity"
                    placeholder="Enter quantity greater than or equal 80" min={80} required />
                <textarea
                    className='w-100 p-1 mb-2'
                    type="text" name="description"
                    placeholder="Write a short description about this fruit" required />

                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="supplierName"
                    placeholder="Enter supplier Name" required />

                <input
                    className='w-100 p-1 mb-2'
                    type="url" name="url"
                    placeholder="Enter image url from ibb" required />

                <input
                    className='text-white w-100 mt-4 p-1 bg-primary border-0 rounded'
                    type="submit"
                    value="Add Fruit" />

            </form>
        </div>
    );
};

export default AddFruits;