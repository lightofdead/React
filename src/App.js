import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";

let dialogsData = [
    {id: 1, name: "Саня"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Вася"},
    {id: 4, name: "Гена"},
]

let messagesData =[
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

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() =><Dialogs messages = {messagesData} dialogs = {dialogsData}/>}/>
                    <Route path='/profile' render={() => <Profile postsData = {postsData}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
