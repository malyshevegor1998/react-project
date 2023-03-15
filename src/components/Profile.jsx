import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg" alt="" />
            </div>
            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;