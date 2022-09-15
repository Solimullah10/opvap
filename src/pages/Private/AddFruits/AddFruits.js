import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useFruits from '../../../hooks/useFruits/useFruits';

const AddFruits = () => {

    const [user] = useAuthState(auth);
    // console.log(user.email);
    const [added, setAdded] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (added) {
        navigate(from, { replace: true });
    }

    if ((user.email !== 'admin@gmail.com') && (user.email !== 'admin1@gmail.com') && (user.email !== 'admin2@gmail.com') && (user.email !== 'admin3@gmail.com') && (user.email !== 'admin4@gmail.com') && (user.email !== 'admin5@gmail.com') && (user.email !== 'admin6@gmail.com') && (user.email !== 'admin7@gmail.com')) {
        return (<div>
            <p className='fs-4 text-danger'>আপনি এই পেজের এ্যাডমিন নন। যে কোনো প্রয়োজনে এ্যাডমিনদের সাথে যোগাযোগ করুন...</p>
        </div>)
    }


    const handleAddFuit = (event) => {
        event.preventDefault();
        const proceed = window.confirm('Are you sure, you want to add this Fruit?');
        if (proceed) {

            const fruitName = event.target.name.value;
            const supplierName = event.target.supplierName.value;
            const url = event.target.url.value;
            const rangpur = event.target.rangpur.value;
            const dinajpur = event.target.dinajpur.value;
            const rajshahi = event.target.rajshahi.value;
            const bogura = event.target.bogura.value;
            const nator = event.target.nator.value;
            const sirajganj = event.target.sirajganj.value;
            const mymensingh = event.target.mymensingh.value;
            const jamalpur = event.target.jamalpur.value;
            const sherpur = event.target.sherpur.value;
            const dhaka = event.target.dhaka.value;
            const faridpur = event.target.faridpur.value;
            const tangail = event.target.tangail.value;
            const sylhet = event.target.sylhet.value;
            const moulvibazar = event.target.moulvibazar.value;
            const sunamganj = event.target.sunamganj.value;
            const chattogram = event.target.chattogram.value;
            const feni = event.target.feni.value;
            const noakhali = event.target.noakhali.value;
            const khulna = event.target.khulna.value;
            const jessore = event.target.jessore.value;
            const noraile = event.target.noraile.value;
            const barishal = event.target.barishal.value;
            const barguna = event.target.barguna.value;




            // console.log(fruitName, supplierName, url, dhaka, rangpur, sylhet, feni, jamalpur, noraile, jamalpur, noakhali);

            const newFruit = {
                name: fruitName,
                supplierName: supplierName,
                img: url,
                email: user.email,

                rangpur,
                dinajpur,
                rajshahi,
                bogura,
                nator,
                sirajganj,
                mymensingh: mymensingh,
                jamalpur,
                sherpur: sherpur,
                dhaka: dhaka,
                faridpur: faridpur,
                tangail: tangail,
                sylhet: sylhet,
                moulvibazar: moulvibazar,
                sunamganj: sunamganj,
                chattogram: chattogram,
                feni: feni,
                noakhali: noakhali,
                khulna: khulna,
                jessore: jessore,
                noraile: noraile,
                barishal: barishal,
                barguna: barguna,

            }

            console.log(newFruit);


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
        <div className='mb-5'>
            <h2 style={{ backgroundColor: '#E8F0FE' }} className='w-50 mx-auto py-3 my-4'>নতুন পণ্য যোগ করুন</h2>
            <form onSubmit={handleAddFuit} className='w-50 mx-auto'>
                <input
                    className='w-100 p-1 mb-2 '
                    type="text" name="name"
                    placeholder="পণ্যের নাম লিখুন" required />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="supplierName"
                    placeholder="তথ্য সরবরাহকারীর নাম লিখুন" required />

                <input
                    className='w-100 p-1 mb-2'
                    type="url" name="url"
                    placeholder="পণ্যের ছবির লিংক এখানে দিন" required />

                <h3 className='mt-5'>বিভিন্ন স্থানে বর্তমান মূল্যের তালিকা</h3>



                <div style={{ backgroundColor: '#dddd', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>রংপুরের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="rangpur"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>দিনাজপুরের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="dinajpur"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#dddd' }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>রাজশাহীর বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="rajshahi"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>বগুরার বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="bogura"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#dddd' }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>নাটোরের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="nator"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>সিরাজগঞ্জের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="sirajganj"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#dddd', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>ময়মনসিংহের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="mymensingh"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>জামালপুরের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="jamalpur"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#dddd' }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>শেরপুরের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="sherpur"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>ঢাকার বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="dhaka"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#dddd' }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>ফরিদপুরের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="faridpur"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>টাংগাইলের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="tangail"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#dddd', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>সিলেটের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="sylhet"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>মৌলভীবাজারের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="moulvibazar"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#dddd' }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>সুনামগঞ্জের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="sunamganj"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>চট্রগ্রামের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="chattogram"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#dddd' }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>ফেনীর বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="feni"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>নোয়াখালীর বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="noakhali"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#dddd', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>খুলনার বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="khulna"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>যশোরের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="jessore"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#dddd' }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>নরাইলের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="noraile"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#E8F0FE', }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>বরিশালের বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="barishal"
                        min={0} />
                </div>
                <div style={{ backgroundColor: '#dddd' }} className='d-flex align-items-center justify-content-between' >
                    <p style={{ marginTop: '10px', marginLeft: '10px' }} className='float-left'>বরগুনার বর্তমান দাম লিখুন</p>
                    <input
                        className='w-50 p-1 me-1'
                        type="number" name="barguna"
                        min={0} />
                </div>
                <input
                    className='text-white w-100 mt-4 py-3 bg-success border-0 rounded'
                    type="submit"
                    value="নতুন পণ্য যোগ করুন" />

            </form>
        </div>
    );
};

export default AddFruits;