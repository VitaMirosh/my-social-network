import {profileReducer} from "../reducers/profileReducer";
import {dialogReducer} from "../reducers/dialogReducer";
import {combineReducers, createStore} from "redux";
import {usersReducer} from "../reducers/usersReducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage:usersReducer
})


export const store = createStore(reducers)


export type AppStateType = ReturnType<typeof reducers>