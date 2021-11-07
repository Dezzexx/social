import React from 'react';
import cls from "./MyPost.module.css";
import Post from "./Posts/Post"

const MyPost = () => {

    let Posts = [
        { message: 'Hello, good bless to you', likes: 'like: 15' },
        { message: 'Hi from Canada', likes: 'like: 20' },
    ]

    let blockPosts = Posts.map(p => < Post message={p.message} likes={p.likes} />);
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
                {blockPosts}
            </div>
        </div >
    )
}
export default MyPost;