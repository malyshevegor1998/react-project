import s from './Post.module.css'

const Post = (props) => {   
    return (
        <div className={s.item}>
            <img src="https://cdn-icons-png.flaticon.com/512/236/236832.png" alt="" />
            {props.message} 
            <div>
                <span>{props.countLikes} likes</span>
            </div>
        </div>
    );
}

export default Post;