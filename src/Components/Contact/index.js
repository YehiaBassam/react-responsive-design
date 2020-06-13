import React from 'react';
import { ContactSection , ContactContainer , Contact_Title , Contact_Span , Form , Input , FormInput , InputText , InputEmail , InputExp , InputSubmit , Textarea } from "./style";

const Contact = () => {
    return (
            <ContactSection>
            <ContactContainer>
                <Contact_Title><Contact_Span>Drop </Contact_Span>Me A line</Contact_Title>
                <Form action="">
                    <FormInput>
                        <InputText placeholder=" Your Name ..." />
                        <InputEmail placeholder=" Your Email ..." />
                    </FormInput>
                    <InputExp type="text" className="sub" placeholder=" Your Subject ..." />
                    <Textarea cols="30" rows="10" placeholder=" Your Message ..."></Textarea>
                    <InputSubmit type="submit" value="Send Message" />
                </Form>
            </ContactContainer>
        </ContactSection>
    );
}

export default Contact;
