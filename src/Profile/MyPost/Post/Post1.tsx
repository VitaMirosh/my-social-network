import React from "react";
import s from './Post.module.css';

export type Post1Type = {
    message: string;
    likesCount: number
}

const Post1 = (props: Post1Type) => {
    return (
        <div>
            <img className={s.small}
                 src='https://kartinkin.net/uploads/posts/2022-03/1646460192_5-kartinkin-net-p-rozovie-estetichnie-kartinki-5.jpg'/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
export default Post1;