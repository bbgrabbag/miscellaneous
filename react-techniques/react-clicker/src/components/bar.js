import React, { Component } from 'react';

class Bar extends Component {
    render() {
        return (
            <div className="col-xs-12">
                <div className="bar red-bar"></div>
                <div style={this.props.style} className="bar blue-bar"></div>
            </div>
        );
    }
}

export default Bar;