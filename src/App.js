import React, { Component } from "react";
import "./App.css";
import { texts } from "./text.json";
import Text from "./Text";

class App extends Component {
    state = { show: true };

    toggleText = index => {
        // textss[index].isShowComm = !textss[index].isShowComm;
        this.setState({ show: !this.state.show });
    };

    render() {
        console.log("test");
        return (
            <div className="App">
                {texts.map((text, index) => (
                    <Text
                        key={index}
                        text={text}
                        toggleText={this.toggleText}
                        show={this.state.show}
                    />
                ))}
            </div>
        );
    }
}
export default App;
