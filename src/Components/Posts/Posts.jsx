import React from 'react';
import Post from '../Post/Post';
import styles from "./Posts.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


function Posts() {
    return (
        <>
            <h1 className={styles.title}>Elanlar</h1>
            <div className={styles.centerer}>
                <div className={styles.container}>
                    <Post paidtype="both"/>
                    <Post paidtype="vip"/>
                    <Post paidtype="premium"/>
                    <Post paidtype="vip"/>
                    <Post paidtype="none"/>
                    <Post paidtype="both"/>
                    <Post paidtype="none"/>
                    <Post paidtype="premium"/>
                    
                </div>
            </div>
        </>
        
        
    );
};

export default Posts;