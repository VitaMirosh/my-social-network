import React from "react";
import {UsersType}
    from "../../../reducers/usersReducer";
import style from './users.module.css'
import photo5 from '../../../accets/image/Users/th.jpeg'
import { NavLink} from "react-router-dom";
import axios from "axios";


export type UsersTypeProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    users: UsersType[]
    follow: (userID: number) => void
    unFollow: (userID: number) => void

}
export const Users = (props: UsersTypeProps) => {

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
                       {u.followed ? <button onClick={() => {

                           axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                               withCredentials:true,
                               headers:{
                                   "API-KEY":"37bdb382-9e4d-4b43-8daf-6560697dd4a0"
                               }
                           })
                               .then(response => {
                                   if (response.data.resultCode ==0){
                                       props.unFollow(u.id)
                                   }
                               });

                       }}>Unfollow</button> : <button onClick={() => {

                           axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                               withCredentials:true,
                               headers:{
                                   "API-KEY":"37bdb382-9e4d-4b43-8daf-6560697dd4a0"
                               }
                       })
                               .then(response => {
                               if (response.data.resultCode ==0){
                                   props.follow(u.id)
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

