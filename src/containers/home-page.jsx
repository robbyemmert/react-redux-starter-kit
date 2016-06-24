import React from 'react';
import { connect } from 'react-redux';
import { DefaultComponent } from '../components';
import { RouteActions } from '../actions';
import { routes } from '../constants';

class HomePage extends React.Component {
    componentWillMount(){
        this.props.dispatch(RouteActions.setAppRoute(routes.HOME));
    }

    render () {
        return (
            <div id="container-home-page">
                <h1>Home</h1>
                <p>Hello World! Here's a widget:</p>
                <DefaultComponent />
            </div>
        );
    }
}

function select(state){
    return {
        currentRoute: state.currentRoute
    }
}

export default connect(select)(HomePage);
