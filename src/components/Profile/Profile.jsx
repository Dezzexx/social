import React from 'react';
import AboutProfile from './AboutProfile/AboutProfile';
import MyPost from './MyPosts/MyPost';
import cls from './Profile.module.css';

const Profile = (props) => {
    return (
        <div>
            <AboutProfile />
            <MyPost Posts={props.state.Posts} />
        </div>
    )
}
export default Profile;
