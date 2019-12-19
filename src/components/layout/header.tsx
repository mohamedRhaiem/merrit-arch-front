
import * as React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = ({ title }) => {

    document.title = title;

    return (
        <Navbar color="dark" dark expand="lg">
            <NavbarBrand href="/">{title}</NavbarBrand>
        </Navbar>
    );
};

Header.defaultProps = {
    title: ''
};

export default Header;
