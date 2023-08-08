import React from "react";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../reducers/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../APP/store";
import style from './users.module.css'
import photo1 from "../../accets/image/Users/photo_2023-08-08_19-12-57.jpg";
import photo2 from "../../accets/image/Users/photo_2023-08-08_17-13-46.jpg";
import photo3 from "../../accets/image/Users/photo_2023-08-08_17-13-51.jpg";
import photo4 from "../../accets/image/Users/photo_2023-08-08_17-14-00.jpg";

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

    if (users.length === 0) {
        setUsers([
            {
                id: 1,
                photoUrl: photo1,
                followed: false,
                fullName: 'Vitalia',
                status: 'I am junior-frontend',
                location: {city: 'Molodechno', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: photo2,
                followed: true,
                fullName: 'Nikolay',
                status: 'I am middle-frontend',
                location: {city: 'Turly', country: 'Belarus'}
            },
            {
                id: 3,
                photoUrl: photo3,
                followed: false,
                fullName: 'Julia',
                status: 'I am housewife',
                location: {city: 'Kremenchug', country: 'Ukraine'}
            },
            {
                id: 4,
                photoUrl: photo4,
                followed: true,
                fullName: 'Oksana',
                status: 'I am shop-assistant',
                location: {city: 'Warsaw', country: 'Poland'}
            }
        ])
    }
    return <div>
        {
            users.map(u => {
                console.log(u.followed)
                return (<div key={u.id}>

               <span>
                   <div><img className={style.userPhoto} src={u.photoUrl} alt={'photo'}/></div>
                   <div>
                       {!u.followed ? <button onClick={() => {
                           follow(u.id)
                       }}>Unfollow</button> : <button onClick={() => {
                           unFollow(u.id)
                       }}>Follow</button>}
                       </div>
               </span>
                        <span>
                   <div>{u.fullName}</div>
                   <div>{u.status}</div>
               </span>
                        <span>
                   <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
               </span>
                    </div>
                )
            })

        }

    </div>
}

