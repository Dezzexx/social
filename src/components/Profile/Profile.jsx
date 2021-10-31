import React from 'react';
import MyPost from './MyPosts/MyPost';
import cls from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://st.depositphotos.com/1755257/1283/v/600/depositphotos_12837535-stock-illustration-social-network-background-of-the.jpg'></img>
            </div>
            <div>
                ava+desc
            </div>
            
            <MyPost />
        </div>
    )
}
export default Profile;
