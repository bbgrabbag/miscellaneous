import React, { Component } from 'react';
import autoBind from "auto-bind";
import Clicker from "../components/clicker";
import Bar from "../components/bar";

class ClickerContainer extends Component {
    constructor() {
        super();
        this.state = {
            redCounter: 100,
            blueCounter: 100,
            width: 50,
            style: {
                width: "50%"
            }
        }
        autoBind(this);
    }
    redClick() {
        this.setState(prevState => {
            if (prevState.blueCounter === 0) {
                return {
                    redCounter: 100,
                    blueCounter: 100,
                    width: 50,
                    style: {
                        width: "50%"
                    }
                }
            }
            return {
                redCounter: prevState.redCounter + 1,
                blueCounter: prevState.blueCounter - 1,
                width: prevState.width - .5,
                style: {
                    width: prevState.width - .5 + "%"
                }
            }
        })
    }
    blueClick() {
        this.setState(prevState => {
            if (prevState.redCounter === 0) {
                return {
                    redCounter: 100,
                    blueCounter: 100,
                    width: 50,
                    style: {
                        width: "50%"
                    }
                }
            }
            return {
                redCounter: prevState.redCounter - 1,
                blueCounter: prevState.blueCounter + 1,
                width: prevState.width + .5,
                style: {
                    width: prevState.width - .5 + "%"
                }
            }
        })
    }
    render() {
        let blueStyle = { backgroundColor: "blue" };
        let redStyle = { backgroundColor: "red" };
        return (
            <div className="wrapper">
                <div className="row row-custom">
                    <div className="col-xs-12 col-md-6">
                        <Clicker
                            handleClick={this.blueClick}
                            style={blueStyle}
                            count={this.state.blueCounter}
                            figure={`(> ")>`}
                            color="blue" />
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <Clicker
                            handleClick={this.redClick}
                            style={redStyle}
                            count={this.state.redCounter}
                            figure={`<(" <)`}
                            color="red" />
                    </div>
                    <Bar style ={this.state.style}/>
                </div>
            </div>
        );
    }
}

export default ClickerContainer;