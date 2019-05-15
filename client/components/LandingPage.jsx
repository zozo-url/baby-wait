import React, { Component } from 'react';

import Header from './Header'
import Featured from './Featured'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Featured/>
            </div>
        );
    }
}

export default LandingPage;