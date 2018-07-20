import React, { Component } from "react";
import "./App.css";
import { texts } from "./text.json";
import Text from "./Text";

class App extends Component {
    //state = { texts: texts };

    toggleText = index => {
        //let texts = this.state.texts;
        texts[index].isShowComm = !texts[index].isShowComm;
        this.setState({ texts });
    };

    render() {
        return (
            <div className="App">
                {texts.map((text, index) => (
                    <Text key={index} text={text} toggleText={this.toggleText} />
                ))}
            </div>
        );
    }
}
export default App;
