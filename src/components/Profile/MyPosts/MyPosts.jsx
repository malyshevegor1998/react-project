import s from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = (props) => {

    let postsElements = props.posts.map((element) => <Post message={element.message} countLikes={element.countLikes} />);

    return (
        <div className={s.myPosts}>
            my posts
            <div className={s.addPost}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div className={s.button}>
                    <button onClick={ () => {alert("sex");}}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;