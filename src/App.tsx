import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/nav";
import {Profile} from "./Profile/Profile";
import {Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Users} from "./components/Users/Users";



// type AppType={
//     state:StateType,
//     addPost:(postMessage:string)=>void
//     changeNewText:(newText: string)=>void
// }

 const App : React.FC= () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/dialogs*'} element={<Dialogs/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={"/music"} element={<Music/>}/>
                    <Route path ={"/settings"} element={<Settings/>}/>
                    <Route path ={"/users"} element = {<Users/>}/>
                </Routes>
            </div>
        </div>
    );

}

export default App;
