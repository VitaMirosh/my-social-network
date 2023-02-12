export type DialogsType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    message: string
}
export type MessagePageType = {
    dialogs: DialogsType[],
    messages: MessageType[],
}

export type PostsType = {
    id: number,
    message: string,
    likesCount: number,
}

export type  ProfilePageType = {
    posts: PostsType[]
}

export type StateType = {
    profilePage: ProfilePageType,
    messagePage: MessagePageType,
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'How are you?', likesCount: 0},
            {id: 2, message: 'It`s my first post', likesCount: 11},
        ]
    },
    messagePage: {
        dialogs: [
            {id: 1, name: 'Vita'},
            {id: 2, name: 'Inna'},
            {id: 3, name: 'Olha'},
            {id: 4, name: 'Polina'},
            {id: 5, name: 'Rosa'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: "Let's go with us!"}
        ]
    }

}
export default state;