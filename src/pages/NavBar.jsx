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
            <NavLink to="/about" activeStyle>
            about
            </NavLink>
              <NavLink to="/services" activeStyle>
            Services
            </NavLink>
              <NavLink to="/skills" activeStyle>
            skills
            </NavLink>
              <NavLink to="/contact" activeStyle>
            contact
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
        </NavBtn>
    </Nav>
    </>
  );
}

export default NavBar
