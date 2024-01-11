import {profileReducer} from "../features/2-Profile/model/profileReducer";
import {dialogReducer} from "../reducers/dialogReducer";
import {combineReducers, createStore} from "redux";
import {usersReducer} from "../reducers/usersReducer";
import {authReducer} from "../reducers/auth-reducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage:usersReducer,
    authReducer:authReducer
})


export const store = createStore(reducers)


export type AppStateType = ReturnType<typeof reducers>