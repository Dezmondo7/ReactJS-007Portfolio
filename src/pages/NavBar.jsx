import React from 'react'
{/*import { NavLink } from 'react-router-dom'; */}
import { useState } from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
import { HashLink } from 'react-router-hash-link';


const NavBar = () => {
    {/*create prop using state setter to open the dropdown navmenu with default false*/}
    const [ isOpen, setIsOpen ] = useState(false)

    {/* toggleMenu function */}
    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }

    return (
        <>
         {/*}   <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink> */}
                
               {/*} <Bars /> */}
               <nav className="dvs-header">
                <ul className="d-flex wrap justify-between align-center" >
                    <li>
                        <a href="#">LogoType</a>
                    </li>
                    <li className="dvs-header_menuItems">  
                        <ul>
                        <li className="d-flex align-center wrap">
                            <a href="#">Home</a>
                            <a href="#">Home</a>
                            <a href="#">Home</a>
                            <a href="#">Home</a>
                        </li>
                    </ul>
                 </li>   
                 </ul>
                    
                 </nav>
                {/* <NavMenu>
                    <NavLink to="" activeStyle >
                        <HashLink to="#about" activeStyle>About</HashLink>
                    </NavLink>

                    <NavLink to="" activeStyle>
                        <HashLink to="#quals" activeStyle>Qualifications</HashLink>
                    </NavLink>
                    <NavLink to="" activeStyle>
                        <HashLink to="#values" activeStyle>Values</HashLink>
                    </NavLink>
                </NavMenu>
                <NavBtn>
                     <NavBtnLink to="contact-location">Contact Me</NavBtnLink>
                </NavBtn> */}
            
        </>
    );
}

export default NavBar
