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
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        {
                            user ?
                                <>
                                    <Nav.Link href="/fruits">Manage Fruits</Nav.Link>
                                    <Nav.Link href="/addfruits">Add Fruits</Nav.Link>
                                    <Nav.Link href="/myfruits">My Fruits</Nav.Link>
                                    <input onClick={handleLogOut} className='btn btn-warning' type="button" value="Log Out" />
                                </>
                                :
                                <>
                                    <Nav.Link href="/register">Register</Nav.Link>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;