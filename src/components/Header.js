import React, { useState, Component } from 'react'
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href={Link} to="/">worada Web</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href={Link} to="/components/">เกี่ยวกับเรา</NavLink>
                        </NavItem>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href={Link} to="/components/">เกี่ยวกับเรา</NavLink>
                            </NavItem>
                        </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
