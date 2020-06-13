import styled from "styled-components";

export const ContactSection = styled.div
    `padding: 50px 0;
    text-align: center;
    margin-top :80px;
    height:527px;
        
    @media (max-width:400px) {
        height:583px;
    }`

export const ContactContainer = styled.div
    `
    @media (max-width:871px) {
        margin-top :100px;
    }`

export const Contact_Title = styled.h2
    `font-size: 60px;
    margin-bottom: 30px;
    
    @media (max-width:575px) {
        font-size: 40px
    }
        `


export const Contact_Span = styled.span
    `font-weight: normal`

export const Form = styled.form
    `width: 70%;
    margin: auto;
    
    @media (max-width:575px) {
        width: 90%;
    }
        `

export const Input = styled.input
    `box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px`

export const FormInput = styled.div
    `overflow: hidden`

export const InputText = styled.input
    `box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
    float: left;
    width: 49%;
    
    @media (max-width:575px) {
        width: 95%;
        margin :10px
    }
        `

export const InputEmail = styled.input
    `box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
    float: right;
    width: 49%;
    
    @media (max-width:575px) {
        width: 94%;
        margin :10px;
    }`

export const InputExp = styled.input
    `box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
    width: 100%;
    
    @media (max-width:575px) {
        width: 95%;
        margin :10px;
    }`

export const InputSubmit = styled.input
    `box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin: 10px 0px;
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer;
    
    &:hover {
        background-color:#fbfbfb
    }`

export const Textarea = styled.textarea
    `width: 100%;
    margin-top:5px;
    outline: 0;
    background: #fbfbfb;
    
    @media (max-width:575px) {
        width: 94%;
        margin :10px;
    }`
