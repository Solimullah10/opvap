import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './FruitsDetail.css'

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

    // const handleQuantity = (event) => {
    //     event.preventDefault();
    //     const num = event.target.number.value;
    //     const proceed = window.confirm("Are you sure, you want to Stock?");
    //     if (proceed) {
    //         fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 quantity: (parseInt(fruit.quantity) + parseInt(num)).toString()
    //             })
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 fruit.quantity = (parseInt(fruit.quantity) + parseInt(num)).toString();
    //                 // console.log(fruit);
    //                 setFruit(fruit);
    //             })
    //     }

    // }

    // const handleSold = (id) => {
    //     // console.log('sold');
    //     const proceed = window.confirm("Are you sure, you want to Delivered?");
    //     if (proceed && parseInt(fruit.quantity) > 0) {
    //         fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 quantity: (parseInt(fruit.quantity) - 1).toString(),
    //                 sold: (parseInt(fruit.sold) + 1).toString()
    //             })
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 fruit.quantity = (parseInt(fruit.quantity) - 1).toString();
    //                 fruit.sold = (parseInt(fruit.sold) + 1).toString();
    //                 // console.log(fruit);
    //                 setFruit(fruit);
    //             })
    //     }
    // }

    return (
        <div className='w-50 mx-auto mb-5 custom-wide'>
            <Card className='bg-light'>
                <Card.Img variant="top" src={fruit.img} />
                <Card.Body>
                    <Card.Title style={{ backgroundColor: '#E7DFCC' }} className='fs-2 py-4 rounded mb-4'>পণ্যের নাম: {fruit.name} <br /> <span className='fs-6'>তথ্য সরবরাহকারী: {fruit.supplierName}</span></Card.Title>

                    <h4 style={{ backgroundColor: '#ADADC7' }} className='py-3 rounded'>রংপুর বিভাগের জেলা গুলোতে {fruit.name} এর দামের তালিকাঃ</h4>
                    <Card.Text> রংপুর : {fruit.rangpur} <span style={{ 'float': 'right' }} >টাকা / মণ</span></Card.Text>
                    <Card.Text> দিনাজপুর : {fruit.dinajpur} <span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>

                    <h4 style={{ backgroundColor: '#ADADC7' }} className='py-3 rounded'>রাজশাহী বিভাগের জেলা গুলোতে {fruit.name} এর দামের তালিকাঃ</h4>
                    <Card.Text>রাজশাহী: {fruit.rajshahi}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>বগুড়া: {fruit.bogura}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>নাটোর: {fruit.nator}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>সিরজগঞ্জ: {fruit.sirajganj}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>

                    <h4 style={{ backgroundColor: '#ADADC7' }} className='py-3 rounded'>ময়মনসিংহ বিভাগের জেলা গুলোতে {fruit.name} এর দামের তালিকাঃ</h4>
                    <Card.Text>ময়মনসিংহ: {fruit.mymensingh}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>জামালপুর: {fruit.jamalpur}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>শেরপুর: {fruit.sherpur}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>

                    <h4 style={{ backgroundColor: '#ADADC7' }} className='py-3 rounded'>ঢাকা বিভাগের জেলা গুলোতে {fruit.name} এর দামের তালিকাঃ</h4>
                    <Card.Text>ঢাকা: {fruit.dhaka}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>ফরিদপুর: {fruit.faridpur}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>টাংগাইল: {fruit.tangail}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>

                    <h4 style={{ backgroundColor: '#ADADC7' }} className='py-3 rounded'>সিলেট বিভাগের জেলা গুলোতে {fruit.name} এর দামের তালিকাঃ</h4>
                    <Card.Text>সিলেট: {fruit.sylhet}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>মৌলভী বাজার: {fruit.moulvibazar}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>সুনামগঞ্জ: {fruit.sunamganj}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>


                    <h4 style={{ backgroundColor: '#ADADC7' }} className='py-3 rounded'>চট্টগ্রাম বিভাগের জেলা গুলোতে {fruit.name} এর দামের তালিকাঃ</h4>
                    <Card.Text>চট্টগ্রাম: {fruit.chattogram}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>ফেনী: {fruit.feni}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>নোয়াখালী: {fruit.noakhali}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>


                    <h4 style={{ backgroundColor: '#ADADC7' }} className='py-3 rounded'>খুলনা বিভাগের জেলা গুলোতে {fruit.name} এর দামের তালিকাঃ</h4>
                    <Card.Text>খুলনা: {fruit.khulna}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>যশোর: {fruit.jessore}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>নড়াইল: {fruit.noraile}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>


                    <h4 style={{ backgroundColor: '#ADADC7' }} className='py-3 rounded'>বরিশাল বিভাগের জেলা গুলোতে {fruit.name} এর দামের তালিকাঃ</h4>
                    <Card.Text>বরিশাল: {fruit.barishal}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>
                    <Card.Text>বরগুনা: {fruit.barguna}<span style={{ 'float': 'right' }} >টাকা / মণ </span></Card.Text>

                </Card.Body>


                {/* <Card.Footer className='d-flex'>
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
                </Card.Footer> */}
            </Card >
        </div >
    );
};

export default FruitsDetail;