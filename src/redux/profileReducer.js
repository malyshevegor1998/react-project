const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = { id: state.postId, message: `${state.newPostText}`, countLikes: 0 };
            state.posts.push(newPost);
            state.newPostText = "";
            state.postId++;
            return state;
        }
        case ADD_NEW_POST_TEXT: {
            state.newPostText = action.postText;
            return state;
        }
        default: {
            return state;
        }
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

export default profileReducer;