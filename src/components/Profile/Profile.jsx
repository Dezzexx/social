import React from 'react';
import AboutProfile from './AboutProfile/AboutProfile';
import MyPost from './MyPosts/MyPost';
import cls from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <AboutProfile />
            <MyPost />
        </div>
    )
}
export default Profile;
