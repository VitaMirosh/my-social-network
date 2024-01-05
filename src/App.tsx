import React from 'react';
import './App.css'
import Nav from "./components/Nav/nav";
import {Navigate, Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {UsersAPIComponent} from "./components/Users/UsersAPIComponent";
import {Profile} from "./Profile/Profile";
import Header from "./components/Header/Header";
import {Auth} from "./features/auth/ui/Auth";


// type AppType={
//     state:StateType,
//     addPost:(postMessage:string)=>void
//     changeNewText:(newText: string)=>void
// }

const App: React.FC = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/login'} element={<Auth/>}/>
                    <Route path={'/dialogs*'} element={<Dialogs/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={"/music"} element={<Music/>}/>
                    <Route path={"/settings"} element={<Settings/>}/>
                    <Route path={"/users"} element={<UsersAPIComponent/>}/>

                </Routes>
            </div>
        </div>
    );

}

export default App;
