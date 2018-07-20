import React from "react";

const Text = ({ text, toggleText, show }) => {
    //const isShowComm = text.isShowComm;
    return (
        <div>
            <header className="App-header">
                <h1 className="App-title">{text.title}</h1>
            </header>
            <p className="App-intro">{text.text}</p>
            {show ? (
                <p className="App-intro" style={{ display: "block" }}>
                    {text.commit}
                </p>
            ) : null}
            <button
                onClick={() => {
                    toggleText(text.id);
                }}>
                {show ? "Hide" : "Show"} commit{" "}
            </button>
        </div>
    );
};

export default Text;
