import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.8459865455206!2d174.77990071538312!3d-41.29045627927309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afd1ad98169d%3A0x9a409ffce82d9a30!2sMuseum+of+New+Zealand+Te+Papa+Tongarewa!5e0!3m2!1sen!2snz!4v1557786746200!5m2!1sen!2snz" 
                        width="100%" 
                        height="500px" 
                        frameBorder="0" 
                        style="border:0" 
                        allowFullScreen>

                    </iframe>

                    <div className="location_tag">
                        <div>LOCATION</div>

                    </div>
            
        </div>
    );
};

export default Location;