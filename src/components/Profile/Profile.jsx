import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => {
    return (
        <div>
            <div className={s.backgroundUser}>
                <img src="https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg" alt="" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;