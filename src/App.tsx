import React from 'react';
import './App.css'
import Nav from "./common/components/Nav/nav";
import {Navigate, Route, Routes} from 'react-router-dom';
import News from "./common/components/News/News";
import Music from "./common/components/Music/Music";
import Settings from "./common/components/Settings/Settings";
import {Dialogs} from "./common/components/Dialogs/Dialogs";
import {UsersAPIComponent} from "./features/Users/ui/UsersAPIComponent";
import {Profile} from "./features/2-Profile/ui/Profile";
import Header from "./common/components/Header/Header";
import {Auth} from "./features/1-auth/ui/Auth";


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
