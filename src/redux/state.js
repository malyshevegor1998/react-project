import { rerenderEntireTree } from "../render";

let postId = 7;

let state = {
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
};

export let addPost = () => {
    let newPost = {id: postId, message: `${state.profilePage.newPostText}`, countLikes: 0};
    state.profilePage.posts.push(newPost);
    console.log(newPost)
    addNewPostText("");
    rerenderEntireTree(state);
    postId++;
};

export let addNewPostText = (postText) => {
    state.profilePage.newPostText = postText;
    console.log(state.profilePage.newPostText);
    rerenderEntireTree(state);
}

export default state;