let store = {
 _state: {
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
        ]
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
        newPostText: ""
    }
},

getState () {
    return this._state;
},

_callSubscriber () {
    console.log('Call function rerenderEntireTree');
},

addPost () {
    debugger;
    let newPost = {id: '7', message: `${this._state.profilePage.newPostText}`, countLikes: 0};
    this._state.profilePage.posts.push(newPost);
    console.log(newPost)
    this.addNewPostText("");
    this._callSubscriber(this._state);
},

addNewPostText (postText) {
    this._state.profilePage.newPostText = postText;
    console.log(this._state.profilePage.newPostText);
    this._callSubscriber(this._state);
},

subscribe (callback) {
    this._callSubscriber = callback;
},
};

export default store;
window.store = store;