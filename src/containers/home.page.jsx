import React from 'react';
import { connect } from 'react-redux';
import { SampleActions } from '../actions';
import { SampleSegment } from '../components';

class HomePage extends React.Component {
    componentWillMount() {
        this.props.dispatch(SampleActions.getPosts());
    }
    
    render () {
        let posts = this.props.posts.map((post, index) => {
            return (
                <div key={index} className="sample-post">
                    <h3>{post.title}</h3>
                    <p className="sample-body">{post.body}</p>
                </div>
            )
        })
        return (
            <div id="container-home-page">
                <h1>Home</h1>
                <p>Here's a sample implementation of redux-segment</p>
                <SampleSegment subscriberID="sample1" />
                <SampleSegment subscriberID="sample2" />
                <SampleSegment />
                <p>Here's a list of demo posts from a sample API</p>
                { posts }
            </div>
        );
    }
}

function select(state){
    return {
        currentRoute: state.currentRoute,
        posts: state.posts
    }
}

export default connect(select)(HomePage);
