import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ClickerContainer from "./containers/clicker-container";
import "./index.css";

class App extends Component {
    render() {
        return (
            <div className="container">
                <ClickerContainer/>
            </div>
        );
    }
}

ReactDOM.render(<App></App>, document.getElementById("root"));