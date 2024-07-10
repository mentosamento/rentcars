import React, { useState } from 'react';
import styles from  "./Post.module.css"
import photo from "../../Images/corolla.jpg";
import crown from "../../Images/crown.png";
import diamond from "../../Images/vip.png";
import Heart from 'react-animated-heart';


function Post({paidtype}) {
    const [like, setLike] = useState(false);
    const notFilled = (
        <>
        <div style={{position: "absolute"}}>
            <svg xmlns="http://www.w3.org/2000/svg" opacity="0.8" width="30" height="25" fill="#737373" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
            </svg>
            
        </div>

        <div style={{position: "absolute"}}>
            <svg xmlns="http://www.w3.org/2000/svg" opacity="0.5" width="30" height="25" fill="#000" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
            </svg>

        </div>
        </>
        
    );

    const filled = (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="#db1212" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
        </svg>

        
    );

    function paidRenderer() {
        switch (paidtype) {
            case "vip":
                return (<img src={diamond} alt='load' className={styles.vip}  />);
                break;
            case "premium":
                return (<img src={crown} alt='load' className={styles.crown} />);
                break;
            case "both":
                return (<><img src={diamond} alt='load' className={styles.vip} /> <img src={crown} alt='load' className={styles.crown} style={{marginLeft: "4px"}} /></>);
                break;
            default: 
                return (<></>);
        }
    }

    function paidContainerWidth() {
        switch (paidtype) {
            case "vip":
                return "28px";
                break;
            case "premium":
                return "28px";
                break;
            case "both":
                return "52px";
                break;
            default: 
                return "0px";
        }
    }


    return (
        <div className={styles.card}>

            <div className={styles.paidContainer} style={{width: paidContainerWidth()}}>
                {paidRenderer()}
            </div>
            <Heart styles={{position: "absolute", marginLeft: "-25px", marginTop: "-25px", opacity: like ? "1" : "0.5"}} isClick={like} onClick={() => setLike(!like)}/>
            
            
            <div className={styles.salon}>
                <h1 className={styles.salonText}>Salon</h1>
            </div>
            <img src={photo} className={styles.cardImage}/>

            <h1 className={styles.price}>60AZN</h1>
            <h1 className={styles.title}>Toyota Corolla</h1>
            <h1 className={styles.info}>2015, 2.2L</h1>
            <h1 className={styles.time}>Bakı, bugün 10:23</h1>

        </div>
    );
};

export default Post;