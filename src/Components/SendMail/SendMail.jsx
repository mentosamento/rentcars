import Axios from "axios";
import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import styles from "./SendMail.module.css";
import { useSelector } from "react-redux";

const sendEmailURL = `https://us-central1-rentmotor-az.cloudfunctions.net/sendEmail`;

function SendMail({ allowScroll }) {
  const post = useSelector((state) => state.post.value);
  const [recipient, setRecipient] = useState(post.mail);
  const [otp, setOtp] = useState("");
  const [ma, setMa] = useState("");
  const [corr, setCorr] = useState(false);
  const [modal, setModal] = useState(true);

  useEffect(() => {
    if (!allowScroll) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
    setRecipient(post.mail);
  }, [allowScroll]);

  const handleSet = () => {
    if (
      CryptoJS.AES.decrypt(ma, "quick, cut the blue wire, morty").toString(
        CryptoJS.enc.Utf8
      ) == otp
    ) {
      setCorr(true);
    } else {
      setCorr(false);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const response = await Axios.get(sendEmailURL, {
      params: {
        recipient,
      },
    });
    console.log(response.data);

    setMa(
      CryptoJS.AES.encrypt(
        response.data.otp.toString(),
        "quick, cut the blue wire, morty"
      ).toString()
    );
  };

  return (
    <div className={styles.background}>
      <div
        className={styles.container}
        style={{ visibility: post.modal ? "visible" : "hidden" }}
      >
        <input
          onChange={(e) => setRecipient(e.target.value)}
          value={recipient}
          placeholder="Recipient"
          className=""
        />

        <button onClick={sendEmail}>Send</button>
        <input
          onChange={(e) => setOtp(e.target.value)}
          value={otp}
          placeholder="OTP"
        />

        <button onClick={handleSet}>Validate</button>

        {corr ? <h1>Correct</h1> : <h1>Wait</h1>}
      </div>
    </div>
  );
}

export default SendMail;
