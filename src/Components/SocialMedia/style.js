import styled from 'styled-components'

export const Social_Media = styled.div
    `height: auto;
    overflow: hidden`

export const Social = styled.div
    `width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    
    background : ${props => props.social === 1 ? '#3b5998':''};
    background : ${props => props.social === 2 ? '#498cbf':''};
    background : ${props => props.social === 3 ? '#cc2127':''};


    @media (max-width:991px) {
        width: 100%;
        float: none;
    }
    `

export const Social_Icon = styled.i
    `width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px`

export const Social_Par = styled.p
    `font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff`

export const Social_Span_Info = styled.span
    `display: block;
    margin-bottom: 8px;

    font-weight: ${props => props.info2 ? '100' : ''}
    `
