import React from 'react';
import { BrowserRouter , Route }  from 'react-router-dom'
import Home from '../Home';
import Work from '../Work';
import Portfolio from '../Portfolio';
import Profile from '../Profile';
import About from '../About';
import SocialMedia from '../SocialMedia';

const Index = () => {
    return (
        <div>
            <Home />
            <Work />
            <Portfolio />
            <Profile />
            <About />
            <SocialMedia />
        </div>
    );
}

export default Index;
