import styled from 'styled-components'

export const Profile_Skills = styled.div
    `padding: 50px 0;
    overflow: hidden;`


export const Profile_Section = styled.div
    `width: 50%;
    float: left;
    
    @media (max-width:768px) {
        width: 100%;
        float: none;
        margin-bottom: 20px;
    }`

export const Profile_Title = styled.h2
    `font-size: 40px; 
    margin-bottom: 20px`

export const Profile_Title_Span = styled.span
    `font-weight: normal;`

export const Profile_List = styled.ul
    `list-style: none`


export const Profile_Item = styled.li
    `margin-bottom: 17px`


export const Profile_Span = styled.span
    `display: inline-block;
    width: 100px;
    
    font-weight:${props => props.web ? 'normal' : 'bold'};
    color:      ${props => props.web ? '#eb5424' : ''};
    `

export const Skills = styled.div
    `width: 50%;
    float: left;
    
    @media (max-width:768px) {
        width: 100%;
        float: none;
    }
        `

export const Skills_Title = styled.h2
    `font-size: 40px; 
    margin-bottom: 20px`

export const Skills_Title_Span = styled.span
    `font-weight: normal;`

export const Skills_Desc = styled.p
    `font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px`

export const Skills_Bar = styled.div
    `overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px`

export const Skills_Bar_Title = styled.span
    `float: left;`

export const Skills_Bar_Perc = styled.span
    `float: right;
    margin-right: 100px`

export const Skills_Bar_Parent = styled.div
    `background: #f8f8f8;
    height: 2px;
    clear: both;
    position: relative;
    top: 5px`

export const Skills_Parent_Span = styled.span
    `background: #eb5424;
    position: absolute;
    display:block;
    top: 0;
    left: 0;
    bottom: 0;
    width : ${props => props.sp === 1 ? '100%' : ''};
    width : ${props => props.sp === 2 ? '90%' : ''};
    width : ${props => props.sp === 3 ? '80%' : ''};
    `





