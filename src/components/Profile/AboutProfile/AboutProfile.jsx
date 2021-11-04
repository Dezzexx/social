import React from "react";
import cls from "./AboutProfile.module.css";


const AboutProfile = () => {
    return (
        <div>
            <div>
                <img src='https://st.depositphotos.com/1755257/1283/v/600/depositphotos_12837535-stock-illustration-social-network-background-of-the.jpg'></img>
            </div>
            <div className={cls.description}>
                ava+desc
            </div>
        </div>
    )
}
export default AboutProfile;