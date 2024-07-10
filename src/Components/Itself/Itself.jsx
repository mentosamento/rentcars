import React, { useEffect, useState } from "react";
import styles from "./Itself.module.css";
import Selectbox from "../Selectbox/Selectbox";
import Typeable from "../Typeable/Typeable";
import Cashtype from "../Cashtype/Cashtype";
import Selectable from "../Selectable/Selectable";
import SearchButton from "../SearchButton/SearchButton";
import {
  markaOptions,
  colorOptions,
  cityOptions,
  banOptions,
} from "../../utils/Data";
import reklam from "../../Images/reklam.jpg";
import Posts from "../Posts/Posts";


function Itself() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <React.Fragment>
    <div className={styles.searchSection}>
      <h1 className={styles.mainTitle}>Avtomibillərin icarəsi</h1>
      <div className={styles.markaBoxContainer}>
        <div className={styles.selectBox}>
          <Selectbox type="marka" options={markaOptions} title="Marka" />
        </div>
        <div className={styles.selectBox}>
          <Selectbox type="model" options={cityOptions} title="Model" />
        </div>
        {screenWidth >= 1024 && (
          <div className={styles.selectBox}>
            <Selectbox type="city" options={cityOptions} title="Şəhər" />
          </div>
        )}
        
        <div className={styles.selectBox}>
          <Typeable />
        </div>
        {screenWidth >= 1024 && (
          <div className={styles.selectBox}>
            <Selectbox type="ban" options={banOptions} title="Ban növü" />
          </div>
        )}
        


        <div className={styles.selectBox}>
          <Cashtype />
        </div>

        {screenWidth >= 1024 && (
          <div className={styles.selectBox}>
            <Selectbox type="color" options={colorOptions} title="Rəng" />
          </div>
        )}

        

        {screenWidth >= 1024 && (
          <div className={styles.selectBox}>
          <Selectable />
        </div>
        )}


        
        <div className={styles.selectBox}>
          <SearchButton />
        </div>
      </div>
      
    </div>
    {screenWidth < 1024 && (
                  <div className={styles.adContainer} style={{backgroundImage: `url(${reklam})`, backgroundRepeat: 'no-repeat', backgroundSize: "100%"}}></div>

        )}
    <Posts />
    </React.Fragment>
    
  );
}
export default Itself;
