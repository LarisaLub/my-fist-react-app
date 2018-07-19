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
                <Text isText={isText} />
            </div>
        );
    }
}
export default App;
