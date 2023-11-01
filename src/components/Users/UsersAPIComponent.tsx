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
import axios from "axios";
import {Users} from "./Users";

export const UsersAPIComponent = () => {
    const users = useSelector<AppStateType, UsersType[]>(state => state.usersPage.users)
    const pageSize = useSelector<AppStateType, number>(state => state.usersPage.pageSize)
    const totalUsersCount = useSelector<AppStateType, number>(state => state.usersPage.totalUsersCount)
    const currentPage = useSelector<AppStateType, number>(state => state.usersPage.currentPage)
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
    const setTotalUsersCount = (totalUsersCount: number) => {
        dispatch(setTotalUsersCountAC(40))//totalUsersCount
    }
    const setCurrentPage = (currentPage: number) => {
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

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <Users totalUsersCount ={totalUsersCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  setCurrentPage={  setCurrentPage}
                  users={users}
                  follow={follow}
                  unFollow={unFollow}
                  getUser={getUser}


    />

}