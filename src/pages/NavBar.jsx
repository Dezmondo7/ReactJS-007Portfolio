import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'


const NavBar = () => {
  return (
    <>
    <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/About" activeStyle>
            About
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
