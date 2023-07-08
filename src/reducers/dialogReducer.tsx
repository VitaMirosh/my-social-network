

export type DialogsType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    message: string,


}
export type MessagePageType = {
    dialogs: DialogsType[],
    messages: MessageType[],
    newMessageText: string,
}
export const addNewDialogsPage = (newDialog: string) => {
    return {
        type: 'ADD-NEW-DIALOGS',
        newDialog: newDialog
    } as const
}
export const sendMessage = (sendMessageBody: string) => {
    return {
        type: 'SEND_MESSAGE',
        sendMessageBody: sendMessageBody
    } as const
}
export type DialogPageType =
    | ReturnType<typeof addNewDialogsPage>
    | ReturnType<typeof sendMessage>

const initialState: MessagePageType = {
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
    newMessageText: '',
}


export const dialogReducer = (state = initialState, action : DialogPageType) => {
    switch(action.type) { // исправил синтаксис switch-case
        case 'ADD-NEW-DIALOGS': // исправил название экшена
            return {
                ...state,
                newMessageText: action.newDialog // возвращаю новый стейт с обновленным текстом
            }
        case 'SEND_MESSAGE':
            let body = state.newMessageText; // использую текущий стейт вместо this._state
            let newMessage = {id: 6, message: body}; // создаю новый объект сообщения
            return {
                ...state,
                messages: [...state.messages, newMessage], // добавляю новое сообщение в массив
                newMessageText: '' // обнуляю текст сообщения
            }
        default:
            return state; // возвращаю стейт по умолчанию, если нет подходящего экшена
    }
}