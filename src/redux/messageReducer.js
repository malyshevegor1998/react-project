const UPDATE_TEXT_MESSAGE = 'UPDATE-NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE;'

const messageReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_TEXT_MESSAGE: {
            state.newMessageText = action.messageText;
            return state;
        }
        case ADD_MESSAGE: {
            let newMessage = { id: state.messageId, textMessage: state.newMessageText };
            state.messagesData.push(newMessage);
            state.newMessageText = "";
            state.messageId++;
            return state;
        }
        default: {
            return state;
        }
    }
};


export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
};
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_TEXT_MESSAGE,
        messageText: text
    }
};

export default messageReducer;