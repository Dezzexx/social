import React from 'react';
import cls from "./MyPost.module.css";
import Post from "./Posts/Post";

const MyPost = (props) => {

    let blockPosts = props.Posts.map(p => < Post message={p.message} likes={p.likes} />);
    let postelement = React.createRef();
    let sendpost = () => {
        let text = postelement.current.value;
        alert(text);
    } 
    return (
        <div>
            <div className={cls.posts}>
                Mypost
            </div>
            <div>
                <div>
                    <textarea ref={postelement}></textarea>
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