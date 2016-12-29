import React from 'react';
import { Header, Footer } from '../components';

class Navigator extends React.Component {
    render () {
        return (
            <div className="app" id="container-navigator">
                <Header />
                { this.props.children }
                <Footer />
            </div>
        )
    }
}

export default Navigator;
