import React, { Component } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from './logo192.jpg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href='/'>
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className='d-inline-block align-top'
                                alt='logo'
                            />{" "}
                            React site
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-between'>
                            <Nav className='mr-auto'>
                                <Nav.Link href='/'>Home</Nav.Link>
                                <Nav.Link href='/about'>About</Nav.Link>
                                <Nav.Link href='/contacts'>Contacti</Nav.Link>
                                <Nav.Link href='/blog'>Blog</Nav.Link>
                            </Nav>
                            <Form className='d-flex'>
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='mr-sm-2'
                                />
                                <Button variant='outline-info'>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contacts' element={<Contacts />} />
                        <Route path='/blog' element={<Blog />} />
                    </Routes>
                </Router>
            </>
        )
    }
}