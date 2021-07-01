import React, { useContext } from 'react';
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const NavBar = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)
    return (
       <div className="container">
            <Navbar  expand="lg">
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                   
                    <Link style={{textDecoration:"none"}} to="/profile" className="fs-5 " >{userInfo ==false ? "Profile" : userInfo}</Link>
                    <Link style={{textDecoration:"none"}} to="/user" className="fs-5 ms-3" >Users</Link>
                </Nav>
              
            </Navbar.Collapse>
        </Navbar>
       </div>
    );
};

export default NavBar;