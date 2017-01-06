import React from 'react';
import { connect } from 'react-redux';

/**
 * Page Component
 * ---------------
 * 
 * Pages are really just components made up of layouts and other components.
 */
class DefaultPage extends React.Component {

    render () {
        return (
            <div id="container-default-page">
                ...Your stuff here...
            </div>
        );
    }
}

/**
 * Redux select
 * ----------------
 * 
 * This is where you get variables out of the Redux Store
 */
function select(state){
    return {
        currentRoute: state.currentRoute
    }
}

export default connect(select)(DefaultPage);
