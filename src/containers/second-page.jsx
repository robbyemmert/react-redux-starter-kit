import React from 'react';
import { connect } from 'react-redux';
import { AdvancedComponent } from '../components';

class SecondPage extends React.Component {
    render () {
        return (
            <div id="container-second-page">
                <h1>Second Page</h1>
                <AdvancedComponent text="Advanced Component" someValue={4}>
                    <strong>Some more JSX in here.</strong>
                </AdvancedComponent>
            </div>
        );
    }
}

function select(state) {
    return {
        currentRoute: state.currentRoute
    }
}

export default connect(select)(SecondPage);
