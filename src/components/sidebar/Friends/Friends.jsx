import React from 'react';
import cls from "./Friends.module.css";

const Friends = (props) => {
    return (
        <div className={cls.item}>
            <div>
                {props.name}
            </div>
        </div>
    )
}
export default Friends;