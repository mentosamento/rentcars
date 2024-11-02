import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import InputMui from "../InputMui/InputMui";
import { storage, db } from "../../firebase";
import { v4 } from "uuid";
import { ref, uploadBytes } from "@firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { doc, setDoc, serverTimestamp } from "@firebase/firestore";
import SendMail from "../SendMail/SendMail";
import { changeModal } from "../../features/post";

const Contact = () => {
  const post = useSelector((state) => state.post.value);
  const directory = v4();
  const dispatch = useDispatch();

  const upload = async (value, index) => {
    const response = await fetch(value);
    const blob = await response.blob();

    const storageRef = ref(storage, `images/${directory}/${index}`);
    await uploadBytes(storageRef, blob);
  };
  const uploadData = async () => {
    const promises = post.postimages.map((value, index) =>
      upload(value, index)
    );
    await Promise.all(promises);

    const docref = doc(db, "approve", directory);
    setDoc(docref, {
      createdAt: serverTimestamp(),
      phone: post.phone,
      name: post.name,
      mail: post.mail,
      additional: post.additional,
      approved: false,
      marka: post.marka,
      model: post.model,
      city: post.city,
      year: post.year,
      ban: post.ban,
      price: post.price,
      mileage: post.mileage,
      color: post.color,
      yanacaq: post.yanacaq,
      oturucu: post.oturucu,
      suretqutu: post.suretqutu,
      hecm: post.hecm,
      atgucu: post.atgucu,
      yer: post.yer,
      vinkod: post.vinkod,
      description: post.description,
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Əlaqə</h1>
      <div className={styles.inputContainer}>
        <InputMui title="Ad" type="str" />
      </div>
      <div className={styles.inputContainer}>
        <InputMui title="Elektron poçt" type="str" />
      </div>
      <div className={styles.inputContainer1}>
        <InputMui title="Telefon  ( +994 12 345 67 89 )" type="num" />
      </div>
      <div className={styles.cont}>
        <a href="#" className={styles.link}>
          Siz "Elanı qoy" düyməsinə basanda bizim qaydalara razı olursuz
        </a>
        <div className={styles.button} onClick={uploadData}>
          <h1 className={styles.btext}>Elanı qoy</h1>
        </div>
        <button onClick={() => dispatch(changeModal())}>Show Modal</button>
        <SendMail allowScroll={post.modal} />
      </div>
    </div>
  );
};

export default Contact;
