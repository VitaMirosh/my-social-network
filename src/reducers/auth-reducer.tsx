export type SetReducerType = {
    userID: null,
    email: null,
    login: null,
    isAuth:boolean
}
export type DataReducerType = {
    data: SetReducerType
}

export const SetUsersAC = (data:SetReducerType ) => {
    return {
        type: 'SET_USER_DATA',
        data: data
    } as const
}


export type SetFollowType =
    ReturnType<typeof SetUsersAC>


const initialState: DataReducerType = {
    data: {
        userID: null,
        email: null,
        login: null,
        isAuth:false
    },


}
export const authReducer = (state = initialState, action: SetFollowType): DataReducerType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
               data:{...action.data, isAuth:true}
            }


        default:
            return state;
    }

}