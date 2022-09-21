import React from 'react';
import { Card, CardGroup, ListGroup, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../pages/Shared/Loading/Loading';
import admin1 from '../../images/AdminImages/admin1.jpg';
import admin2 from '../../images/AdminImages/admin2.jpg';
import admin3 from '../../images/AdminImages/admin3.jpg';
import admin4 from '../../images/AdminImages/admin4.jpg';
import demo from '../../images/AdminImages/demo.jpg';
import demo1 from '../../images/AdminImages/demo.jpg';
import demo2 from '../../images/AdminImages/demo.jpg';
import demo3 from '../../images/AdminImages/demo.jpg';


import './AdminRequireAuth.css'

const AdminRequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if ((user.email !== 'admin@gmail.com') && (user.email !== 'admin1@gmail.com') && (user.email !== 'admin2@gmail.com') && (user.email !== 'admin3@gmail.com') && (user.email !== 'admin4@gmail.com') && (user.email !== 'admin5@gmail.com') && (user.email !== 'admin6@gmail.com') && (user.email !== 'admin7@gmail.com')) {
        return (
            <div className='my-3 w-75 mx-auto'>
                <p className='fs-4 text-danger'>আপনি এই পেজের এ্যাডমিন নন। যে কোনো প্রয়োজনে এ্যাডমিনদের সাথে যোগাযোগ করুন...</p>

                <div className='admin-for-mobile-view'>
                    <div className='mb-5'>
                        <img width={200} height={200} style={{ borderRadius: '50%' }} src={admin1} alt="" />
                        <h3>মোঃ আজমত আলী </h3>
                        <p className='fs-6 mb-0'>মোবাইল নম্বর:+880 1521783363</ p>
                        <p className='mb-1'>Email: <a href="">mdhafizazmat@gmail.com</a> </p>
                        <p>Facebook: <a href="https://www.facebook.com/hexa.warrior">Facebook profile link</a></p>
                    </div>

                    <div className='mb-5'>
                        <img width={200} height={200} style={{ borderRadius: '50%' }} src={admin2} alt="" />
                        <h3>মোঃ ফরমান আলী খান</h3>
                        <p className='fs-6 mb-0'>মোবাইল নম্বর:+880 1531778232</ p>
                        <p className='mb-1'>Email: <a href="">farman09433@gmail.com</a> </p>
                        <p>Facebook: <a href="https://www.facebook.com/profile.php?id=100013988776420">Facebook profile link</a></p>
                    </div>

                    <div className='mb-5'>
                        <img width={200} height={200} style={{ borderRadius: '50%' }} src={admin3} alt="" />
                        <h3>মোঃ তানভীর রহমান</h3>
                        <p className='fs-6 mb-0'>মোবাইল নম্বর:+880 1558996707</ p>
                        <p className='mb-1'>Email: <a href="">tanvirrahman</a> </p>
                        <p>Facebook: <a href="https://www.facebook.com/tanvirrahman.sourov">Facebook profile link</a></p>
                    </div>

                    <div className='mb-5'>
                        <img width={200} height={200} style={{ borderRadius: '50%' }} src={admin4} alt="" />
                        <h3>মোঃ সলিমুল্লাহ</h3>
                        <p className='fs-6 mb-0'>মোবাইল নম্বর:+880 1517850451 </ p>
                        <p className='mb-1'>Email: <a href="">mdsolimullah10@gmail.com</a> </p>
                        <p>Facebook: <a href="https://www.facebook.com/s071m">Facebook profile link</a></p>
                    </div>

                    <div className='mb-5'>
                        <img width={200} height={200} style={{ borderRadius: '50%' }} src={demo} alt="" />
                        <h3>মোঃ আশিকুর রহমান </h3>
                        <p className='fs-6 mb-0'>মোবাইল নম্বর:+880 xxxxxxxxxx</ p>
                        <p className='mb-1'>Email: <a href="">admin@gmail.com</a> </p>
                        <p>Facebook: <a href="">Facebook profile link</a></p>
                    </div>

                    <div className='mb-5'>
                        <img width={200} height={200} style={{ borderRadius: '50%' }} src={demo1} alt="" />
                        <h3>মোঃ মাজিদুল ইসলাম</h3>
                        <p className='fs-6 mb-0'>মোবাইল নম্বর:+880 xxxxxxxxxx</ p>
                        <p className='mb-1'>Email: <a href="">admin@gmail.com</a> </p>
                        <p>Facebook: <a href="">Facebook profile link</a></p>
                    </div>

                    <div className='mb-5'>
                        <img width={200} height={200} style={{ borderRadius: '50%' }} src={demo2} alt="" />
                        <h3>মোঃ সুজন মিয়া</h3>
                        <p className='fs-6 mb-0'>মোবাইল নম্বর:+880 xxxxxxxxxx</ p>
                        <p className='mb-1'>Email: <a href="">admin@gmail.com</a> </p>
                        <p>Facebook: <a href="">Facebook profile link</a></p>
                    </div>

                    <div className='mb-5'>
                        <img width={200} height={200} style={{ borderRadius: '50%' }} src={demo3} alt="" />
                        <h3>মোঃ রমজান সরকার</h3>
                        <p className='fs-6 mb-0'>মোবাইল নম্বর:+880 xxxxxxxxxx</ p>
                        <p className='mb-1'>Email: <a href="">admin@gmail.com</a> </p>
                        <p>Facebook: <a href="">Facebook profile link</a></p>
                    </div>

                </div>

            </div>
        )
    }

    return children;
};

export default AdminRequireAuth;