import React, { Component } from "react";

class Text extends Component {
    render() {
        const { isText } = this.props;
        return (
            <div style={{ display: isText ? "block" : "none" }}>
                <p className="App-intro">
                    Элементы — это объекты JavaScript, которые представляют HTML-элементы.
                    Их не существуют в браузере. они описывают DOM-элементы, такие как h1,
                    div, или section.{" "}
                </p>
                <p className="App-intro">
                    Компоненты — это элементы React, написанные разработчиком. Обычно это
                    части пользовательского интерфейса, которые содержат свою структуру и
                    функциональность. Например, такие как NavBar, LikeButton, или
                    ImageUploader.
                </p>
            </div>
        );
    }
}

export default Text;
