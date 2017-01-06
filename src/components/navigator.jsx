import React from 'react';

class Navigator extends React.Component {
    render () {
        const header = this.props.header || null;
        const footer = this.props.footer || null;

        return (
            <div className="app" id="container-navigator">
                { header }
                { this.props.page }
                { this.props.children }
                { footer }
            </div>
        )
    }
}

export default Navigator;
