import {addNewDialogsPage, dialogReducer, DialogReducerType, sendMessage} from "./dialogReducer";

let dialog: DialogReducerType;
beforeEach(() => {
    dialog = {
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
        ],
        newMessageText: ''
    }
})

test("should take action type and return new state", () => {

    const newDialog = dialogReducer(dialog, addNewDialogsPage('Hi'))
    expect(newDialog.newMessageText).toBe('Hi')
    expect(dialog.newMessageText).toBe('')
})
test("отправки сообщения", () => {
const newDialog=dialogReducer(dialog,sendMessage('Hello word!'))
    expect(newDialog.messages[3].message).toBe('Hello word!')
   expect(dialog.messages.length).toBe(3)
    expect(newDialog.messages.length).toBe(4)
})