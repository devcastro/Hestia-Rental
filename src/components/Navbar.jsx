import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { BiHotel } from 'react-icons/bi';


const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
  
`
const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    font-style: normal;
`

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`
const MenuBars = styled(BiHotel)`
    display: none;

    @media only screen and (max-width: 768px){
        display: block;
        font-size: 35px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-22px, 12px);
    }
`;

const NavMenu = styled.i`
    display: flex;
    align-items: center;
    margin-right:-48px;

    @media screen and (max-width: 760px){
        display:none;
    }

`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 760px){
        display:none;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">Hestia Stays</Logo>
            <MenuBars />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary='true'>Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
