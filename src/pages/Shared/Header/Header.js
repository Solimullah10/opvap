import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);


    // if (loading) {
    //     return <Loading></Loading>
    // }

    const handleLogOut = () => {
        signOut(auth);
    }

    return (
        <Navbar style={{ backgroundColor: '#ddd' }} className='sticky-top' expand="lg">
            <Container>
                <Navbar.Brand className='text-danger fs-3 fw-semibold' href="/">ন্যায্য দাম কৃষকের অধিকার ||</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='menu-item' href="/home">হোম</Nav.Link>
                    </Nav>
                    <Nav className="mx-auto">
                        {
                            user ?
                                <>
                                    <Nav.Link className='menu-item me-4' href="/fruits">পণ্য নিয়ন্ত্রন করুন</Nav.Link>
                                    <Nav.Link className='menu-item me-4' href="/addfruits">নতুন পণ্য যোগ করুন</Nav.Link>
                                    <Nav.Link className='menu-item me-4' href="/myfruits">আমার পণ্য</Nav.Link>
                                    <input onClick={handleLogOut} className='btn btn-warning' type="button" value="লগ আউট" />
                                </>
                                :
                                <>
                                    <Nav.Link className='menu-item me-2' href="/register">রেজিষ্টার</Nav.Link>
                                    <Nav.Link href="/login">লগইন</Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;