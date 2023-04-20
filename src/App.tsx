import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/nav";
import {Profile} from "./Profile/Profile";
import {Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import  { StateType} from "./Redux/State";
import {Dialogs} from "./components/Dialogs/Dialogs";

type AppType={
    state:StateType,
    addPost:(postMessage:string)=>void
    changeNewText:(newText: string)=>void
}

 const App = (props:AppType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile profilePage ={props.state.profilePage} addPost={props.addPost} changeNewText={props.changeNewText}/>}/>
                    <Route path={'/dialogs*'} element={<Dialogs messagePage={props.state.messagePage}/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={"/music"} element={<Music/>}/>
                    <Route path ={"/settings"} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );

}

export default App;
