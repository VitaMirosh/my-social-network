import {profileReducer} from "../reducers/profileReducer";
import {dialogReducer} from "../reducers/dialogReducer";
import {combineReducers, createStore} from "redux";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer
})


export const store = createStore(reducers)

export type AppStateType = ReturnType<typeof reducers>