import styled from 'styled-components'


export const AboutSection = styled.div
    `height: 500px;
    background: url('../images/about/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    
    @media (max-width:991px) and (min-width:552px) {
        height: 400px;
    }

    @media (max-width:551px){
        height: 500px;
    }
        `

export const About_Info = styled.div
    `padding-top: 100px;
    width: 50%;
    float: right;
    
    @media (max-width:991px) {
        width: 100%;
        padding-top: 10px;
        float: none
    }`

export const Info_Title = styled.h2
    `font-weight: bold;
    font-size: 50px`

export const Info_Title_Span = styled.span
    `font-weight: normal`

export const Info_Dir = styled.h4
    `font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px;
    
    @media (max-width:991px) {
        font-size: 30px
    }`

export const Info_Desc = styled.p
    `color: #000;
    margin-bottom: 15px;
    line-height: 1.8`

export const Info_Desc_Anchor = styled.a
    `text-decoration: none`
