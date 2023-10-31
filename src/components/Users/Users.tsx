import React from "react";
import {
    followAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from "../../reducers/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../APP/store";
import style from './users.module.css'
import photo5 from '../../accets/image/Users/th.jpeg'
import axios from "axios";

export const Users = () => {
    const users = useSelector<AppStateType, UsersType[]>(state => state.usersPage.users)
    const pageSize = useSelector<AppStateType, number>(state => state.usersPage.pageSize)
    const totalUsersCount = useSelector<AppStateType, number>(state => state.usersPage.totalUsersCount)
    const currentPage=useSelector<AppStateType, number>(state => state.usersPage.currentPage)
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
    const  setTotalUsersCount=( totalUsersCount:number)=>{
        dispatch(setTotalUsersCountAC(40))//totalUsersCount
    }
    const setCurrentPage = (currentPage:number)=>{
        dispatch(setCurrentPageAC(currentPage))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`).then(response => {
            setUsers(response.data.items)

        })

    }
    let getUser = () => {

        if (users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`).then(response => {
                setUsers(response.data.items)
                setTotalUsersCount(response.data.totalCount)
            })
        }
    }

    let pagesCount =Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for(let i=1 ; i<=pagesCount;i++){
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
               return <span className={currentPage === p ? style.selectedPage: ""}
                            onClick={()=>setCurrentPage(p)}>{p}</span>

            })}
        </div>
        <button onClick={getUser}>Get Users</button>
        {
            users.map(u => {
                // console.log(u.followed)
                return (<div key={u.id}>

               <span>
                   <div><img className={style.userPhoto} src={u.photos?.small != null ? u.photos.small : photo5}
                             alt={'photo'}/></div>
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

