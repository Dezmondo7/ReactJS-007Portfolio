import React from 'react'
{/*import { NavLink } from 'react-router-dom'; */ }
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
import { HashLink } from 'react-router-hash-link';


const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="" activeStyle >
                        <HashLink to="#about" activeStyle>About</HashLink>
                    </NavLink>
                    <NavLink to="" activeStyle>
                        <HashLink to="#quals" activeStyle>Qualifications</HashLink>
                    </NavLink>
                    <NavLink to="" activeStyle>
                        <HashLink to="#values" activeStyle>Values</HashLink>
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavLink to="" activeStyle>
                    <NavBtnLink to="#contact-me">Contact Me</NavBtnLink>
                    <HashLink to="#contactze" activeStyle></HashLink>
                    </NavLink>
                </NavBtn>
            </Nav>
        </>
    );
}

export default NavBar
