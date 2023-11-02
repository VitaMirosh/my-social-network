import {PhotosType} from "./usersReducer";

type ContactType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}

export type ProfileType = {
    userId: number,
    photo: PhotosType
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactType
}

export type PostsType = {
    id: number,
    message: string,
    likesCount: number,
}

export type  ProfilePageType = {
    profile: ProfileType | null,
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
export const setUsersProfileAC = (profile: null) => {
    return {
        type: 'SET_USERS_PROFILE',
        profile: profile
    } as const
}
export type ProfileReducerType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof addNewTextActionCreator> |
    ReturnType<typeof setUsersProfileAC>

const initialState: ProfilePageType = {
    profile: {} as ProfileType | null,
    newPostText: '',
    posts: [
        {id: 1, message: 'How are you?', likesCount: 0},
        {id: 2, message: 'It`s my first post', likesCount: 11},
    ]
}
export const profileReducer = (state = initialState, action: ProfileReducerType): ProfilePageType => {
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
        case'SET_USERS_PROFILE':
            return {
                ...state, profile: action.profile
            }

        default:
            return state;
    }

}