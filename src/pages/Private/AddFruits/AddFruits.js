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
            const supplierName = event.target.supplierName.value;
            const url = event.target.url.value;
            const rangpur = event.target.rangpur.value;
            const dinajpur = event.target.dinajpur.value;
            const rajshahi = event.target.rajshahi.value;
            const bogura = event.target.bogura.value;
            const nator = event.target.nator.value;
            const sirajganj = event.target.sirajganj.value;
            const mymensingh = event.target.mymensingh.value;
            const jamalpur = event.target.jamalpur.vlaue;
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




            console.log(fruitName, supplierName, url, dhaka, rangpur, sylhet, feni, jamalpur, noraile, jamalpur, noakhali);

            const newFruit = {
                name: fruitName,
                supplierName: supplierName,
                img: url,
                email: user.email,

                rangpur: rangpur,
                dinajpur: dinajpur,
                rajshahi: rajshahi,
                bogura: bogura,
                nator: nator,
                sirajganj: sirajganj,
                mymensingh: mymensingh,
                jamalpur: jamalpur,
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
            <h2>নতুন পণ্য যোগ করুন</h2>
            <form onSubmit={handleAddFuit} className='w-50 mx-auto'>
                <input
                    className='w-100 p-1 mb-2'
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

                <h3>বিভিন্ন স্থানে বর্তমান মূল্যের তালিকা</h3>



                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="rangpur"
                    placeholder="রংপুরের বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="dinajpur"
                    placeholder="দিনাজপুরের বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="rajshahi"
                    placeholder="রাজশাহীর বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="bogura"
                    placeholder="বগুরার বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="nator"
                    placeholder="নাটোরের বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="sirajganj"
                    placeholder="সিরাজগঞ্জের বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="mymensingh"
                    placeholder="ময়মনসিংহের বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="jamalpur"
                    placeholder="জামালপুরের বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="sherpur"
                    placeholder="শেরপুরের বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="dhaka"
                    placeholder="ঢাকার বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="faridpur"
                    placeholder="ফরিদপুরের বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="tangail"
                    placeholder="টাংগাইলের বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="sylhet"
                    placeholder="সিলেটের বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="moulvibazar"
                    placeholder="মৌলভীবাজারের বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="sunamganj"
                    placeholder="সুনামগঞ্জের বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="chattogram"
                    placeholder="চট্রগ্রামের বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="feni"
                    placeholder="ফেনীর বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="noakhali"
                    placeholder="নোয়াখালীর বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="khulna"
                    placeholder="খুলনার বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="jessore"
                    placeholder="যশোরের বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="noraile"
                    placeholder="নরাইলের বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="barishal"
                    placeholder="বরিশালের বর্তমান দাম লিখুন" min={0} />
                <input
                    className='w-100 p-1 mb-2'
                    type="text" name="barguna"
                    placeholder="বরগুনার বর্তমান দাম লিখুন" min={0} />







                <input
                    className='text-white w-100 mt-4 p-1 bg-primary border-0 rounded'
                    type="submit"
                    value="Add Fruit" />

            </form>
        </div>
    );
};

export default AddFruits;