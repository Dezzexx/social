import React from 'react';
import cls from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={cls.item}>
            <div>
                <img src='http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg'></img>
                <span>
                {props.message} {props.Likes}
                </span>
            </div>
        </div>
    )
}
export default Post;