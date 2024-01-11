export type LocationType = {
    city: string,
    country: string
}
export type PhotosType = {
    small: string,
    large: string
}
export type  UsersType = {
    id: number,
    photos: PhotosType,
    followed: boolean,
    name: string,
    status: string,
    location: LocationType

}
export type UserReducerType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: boolean
}

export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID: userID
    } as const
}
export const unFollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID: userID
    } as const
}
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: 'SET_USERS',
        users: users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage: currentPage
    } as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_COUNT',
        count: totalUsersCount
    } as const
}
export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'SET_IS_FETCHING',
        isFetching: isFetching
    } as const
}
export const setIsFollowingProgressAC = (followingInProgress: boolean) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        followingInProgress: followingInProgress
    }as const
}

export type FollowUnFollowType =
    ReturnType<typeof followAC> |
    ReturnType<typeof unFollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalUsersCountAC> |
    ReturnType<typeof setIsFetchingAC>|
    ReturnType<typeof setIsFollowingProgressAC>

const initialState: UserReducerType = {
    users: [
        //     {
        //         id: 1,
        //         photoUrl: photo1,
        //         followed: false,
        //         fullName: 'Vitalia',
        //         status: 'I am junior-frontend',
        //         location: {city: 'Molodechno', country: 'Belarus'}
        //     },
        //     {
        //         id: 2,
        //         photoUrl: photo2,
        //         followed: true,
        //         fullName: 'Nikolay',
        //         status: 'I am middle-frontend',
        //         location: {city: 'Turly', country: 'Belarus'}
        //     },
        //     {
        //         id: 3,
        //         photoUrl: photo3,
        //         followed: false,
        //         fullName: 'Julia',
        //         status: 'I am housewife',
        //         location: {city: 'Kremenchug', country: 'Ukraine'}
        //     },
        //     {
        //         id: 4,
        //         photoUrl: photo4,
        //         followed: true,
        //         fullName: 'Oksana',
        //         status: 'I am shop-assistant',
        //         location: {city: 'Warsaw', country: 'Poland'}
        //     }
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false
}
export const usersReducer = (state = initialState, action: FollowUnFollowType): UserReducerType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })

            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })

            }
        case 'SET_USERS':
            return {
                ...state, users: action.users


            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state, currentPage: action.currentPage

            }
        case 'SET_TOTAL_COUNT':
            return {
                ...state, totalUsersCount: action.count

            }

        case 'SET_IS_FETCHING':
            return {
                ...state, isFetching: action.isFetching

            }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,followingInProgress:action.followingInProgress
            }

        default:
            return state;
    }

}