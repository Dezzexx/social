import React from 'react';
import cls from "./MyPost.module.css";
import Post from "./Posts/Post";
import { Posts } from '../../..';

const MyPost = (props) => {


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