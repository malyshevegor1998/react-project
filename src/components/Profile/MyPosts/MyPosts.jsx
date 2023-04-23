import { createRef } from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = (props) => {
    debugger;
    let postsElements = props.posts.map((element) => <Post message={element.message} countLikes={element.countLikes} />);
    let textareaElement = createRef();

    const addPostOnClick = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    const onPostChange = () => {
        let action = {
            type: 'ADD-NEW-POST-TEXT',
            postText: textareaElement.current.value
        };
        props.dispatch(action);
        // props.addNewPostText(textareaElement.current.value);
    };

    return (
        <div className={s.myPosts}>
            my posts
            <div className={s.addPost}>
                <textarea onChange={onPostChange} ref={textareaElement} name="" id="" cols="30" rows="10" value={props.newPostText}></textarea>
                <p>{props.newPostText}</p>
                <div className={s.button}>
                    <button onClick={addPostOnClick}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;