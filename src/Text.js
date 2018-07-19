import React, { Component } from "react";

const Text = ({ text, toggleText }) => {
    const isShowComm = text.isShowComm;
    return (
        <div>
            <header className="App-header">
                <h1 className="App-title">{text.title}</h1>
            </header>
            <p className="App-intro">{text.text}</p>
            <p className="App-intro" style={{ display: isShowComm ? "block" : "none" }}>
                {text.commit}
            </p>
            <button onClick={toggleText}>{isShowComm ? "Hide" : "Show"} commit </button>
        </div>
    );
};

export default Text;
