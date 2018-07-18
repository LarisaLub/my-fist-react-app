import React, { Component } from "react";
import "./App.css";
import Text from "./Text";

class App extends Component {
    state = { isText: true };

    toggleText = () => {
        //const isText = this.state.isText ? false : true;
        this.setState({ isText: !this.state.isText });
    };

    render() {
        const { isText } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Изучение JS и React</h1>
                </header>
                <Text isText={isText} />
                <button onClick={this.toggleText}>
                    Click to {isText ? "hide" : "show"} text
                </button>
            </div>
        );
    }
}
export default App;
