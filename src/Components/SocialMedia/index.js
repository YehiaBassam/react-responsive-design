import React , { useState , useEffect } from 'react';
import { Social_Media , Social , Social_Icon , Social_Par , Social_Span_Info } from './style.js' ;
import axios from 'axios';

const SocialMedia = () => {

    const [ social , setSocial ] = useState([])

    useEffect(() => {
        axios.get('js/data.json').then(res => setSocial(res.data.social))
    }, [])

    const socialList = social.map(item => {
        return (
        <Social key={item.id} social={item.id}>
            <Social_Icon className={item.icon}></Social_Icon>
                <Social_Par>
                    <Social_Span_Info >{item.title}</Social_Span_Info>
                    <Social_Span_Info info2>{item.body}</Social_Span_Info>
                </Social_Par>
        </Social>
        )
    })

    return (
        <Social_Media >
            {socialList}
        </Social_Media>
    );
}

export default SocialMedia;
