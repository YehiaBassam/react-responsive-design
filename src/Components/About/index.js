import React from 'react';
import { AboutSection , About_Info , Info_Title , Info_Title_Span , Info_Dir , Info_Desc , Info_Desc_Anchor } from './style.js' ;

const About = () => {
    return (
        <AboutSection>
            <div className="container">
                <About_Info>
                    <Info_Title><Info_Title_Span>This is</Info_Title_Span> Me</Info_Title>
                    <Info_Dir>about Director</Info_Dir>
                    <Info_Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Info_Desc_Anchor href="#">explicabo</Info_Desc_Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Info_Desc>
                    <Info_Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Info_Desc>
                </About_Info>
            </div>
        </AboutSection>
    );
}

export default About;
