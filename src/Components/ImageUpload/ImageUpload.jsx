import React, { useState } from "react";
import styles from "./ImageUpload.module.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useDispatch, useSelector } from "react-redux";
import { changeImage } from "../../features/post";
import ImageDisplay from "../ImageDisplay/ImageDisplay";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(0);
  const post = useSelector((state) => state.post.value);

  const handleChange = (event) => {
    
    if (event.target.files[0] != undefined) {
      const url = URL.createObjectURL(event.target.files[0]);
      dispatch(changeImage(url));
    }
    event.target.value = ""
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.headerText}>Şəkillər</h1>
        <h2 className={styles.subheader}>
          Minimum 8 şəkil!
          <br />
          Ön, qabaq, salon şəkilləri mövcüd olmalıdılar!
        </h2>
      </div>
      <div className={styles.container}>
        <div className={styles.imageUpload}>
          <input
            style={{ display: "none" }}
            id="fileInput"
            type="file"
            onChange={handleChange}
          />
          <label for="fileInput" className={styles.labelContainer}>
            <div className={styles.subcontainer}>
              <CameraAltIcon style={{ color: "#008cff", fontSize: "65px" }} />
              <h1 className={styles.photoText}>Şəkil əlavə et</h1>
            </div>
          </label>
        </div>
        {post.postimages.map((key, index) => {
          return <ImageDisplay index={index} image={key} key={index} />;
        })}
      </div>
    </>
  );
}

export default ImageUpload;
