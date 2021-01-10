import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs messages={props.messages} dialogs={props.dialogs}/>}/>
                    <Route path='/profile' render={() => <Profile postsData={props.posts}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
