

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
    users: UsersType[]
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

export type FollowUnFollowType =
    ReturnType<typeof followAC> |
    ReturnType<typeof unFollowAC> |
    ReturnType<typeof setUsersAC>

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
    ]

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
                ...state,
                users: [...state.users, ...action.users
                ]

            }

        default:
            return state;
    }

}