import {createRef} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = (props) => {

    let postsElements = props.posts.posts.map((element) => <Post message={element.message} countLikes={element.countLikes} />);
    let textareaElement = createRef();

    const addPostOnClick = () => {
        props.addPost();
    }

    const onPostChange = () => {
        props.addNewPostText(textareaElement.current.value);
    };

    return (
        <div className={s.myPosts}>
            my posts
            <div className={s.addPost}>
                <textarea onChange={onPostChange} ref={textareaElement} name="" id="" cols="30" rows="10" value={props.posts.newPostText}></textarea>
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