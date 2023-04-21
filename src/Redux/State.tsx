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
    newPostText: string
}

export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}


export type StoreType = {
    _state: StateType,
    changeNewText: (newText: string) => void,
    addPost: (postText: string) => void,
    _rerenderEntireTree: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => StateType
}
const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
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
    },
    _rerenderEntireTree() {
        console.log('state change')
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ""
        this._rerenderEntireTree();
    },
    changeNewText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree();
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    getState() {
        return this._state;
    }

}


export default store;
