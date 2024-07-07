import Itself from "../Itself/Itself";
import ResponsiveContainer from "../ResponsiveContainer/ResponsiveContainer";
import styles from "./Main.module.css";

function Main() {
  return (
      <ResponsiveContainer className={styles.mainContainer}>
        <div className={styles.adContainer}></div>
        <div className={styles.mainWebsite}>
          <Itself />
        </div>
        <div className={styles.adContainer}></div>
      </ResponsiveContainer>
  );
}

export default Main;
