import React from 'react';
import cls from "./MyPost.module.css";
import Post from "./Posts/Post"

const MyPost = () => {
    return (
        <div>
            <div>
                Mypost
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div className={cls.posts}>
                <Post message='Hello, good bless to you. ' Likes='likes 15' />
                <Post message='Hi from Canada. ' Likes='likes 20'/>
            </div>
        </div>
    )
}
export default MyPost;