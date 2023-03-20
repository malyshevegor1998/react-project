import s from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = () => {

    return (
            <div className={s.myPosts}>
                my posts
                <div className={s.addPost}>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <div className={s.button}>
                    <button>Add post</button>
                    </div>
                    
                </div>
                <div className={s.posts}>
                    <Post message="Hello everyone!" countLikes="12"/>
                    <Post message="It's my first post!!!" countLikes="9"/>
                </div>
            </div>
    );
}

export default MyPosts;