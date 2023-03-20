import s from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = () => {

    let postsData = [
        { id: 1, message: "Hello everyone!", countLikes: 12},
        { id: 2, message: "It's my first post!!!", countLikes: 0},
        { id: 3, message: "I'm very cool!", countLikes: 1},
    ];

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
                    <Post message={postsData[0].message} countLikes={postsData[0].countLikes}/>
                    <Post message={postsData[1].message} countLikes={postsData[1].countLikes}/>
                    <Post message={postsData[2].message} countLikes={postsData[2].countLikes}/>
                </div>
            </div>
    );
}

export default MyPosts;