import React from 'react';

/*
DO NOT DELETE THIS COMPONENT!
Although it may seem useless to experienced developers, it's a great boilerplate for creating new components, and can serve as a reference.  As long as it is unused, Webpack will automatically ignore it in the build process, so don't worry about it cluttering things up.
 */

const DefaultComponent = props => {
    // Component logic Here
    if (props.hide || props.show === false) {
        return null;
    }

    // Component markup here
    return (
        <div id={props.id} className={['component-default-component', props.className].join(' ')}>
            Your Widget Here
        </div>
    )
}

export default DefaultComponent;
