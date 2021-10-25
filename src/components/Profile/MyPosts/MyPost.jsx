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
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}
export default MyPost;