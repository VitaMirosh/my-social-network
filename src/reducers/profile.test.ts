import {addNewTextActionCreator, addPostActionCreator, ProfilePageType, profileReducer} from "./profileReducer";

let message:ProfilePageType;
beforeEach(()=>{
    message = {
        newPostText: '',
        posts: [
            {id: 1, message: 'How are you?', likesCount: 0},
            {id: 2, message: 'It`s my first post', likesCount: 11},
        ]
    }
})
test ("should add new message",()=>{
    const newMessage = profileReducer(message,addPostActionCreator('hello'))
    expect(newMessage.posts[2].message).toBe('hello')
    expect(message.posts.length).toBe(2)
})
test ("should changed new text",()=>{
    const newText = profileReducer(message,addNewTextActionCreator('my name is'))
    expect(newText.newPostText).toBe('my name is')
})