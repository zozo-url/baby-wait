import React from 'react';
import Slider from "react-slick";



const Carrousel = () => {

    const settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 500
    }

    return (
        <div 
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                overflow:'hidden'
            }}
        >
            <Slider {...settings}>
                <div>
                   <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_one})`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
                
            </Slider>
            
        </div>
    );
};

export default Carrousel;