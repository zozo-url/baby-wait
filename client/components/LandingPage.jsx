import React, { Component } from 'react';


import Header from './Header'
import Featured from './Featured'
import HomeInfo from './HomeInfo'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Featured/>
                <HomeInfo/>
            </div>
        );
    }
}

export default LandingPage;