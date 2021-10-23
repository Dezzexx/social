import React, { Component } from 'react';
import cls from "./Profile.module.css";

const Content = () => {
    return (
        <content className={cls.Content}>
            <div>
                <img src='https://st.depositphotos.com/1755257/1283/v/600/depositphotos_12837535-stock-illustration-social-network-background-of-the.jpg'></img>
            </div>
            <div>
                <img src='http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg'></img>
            </div>
            <div className={cls.posts}>
                wall my post
                <div className={cls.item}>
                    new post
                </div>
                <div className={cls.item}>
                    post 1
                </div>
                <div className={cls.item}>
                    post 2
                </div>
            </div>
        </content>
    )
}
export default Content;
