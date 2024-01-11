import React from "react";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC, setIsFollowingProgressAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from "./usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../APP/store";

import {Users} from "./Users";
import {Preloader} from "../../../common/components/preloader/Preloader";
import {usersAPI} from "../api/usersApi";



export const UsersAPIComponent = () => {
    const users = useSelector<AppStateType, UsersType[]>(state => state.usersPage.users)
    const pageSize = useSelector<AppStateType, number>(state => state.usersPage.pageSize)
    const totalUsersCount = useSelector<AppStateType, number>(state => state.usersPage.totalUsersCount)
    const currentPage = useSelector<AppStateType, number>(state => state.usersPage.currentPage)
    const isFetching = useSelector<AppStateType, boolean>(state => state.usersPage.isFetching)
    const followingInProgress = useSelector<AppStateType, boolean>(state => state.usersPage.followingInProgress)
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
    const toggleIsFetching = (isFetching: boolean) => {
        dispatch(setIsFetchingAC(isFetching))
    }
    const setTotalUsersCount = (totalUsersCount: number) => {
        dispatch(setTotalUsersCountAC(40))//totalUsersCount
    }
    const setIsFollowingProgress=(followingInProgress:boolean)=>{
        dispatch(setIsFollowingProgressAC(followingInProgress))
    }

    const setCurrentPage = (currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
        toggleIsFetching(true)
        usersAPI.getUsers(currentPage,pageSize)
            .then(data => {
                toggleIsFetching(false)
                setUsers(data.items)
            })
    }

    if (users.length === 0) {
        toggleIsFetching(true)
        usersAPI.getUsers(currentPage,pageSize)
            .then(data => {
            toggleIsFetching(false)
            setUsers(data.items)
            setTotalUsersCount(data.totalCount)
        })
    }


    return <>

        {isFetching ? <Preloader/> : null}
        <Users totalUsersCount={totalUsersCount}
               pageSize={pageSize}
               currentPage={currentPage}
               setCurrentPage={setCurrentPage}
               users={users}
               follow={follow}
               unFollow={unFollow}
               setIsFollowingProgress={setIsFollowingProgress}


        />
    </>
}