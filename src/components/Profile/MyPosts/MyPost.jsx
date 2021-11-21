import React from 'react';
import cls from "./MyPost.module.css";
import Post from "./Posts/Post";

const MyPost = (props) => {

    let blockPosts = props.Posts.map(p => < Post message={p.message} likes={'Like: ' + p.likes} />);
    let postElement = React.createRef();
    let sendpost = () => {
        props.addPost();
    }
    let onPostchange = () => {
        let text = postElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div>
            <div className={cls.posts}>
                Mypost
            </div>
            <div>
                <div>
                    <textarea onChange={onPostchange} ref={postElement}
                    value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={sendpost}>Send</button>
                </div>
            </div>
            <div className={cls.BlockPosts}>
                {blockPosts}
            </div>
        </div >
    )
}
export default MyPost;