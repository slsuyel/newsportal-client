
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

const menuItems = [
    'সর্বশেষ',
    'জাতীয়',
    'রাজনীতি',
    'বাংলাদেশ',
    'প্রিয় চট্টগ্রাম',
    'সারাবিশ্ব',
    'খেলা',
    'বিনোদন',
    'অর্থনীতি',
    'শিক্ষা',
    'প্রবাস',
    'বিশেষ প্রতিবেদন',
    'চাকরি',
    'ভিডিও',
    'অন্যান্য'
];

const Header = () => {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg"  className='border-2 border-bottom fw-bold  navbar navbar-expand-lg navbar-light pri-bg py-0 shadow-sm sticky-top' variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-evenly navbar-nav w-100 container">
                        {menuItems.map((item, index) => (
                            <NavLink key={index} to={`/menu/${encodeURIComponent(item)}`} className="nav-link text-white fw-normal">{item}</NavLink>
                        ))}

                    </Nav>
                    <span onClick={handleShow} className='me-4'>
                        <i className="bg-2nd fa-bars fa-solid px-3 py-1 rounded-2"></i>
                    </span>
                </Navbar.Collapse>

            </Navbar>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>

                    <img className="col-8 img-fluid mx-auto px-2" src="https://backend.newsnow24.com/storage/photos/shares/newsnow-logo.png" alt="" />


                </Offcanvas.Header>
                <Offcanvas.Body>
                    {menuItems.map((item, index) => (
                        <NavLink key={index} to={`/menu/${index + 1}`} className="border-bottom border-danger fw-normal mb-2 pb-2 nav-link">{item}</NavLink>
                    ))}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header;
