import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts posts={props.posts.posts} dispatch={props.dispatch} newPostText={props.posts.newPostText}/>
        </div>
    );
}

export default Profile;