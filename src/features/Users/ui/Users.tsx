import React from "react";
import {followAC, unFollowAC, UsersType} from "./usersReducer";
import style from './users.module.css'
import photo5 from '../../../accets/image/Users/th.jpeg'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../api/usersApi";
import {useDispatch} from "react-redux";


export type UsersTypeProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    users: UsersType[]
    setIsFollowingProgress:(followingInProgress:boolean)=>void
}
export const Users = (props: UsersTypeProps) => {
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
                       {u.followed ? <button disabled={false} onClick={() => {
                           usersAPI.unFollow(u.id)
                               .then(data => {
                                   if (data.resultCode == 0) {
                                       dispatch(unFollowAC(u.id))
                                   }
                               });

                       }}>Unfollow</button> : <button disabled={false} onClick={() => {
                           usersAPI.follow(u.id)
                               .then(data => {
                                   if (data.resultCode == 0) {
                                       dispatch(followAC(u.id))
                                   }
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

