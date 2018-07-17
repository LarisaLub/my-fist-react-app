import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Изучение JS и React</h1>
                </header>
                <p className="App-intro">
                    Элементы — это объекты JavaScript, которые представляют HTML-элементы.
                    Их не существуют в браузере. они описывают DOM-элементы, такие как h1,
                    div, или section.{" "}
                </p>
                <p className="App-intro">
                    {" "}
                    Компоненты — это элементы React, написанные разработчиком. Обычно это
                    части пользовательского интерфейса, которые содержат свою структуру и
                    функциональность. Например, такие как NavBar, LikeButton, или
                    ImageUploader.
                </p>
            </div>
        );
    }
}

export default App;
