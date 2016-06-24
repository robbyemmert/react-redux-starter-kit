import React from 'react';
import { connect } from 'react-redux';
import { RouteActions } from '../actions';
import { routes } from '../constants';

class DefaultPage extends React.Component {
    componentWillMount() {
        this.props.dispatch(RouteActions.setAppRoute(routes.DEFAULT_PAGE));
    }

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
