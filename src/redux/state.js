const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';
const UPDATE_TEXT_MESSAGE = 'UPDATE-NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE;'

let store = {
    rerenderEntireTree() {
        debugger;
        console.log('Call function rerenderEntireTree');
    },
    getState() {
        return this.state;
    },
    state: {
        messagesPage: {
            dialogsData: [
                { id: 1, dialogName: "Egor" },
                { id: 2, dialogName: "Anton" },
                { id: 3, dialogName: "Kirill" },
                { id: 4, dialogName: "Olga" },
                { id: 5, dialogName: "Ruslan" },
                { id: 6, dialogName: "Aleksey" },
                { id: 7, dialogName: "Kostya" },
            ],
            messagesData: [
                { id: 1, textMessage: "Hello! Are you hear me??" },
                { id: 2, textMessage: "Hi! Are you here?" },
                { id: 3, textMessage: "Okay.. you ignored me.." },
                { id: 4, textMessage: "I all understand.. bye.." },
                { id: 5, textMessage: "Fuck me in my ass" },
            ], 
            newMessageText: "",
            messageId: 6,
        },
        profilePage: {
            posts: [
                { id: 1, message: "Hello everyone!", countLikes: 12 },
                { id: 2, message: "It's my first post!!!", countLikes: 0 },
                { id: 3, message: "I'm very cool!", countLikes: 1 },
                { id: 4, message: "Fuck me!", countLikes: 3 },
                { id: 5, message: "Suck my dick", countLikes: 5 },
                { id: 6, message: "Pizda", countLikes: 7 },
            ],
            newPostText: "",
            postId: 7,
        }
    },
    addPost() {
        let newPost = { id: this.state.profilePage.postId, message: `${this.state.profilePage.newPostText}`, countLikes: 0 };
        this.state.profilePage.posts.push(newPost);
        this.state.profilePage.newPostText = "";
        this.rerenderEntireTree(this.state);
        this.state.profilePage.postId++;
    },
    addNewPostText(postText) {
        this.state.profilePage.newPostText = postText;
        this.rerenderEntireTree(this.state);
    },

    dispatch(action) {
        debugger;
        if (action.type === ADD_POST) {
            let newPost = { id: this.state.profilePage.postId, message: `${this.state.profilePage.newPostText}`, countLikes: 0 };
            this.state.profilePage.posts.push(newPost);
            this.state.profilePage.newPostText = "";
            this.rerenderEntireTree(this.state);
            this.state.profilePage.postId++;
        }
        else if (action.type === ADD_NEW_POST_TEXT) {
            this.state.profilePage.newPostText = action.postText;
            this.rerenderEntireTree(this.state);
        } else if (action.type === UPDATE_TEXT_MESSAGE) {
            this.state.messagesPage.newMessageText = action.messageText;
            this.rerenderEntireTree(this.state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = { id: this.state.messagesPage.messageId, textMessage: this.state.messagesPage.newMessageText};
            this.state.messagesPage.messagesData.push(newMessage);
            this.state.messagesPage.newMessageText = "";
            this.rerenderEntireTree(this.state);
            this.state.messagesPage.messageId++;
        }
    },

    subscribe(callback) {
        this.rerenderEntireTree = callback;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const addNewPostTextActionCreator = (text) => {
    return {
        type: ADD_NEW_POST_TEXT,
        postText: text
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

export default store;