export type PostsType = {
    id: number,
    message: string,
    likesCount: number,

}

export type  ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export const addPostActionCreator = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}
export const addNewTextActionCreator = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText
    } as const
}
export type ProfileType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof addNewTextActionCreator>

const initialState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: 1, message: 'How are you?', likesCount: 0},
        {id: 2, message: 'It`s my first post', likesCount: 11},
    ]

}
export const profileReducer = (state = initialState, action: ProfileType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.postText, likesCount: 12}],
                newPostText: '',
            }

        case 'CHANGE-NEW-TEXT':
            return {
                ...state,
                newPostText: action.newText,
            }

        default:
            return state;
    }

}