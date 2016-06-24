import React from 'react';
import { connect } from 'react-redux';

class DefaultPage extends React.Component {
    render () {
        return (
            <div id="container-default-page">
                ...Your stuff here...
            </div>
        );
    }
}

function select(state){
    return {
        currentRoute: state.currentRoute
    }
}

export default connect(select)(DefaultPage);
