import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/nav";
import {Profile} from "./Profile/Profile";
import {Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import  {StoreType} from "./Redux/State";
import {Dialogs} from "./components/Dialogs/Dialogs";

type PropsType = {
    store:StoreType

}

// type AppType={
//     state:StateType,
//     addPost:(postMessage:string)=>void
//     changeNewText:(newText: string)=>void
// }

 const App : React.FC<PropsType>= (props) => {
    const state =props.store.getState();

    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile profilePage={state.profilePage} addPost={props.store.addPost.bind(props.store)} changeNewText={props.store.changeNewText.bind(props.store)}/>}/>
                    <Route path={'/dialogs*'} element={<Dialogs messagePage={state.messagePage}/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={"/music"} element={<Music/>}/>
                    <Route path ={"/settings"} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );

}

export default App;
