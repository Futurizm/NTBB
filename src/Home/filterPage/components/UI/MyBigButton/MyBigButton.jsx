import React, {useState} from 'react';
import cl from "./MyBigButton.module.css"
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setActiveCategory} from "../../../../../actions.js";

const MyBigButton = ({ onSelectCategory, handleFilterPageClose, categoryId,onLoadPosts, children, ...props }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (categoryId) {
            if (onSelectCategory) {
                onSelectCategory({ categoryId });
            }
            handleFilterPageClose();
            navigate(`/page2/${categoryId}`);
            if (onLoadPosts) {
                onLoadPosts(categoryId);
            }
        } else {
            console.error('Invalid categoryId');
        }
    };

    return (
            <a className={cl.ntclown} href={`http://localhost:5173/page2/${categoryId}`} onClick={() => handleButtonClick()}>
                <button {...props} className={cl.myBtn}>
                    {children}
                </button>
            </a>
);
};


export default MyBigButton;