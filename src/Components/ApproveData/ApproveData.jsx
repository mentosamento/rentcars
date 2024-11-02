import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db, storage } from "../../firebase";
import { deleteObject, getDownloadURL, listAll, ref } from "firebase/storage";
import styles from "./ApproveData.module.css";

function ApproveData(data, id) {
  const [imgUrl, setImgUrl] = useState([]);
  const [photo, setPhoto] = useState(0);
  function Approve() {
    const approveRef = doc(db, "approve", data.id);
    const docRef = doc(db, "publicData", data.id);
    setDoc(docRef, data.data).then(() => console.log("data approved"));
    updateDoc(docRef, { createdAt: serverTimestamp() });
    deleteDoc(approveRef);
  }

  function Decline() {
    deleteDoc(doc(db, "approve", data.id));
    deleteObject(ref(storage, `images/${data.id}/0`));
  }

  const fetchImages = async () => {
    if (!data.id) return; // Handle potential undefined data.id

    const imagesRef = ref(storage, `images/${data.id}`);
    const listResult = await listAll(imagesRef);

    const imageUrls = await Promise.all(
      listResult.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return url;
      })
    );

    setImgUrl(imageUrls);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className={styles.card}>
      <p className={styles.id}>{data.id}</p>
      <p className={styles.marka}>
        <b>Marka: </b>
        {data.data.marka}
      </p>
      <p className={styles.model}>
        <b>Model: </b>
        {data.data.model}
      </p>
      <p className={styles.model}>
        <b>Şəhər: </b>
        {data.data.city}
      </p>
      <p className={styles.model}>
        <b>Il: </b>
        {data.data.year}
      </p>
      <p className={styles.model}>
        <b>Ban: </b>
        {data.data.ban}
      </p>
      <p className={styles.model}>
        <b>Qiymət: </b>
        {data.data.price}AZN
      </p>
      <p className={styles.model}>
        <b>Rəng: </b>
        {data.data.color}
      </p>
      <p className={styles.model}>
        <b>Yanacaq: </b>
        {data.data.yanacaq}
      </p>
      <p className={styles.model}>
        <b>Həcm: </b>
        {data.data.hecm}L
      </p>
      <p className={styles.model}>
        <b>Yürüş: </b>
        {data.data.mileage} km
      </p>
      <p className={styles.model}>
        <b>Ötürücü: </b>
        {data.data.oturucu}
      </p>
      <p className={styles.model}>
        <b>Sürətlər qutusu: </b>
        {data.data.suretqutu}
      </p>
      <p className={styles.model}>
        <b>Mühərrikin gücü: </b>
        {data.data.atgucu} a.g
      </p>
      <p className={styles.model}>
        <b>Yerlərin sayı: </b>
        {data.data.yer}
      </p>
      <div class={styles.description}>
        <p className={styles.desc}>
          <b>Məlumat:</b>
          <br />
          {data.data.description}
        </p>
        <br />
        <p>
          <b>Ad:</b>
          <br />
          {data.data.name}
        </p>
        <br />
        <p>
          <b>Telefon:</b>
          <br />
          {data.data.phone}
        </p>
        <br />
        <p>
          <b>Elekton poçt:</b>
          <br />
          {data.data.mail}
        </p>
      </div>
      <div className={styles.photo}>
        <img src={imgUrl[photo]} alt="loading" height="150px" width="auto" />
        <br />
        <button
          style={{
            backgroundColor: "#7a7a7a",
            color: "#fff",
            border: "0",
            padding: "10px 20px",
            borderRadius: "8px",
            marginLeft: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            if (photo - 1 >= 0) {
              setPhoto((prev) => prev - 1);
            }
          }}
        >
          &lt;=
        </button>
        <button
          style={{
            backgroundColor: "#7a7a7a",
            color: "#fff",
            border: "0",
            padding: "10px 20px",
            borderRadius: "8px",
            marginLeft: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            if (photo + 1 < imgUrl.length) {
              setPhoto((prev) => prev + 1);
            }
          }}
        >
          =&gt;
        </button>
      </div>

      <button
        onClick={Decline}
        style={{
          backgroundColor: "#e61809",
          color: "#fff",
          border: "0",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Remove
      </button>
      <button
        onClick={() => {
          Approve();
          window.location.reload();
        }}
        style={{
          backgroundColor: "#6ad40d",
          color: "#fff",
          border: "0",
          padding: "10px 20px",
          borderRadius: "8px",
          marginLeft: "5px",
          cursor: "pointer",
        }}
      >
        Approve
      </button>
    </div>
  );
}

export default ApproveData;
