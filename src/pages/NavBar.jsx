import React from 'react'
{/*import { NavLink } from 'react-router-dom'; */}
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
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
            <NavLink to="/about" activeStyle >
            <HashLink to="#about" activeStyle>About</HashLink>
            </NavLink>
              <NavLink to="" activeStyle>
            Skills
            </NavLink>
              <NavLink to="/skills" activeStyle>
            Values
            </NavLink>
              <NavLink to="/contact" activeStyle>
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/signin">Contact Me</NavBtnLink>
        </NavBtn>
    </Nav>
    </>
  );
}

export default NavBar
