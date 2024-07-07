import React, { useState } from "react";
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

function Itself() {
  return (
    <div className={styles.searchSection}>
      <h1 className={styles.mainTitle}>Avtomibillərin icarəsi</h1>
      <div className={styles.markaBoxContainer}>
        <div className={styles.selectBox}>
          <Selectbox type="marka" options={markaOptions} title="Marka" />
        </div>
        <div className={styles.selectBox}>
          <Selectbox type="model" options={cityOptions} title="Model" />
        </div>
        <div className={styles.selectBox}>
          <Selectbox type="city" options={cityOptions} title="Şəhər" />
        </div>
        <div className={styles.selectBox}>
          <Typeable />
        </div>
        <div className={styles.selectBox}>
          <Selectbox type="ban" options={banOptions} title="Ban növü" />
        </div>
        <div className={styles.selectBox}>
          <Cashtype />
        </div>
        <div className={styles.selectBox}>
          <Selectbox type="color" options={colorOptions} title="Rəng" />
        </div>
        <div className={styles.selectBox}>
          <Selectable />
        </div>
        <div className={styles.selectBox}>
          <SearchButton />
        </div>
      </div>
    </div>
  );
}
export default Itself;
