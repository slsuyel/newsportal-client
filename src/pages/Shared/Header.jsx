
import { Navbar, Nav, } from 'react-bootstrap';
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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDropdownToggle = () => {
        setIsDropdownOpen(prevState => !prevState);
    };
    return (
        <>

            <div className="d-md-none py-3 text-white" style={{ backgroundColor: '#6B7280' }}>
                <p className='mb-0 ms-3'>শুক্রবার, ১৮ আগস্ট, ২০২৩</p>
            </div>


            <Navbar sticky="top" expand="lg" className="d-md-none d-xl-none align-items-center bg-white border-bottom border-danger d-flex px-2 mt-2">

                <div>
                    <span onClick={handleShow} className='me-4'>
                        <i className="bg-2nd fa-bars fa-solid px-3 py-2 rounded-4"></i>
                    </span>
                </div>

                <div>
                    <img className=" img-fluid " src="https://backend.newsnow24.com/storage/photos/shares/newsnow-logo.png" alt="" width={'150px'} />
                </div>

                <div className='align-items-center d-flex gap-2'>
                    <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
                        <button
                            className="bg-2nd border-0 dropdown-toggle  px-2 rounded-circle"
                            id="dropdown-search"
                            onClick={handleDropdownToggle}
                        >
                            <i className="fas fa-search"></i>
                        </button>
                        <div className={`dropdown-menu p-0 rounded-3 rounded-end-5 search-btn  ${isDropdownOpen ? 'show' : ''}`}>
                            <form className="d-flex">
                                <input type="search" placeholder="খুঁজুন" aria-label="Search" className="form-control border-0 bg-2nd " />

                                <button type="submit" className="bg-red border-0 rounded-end-4 px-2"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>


                    <div>
                        <button className="btn bg-2nd px-2  py-0 rounded-circle">
                            <i className="fas fa-moon"></i>
                        </button>
                    </div>
                </div>
            </Navbar>


            {/* d-none d-md-block d-xl-none */}
            <Navbar sticky="top" collapseOnSelect expand="lg" className='d-none d-sm-none d-md-block border-2 border-bottom fw-bold  navbar navbar-expand-lg navbar-light pri-bg py-0 shadow-sm sticky-top' variant="light">
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
