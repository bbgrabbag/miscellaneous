import React, { Component } from 'react';

class Clicker extends Component {
    render() {
        return (
            <div className="clicker-wrapper">
                <div className={this.props.color + " clicker"}>
                    <button className="btn btn-lg btn-custom"style={this.props.style} onClick={() => this.props.handleClick()}>{this.props.figure}</button>
                </div>
                <div className="counter">
                    <p>{this.props.count}</p>
                </div>
            </div>
        );
    }
}

export default Clicker;