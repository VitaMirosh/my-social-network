import React from "react";
import {followAC, setIsFollowingProgressAC, unFollowAC, UsersType} from "./usersReducer";
import style from './users.module.css'
import photo5 from '../../../accets/image/Users/th.jpeg'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../api/usersApi";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../APP/store";


export type UsersTypeProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    users: UsersType[]
}
export const Users = (props: UsersTypeProps) => {
    const followingInProgress = useSelector<AppStateType, number[]>(state => state.usersPage.followingInProgress)
    const dispatch = useDispatch()
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>

            {pages.map(p => {
                return <span className={props.currentPage === p ? style.selectedPage : ""}
                             onClick={() => props.setCurrentPage(p)}>{p}</span>

            })}


        </div>

        {
            props.users.map(u => {
                // console.log(u.followed)
                return (<div key={u.id}>

               <span>
                   <div>
                        <NavLink to={'/profile/' + u.id}>
                       <img className={style.userPhoto} src={u.photos?.small != null ? u.photos.small : photo5}
                            alt={'photo'}/>
                        </NavLink>
                   </div>
                   <div>
                       {u.followed ? <button disabled={followingInProgress.some(id => id == u.id)} onClick={() => {
                           dispatch(setIsFollowingProgressAC (followingInProgress,u.id,true))
                           usersAPI.unFollow(u.id)
                               .then(data => {
                                   if (data.resultCode == 0) {
                                       dispatch(unFollowAC(u.id))
                                   }
                                   dispatch(setIsFollowingProgressAC (followingInProgress,u.id,false))
                               });

                       }}>Unfollow</button> : <button disabled={followingInProgress.some(id => id == u.id)} onClick={() => {
                           dispatch(setIsFollowingProgressAC (followingInProgress,u.id,true))
                           usersAPI.follow(u.id)
                               .then(data => {
                                   if (data.resultCode == 0) {
                                       dispatch(followAC(u.id))
                                   }
                                   dispatch(setIsFollowingProgressAC (followingInProgress ,u.id,false))
                               });

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

