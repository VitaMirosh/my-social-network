let rerenderEntireTree = ()=> {
    console.log('state change')
}


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
    posts: PostsType[],
    newPostText: string
}

export type StateType = {
    profilePage: ProfilePageType,
    messagePage: MessagePageType,

}


let state = {
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
}
export let addPost = () => {
    let newPost = {
        id: 3,
        message:state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText=""
    //   state.profilePage.posts = [newPost, ...state.profilePage.posts]
    rerenderEntireTree();
}
export const changeNewText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}
export const subscribe=(observer:()=>void)=>{
    rerenderEntireTree=observer;
}

export default state;