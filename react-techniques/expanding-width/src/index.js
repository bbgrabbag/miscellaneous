import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Box from "./box";
import "./index.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInc: true,
            radius: 0,
            style: {
                borderRadius: 0 + "%"
            }
        }
        this.handleRadiusToggle = this.handleRadiusToggle.bind(this);
    }
    componentDidMount() {
        this.toggle = setInterval(this.handleRadiusToggle, 25);
    }
    componentWillUnmount() {
        clearInterval(this.toggle);
    }
    handleRadiusToggle() {
        this.setState(prevState => {
            let newState = {
                isInc: prevState.isInc,
                radius: prevState.radius
            };
            if (prevState.radius === 50){
                newState.isInc = false;
                newState.radius = prevState.radius - 1
            } else if (prevState.radius === 0){
                newState.isInc = true;
                newState.radius = prevState.radius + 1;
            } else {
                if (prevState.isInc){
                    newState.radius = prevState.radius + 1;
                } else {
                    newState.radius = prevState.radius - 1;
                }
            }
            newState.style = {borderRadius: newState.radius + "%"}
            return newState;
        })
    }
    render() {
        return (
            <Box style={this.state.style}></Box>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));