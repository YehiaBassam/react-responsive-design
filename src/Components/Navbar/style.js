import styled from "styled-components";


export const NavbarSection = styled.div
    `padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000;
    z-index:9999;
    position:fixed;
    width:100%;
    top : 0;
    `

export const NavbarContainer = styled.div
    `display:flex;
    justify-content: space-around ;
    align-items: center;
    width: 85%;
    margin: auto;`

export const NavbarLogo = styled.div
    `width: 30%;`


export const NavbarText = styled.h2
    `font-size: 30px;
    font-weight: bold`

export const UlList = styled.ul
    `width: 70%;
    text-align:right ;
    list-style: none;
    
    `

export const LlList = styled.li
    `display: inline-block;

    @media (max-width:871px) {
        width : 50%
    }
    `

export const Anchor = styled.a
`   display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    
    &:hover
    {
        color: #eb5424
    }
    `
export const Link = styled.a
`   display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    
    &:hover
    {
        color: #eb5424
    }
    `

