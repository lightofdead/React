import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogsData = [
    {id: 1, name: "Саня"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Вася"},
    {id: 4, name: "Гена"},
]

let messagesData = [
    {id: 1, message: "hi"},
    {id: 1, message: "Yo"},
    {id: 1, message: "Lol"},
    {id: 1, message: "Mdaaa"},
]

let postsData = [
    {id: 1, message: "Im putin", likeCounts: "(1)"},
    {id: 2, message: "huh me too", likeCounts: "(3)"},
    {id: 3, message: "okay", likeCounts: "(5)"},
    {id: 4, message: "stop", likeCounts: "(23)"},
    {id: 5, message: "lol what it is", likeCounts: "(645)"}
]

ReactDOM.render(<App posts={postsData} messages={messagesData} dialogs={dialogsData}/>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
