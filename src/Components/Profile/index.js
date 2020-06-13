import React , { useState , useEffect } from 'react';
import { Profile_Skills , Profile_Section , Profile_Title , Profile_Title_Span , Profile_List , Profile_Item , Profile_Span , Skills , Skills_Title , Skills_Title_Span , Skills_Desc , Skills_Bar , Skills_Bar_Title , Skills_Bar_Perc , Skills_Bar_Parent , Skills_Parent_Span } from './style.js'
import axios from 'axios';

const Protfile = () => {

    const [ skills , setSkills] = useState([])

    useEffect(() => {
        axios.get('js/data.json').then(res => setSkills(res.data.profile))
    }, [])
    
    const skillslist = skills.map(skill => {
        return (
                    <Skills_Bar key={skill.id}>    
                        <Skills_Bar_Title>{skill.title}</Skills_Bar_Title>
                        <Skills_Bar_Perc>{skill.percentage}</Skills_Bar_Perc>
                        <Skills_Bar_Parent>
                        <Skills_Parent_Span sp={skill.id}></Skills_Parent_Span>
                        </Skills_Bar_Parent>
                    </Skills_Bar>
        )
    })


    return (
            <Profile_Skills>
            <div className="container">
                <Profile_Section>
                    <Profile_Title><Profile_Title_Span>My </Profile_Title_Span>Profile</Profile_Title>
                    <Profile_List>
                        <Profile_Item>
                            <Profile_Span>Name</Profile_Span>
                            Yehia Bassam
                        </Profile_Item>
                        <Profile_Item>
                            <Profile_Span>Birthday</Profile_Span>
                            16/6/1994
                        </Profile_Item>
                        <Profile_Item>
                            <Profile_Span>Address</Profile_Span>
                            Cairo
                        </Profile_Item>
                        <Profile_Item>
                            <Profile_Span>Phone</Profile_Span>
                            4444 5555 6666
                        </Profile_Item>
                        <Profile_Item>
                            <Profile_Span>Email</Profile_Span>
                            yehiabassam94@gmail.com
                        </Profile_Item>
                        <Profile_Item>
                            <Profile_Span>Website</Profile_Span>
                            <Profile_Span web>www.google.com</Profile_Span>
                        </Profile_Item>
                    </Profile_List>
                </Profile_Section>
                
                <Skills id='about'>
                    <Skills_Title>Some <Skills_Title_Span>skills</Skills_Title_Span></Skills_Title>
                    <Skills_Desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </Skills_Desc>
                    {skillslist}
                </Skills>
                
            </div>
        </Profile_Skills>
    );
}

export default Protfile;


