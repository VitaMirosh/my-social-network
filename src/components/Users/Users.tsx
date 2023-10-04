import React from "react";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../reducers/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../APP/store";
import style from './users.module.css'
import photo5 from '../../accets/image/Users/th.jpeg'
import axios from "axios";

export const Users = () => {
    const users = useSelector<AppStateType, UsersType[]>(state => state.usersPage.users)
    const dispatch = useDispatch()

    const follow = (userID: number) => {
        dispatch(followAC(userID))
    }

    const unFollow = (userID: number) => {
        dispatch(unFollowAC(userID))
    }

    const setUsers = (users: UsersType[]) => {
        dispatch(setUsersAC(users))
    }
let getUser =()=>{

    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            setUsers(response.data.items)
        })
}

    }
    return <div>
        <button onClick={getUser}>Get Users</button>
        {
            users.map(u => {
                // console.log(u.followed)
                return (<div key={u.id}>

               <span>
                   <div><img className={style.userPhoto} src={u.photos?.small != null ? u.photos.small : photo5} alt={'photo'}/></div>
                   <div>
                       {!u.followed ? <button onClick={() => {
                           follow(u.id)
                       }}>Unfollow</button> : <button onClick={() => {
                           unFollow(u.id)
                       }}>Follow</button>}
                       </div>
               </span>
                        <span>
                   <div>{u.name}</div>
                   <div>{u.status}</div>
               </span>
                        <span>
                   <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
               </span>
                    </div>
                )
            })

        }

    </div>
}

