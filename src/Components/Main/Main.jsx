import { useEffect, useState } from "react";
import Itself from "../Itself/Itself";
import ResponsiveContainer from "../ResponsiveContainer/ResponsiveContainer";
import styles from "./Main.module.css";
import reklam from "../../Images/coffee.png";
import reklamsmall from "../../Images/reklam.jpg";


function Main() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ResponsiveContainer className={styles.mainContainer}>
      <div
        className={styles.adContainer}
        style={{
          backgroundImage: `url(${ screenWidth >= 1024 ? reklam : reklamsmall})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      ></div>
      <div className={styles.mainWebsite}>
        <Itself />
      </div>
      {screenWidth >= 1024 && (
        <div
          className={styles.adContainer}
          style={{
            backgroundImage: `url(${reklam})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
          }}
        ></div>
      )}
    </ResponsiveContainer>
  );
}

export default Main;
