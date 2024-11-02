import React, { useEffect, useState } from "react";
import styles from "./ImageDisplay.module.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useDispatch, useSelector } from "react-redux";
import { changePosition, removeImage } from "../../features/post";

function ImageDisplay({ image, index }) {
  const post = useSelector((state) => state.post.value);
  const dispatch = useDispatch();
  const frontHandler = () => {
    const pos = post.postimages.indexOf(image);
    dispatch(changePosition({ oldIndex: pos, newIndex: pos + 1 }));
  };
  const backHandler = () => {
    const pos = post.postimages.indexOf(image);
    dispatch(changePosition({ oldIndex: pos, newIndex: pos - 1 }));
  };
  const removeHandler = () => {
    dispatch(removeImage(image));
  };
  return (
    <div
      className={styles.imageContainer}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div onClick={removeHandler} className={styles.testbutton}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
      </div>
      <div className={styles.lowerdiv}>
        <div onClick={backHandler} className={styles.testbutton1}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
          </svg>
        </div>
        <div onClick={frontHandler} className={styles.testbutton2}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ImageDisplay;
