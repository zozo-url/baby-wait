import React from 'react';
import Carrousel from '../Carrousel'
import { Link }  from 'react-router-dom'

const index = () => {
    return (
        <div style={{position:'relative'}}>
<Carrousel/>
            <div className="daycare">
                <div className = "wrapper">
                   <h2 className = 'DashHeader'>baby-wait</h2>
                   <Link to='/parent/register'><button className="HomeButton">
                    Register </button></Link>
                <Link to='/parent/login'><button className="HomeButton">
                    Login </button></Link>
             </div>
        </div>
            
    </div>
    );
};

export default index;