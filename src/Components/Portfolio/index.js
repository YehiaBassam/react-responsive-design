import React , { useState , useEffect } from 'react';
import { PortfolioSection , PortfolioTitle , PortfolioSpan , PortfolioList , PortfolioItem , ImageWrapper , Image , ImageOverlay , OverlaySpan } from './style.js'
import axios from 'axios';

const Portfolio = () => {

    const [ images , setImages ] = useState([]);
    useEffect(() => {
        axios.get('js/data.json').then(res => setImages(res.data.Portfolio) )
    }, []);

    const imageslist = images.map(img => {
        return (
            <ImageWrapper key={img.id}>
                    <Image src={img.image} alt="imge" />
                    <ImageOverlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </ImageOverlay>
                </ImageWrapper>
        )
    })

    
    return (
            <PortfolioSection>
            <PortfolioTitle><PortfolioSpan>My</PortfolioSpan> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box" id='skills'>
                {imageslist}
            </div>
            
        </PortfolioSection>
    );
}

export default Portfolio;
