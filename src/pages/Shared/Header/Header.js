import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);


    // if (loading) {
    //     return <Loading></Loading>
    // }

    const handleLogOut = () => {
        signOut(auth);
    }

    return (
        <Navbar className='sticky-top' bg="warning" expand="lg">
            <Container>
                <Navbar.Brand className='text-success fst-italic fw-semibold' href="/">Fresh Fruits Gallery</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">হোম</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav className="mx-auto">
                        {
                            user ?
                                <>
                                    <Nav.Link href="/fruits">পণ্য নিয়ন্ত্রন করুন</Nav.Link>
                                    <Nav.Link href="/addfruits">নতুন পণ্য যোগ করুন</Nav.Link>
                                    <Nav.Link href="/myfruits">আমার পণ্য</Nav.Link>
                                    <input onClick={handleLogOut} className='btn btn-warning' type="button" value="লগ আউট" />
                                </>
                                :
                                <>
                                    <Nav.Link href="/register">রেজিষ্টার</Nav.Link>
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