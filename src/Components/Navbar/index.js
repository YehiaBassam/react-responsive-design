import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarSection , NavbarContainer ,  NavbarLogo , NavbarText , UlList , LlList , Anchor } from './style.js'


const Navbar = () => {
    return (
        <NavbarSection>
            <NavbarContainer>
                <NavbarLogo>
                    <NavbarText>Ultra Profile</NavbarText>
                </NavbarLogo>

                    <UlList>
                        <LlList><Link className='mylinks' to="/">Home</Link></LlList>
                        <LlList><Anchor href="/#work">Work</Anchor></LlList>
                        <LlList><Anchor href="/#portfolio">Portfolio</Anchor></LlList>
                        <LlList><Anchor href="/#skills">Skills</Anchor></LlList>
                        <LlList><Anchor href="/#about">About</Anchor></LlList>
                        <LlList><Link className='mylinks' to="/contact">Contact</Link></LlList>
                    </UlList>
            </NavbarContainer>
        </NavbarSection>
    );
}

export default Navbar;
