import React from 'react';
import cls from "./MyPost.module.css";
import Post from "./Posts/Post"

const MyPost = () => {
    return (
        <div>
            <div className={cls.posts}>
                Mypost
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
            <div className={cls.BlockPosts}>
                <Post message='Hello, good bless to you. ' likes='likes 15' />
                <Post message='Hi from Canada. ' likes='likes 20' />
            </div>
        </div >
    )
}
export default MyPost;