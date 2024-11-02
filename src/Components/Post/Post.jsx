import React, { memo, useEffect, useState } from "react";
import styles from "./Post.module.css";
import photo from "../../Images/corolla.jpg";
import crown from "../../Images/crown.png";
import diamond from "../../Images/vip.png";
import Heart from "react-animated-heart";
import { Timestamp } from "firebase/firestore";
import { storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";

function Post({ id, paidtype, title, date, subtitle, price }) {
  const [like, setLike] = useState(false);
  const [image, setImage] = useState(null);

  const fetchImage = async () => {
    const url = await getDownloadURL(ref(storage, `images/${id}/0`));
    setImage(url);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  function paidRenderer() {
    switch (paidtype) {
      case "vip":
        return <img src={diamond} alt="load" className={styles.vip} />;
        break;
      case "premium":
        return <img src={crown} alt="load" className={styles.crown} />;
        break;
      case "both":
        return (
          <>
            <img src={diamond} alt="load" className={styles.vip} />{" "}
            <img
              src={crown}
              alt="load"
              className={styles.crown}
              style={{ marginLeft: "4px" }}
            />
          </>
        );
        break;
      default:
        return <></>;
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

  const firebaseTimestampToDate = (timestamp) => {
    const milliseconds =
      timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000;
    return new Date(milliseconds);
  };

  // Helper function to format time
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  // Helper function to format month and day
  const formatMonthDay = (date) => {
    const options = { month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const formatTimestamp = (timestamp) => {
    const postDate = firebaseTimestampToDate(timestamp);
    const now = new Date();

    const timeDiff = now - postDate; // Time difference in milliseconds
    const oneMinute = 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneYear = 365 * 24 * 60 * 60 * 1000;

    // Get the date components
    const today = new Date(now.setHours(0, 0, 0, 0));
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const postDateWithoutTime = new Date(postDate.setHours(0, 0, 0, 0));

    // Calculate the difference in years
    const yearDiff = now.getFullYear() - postDate.getFullYear();
    const isAnniversary =
      now.getMonth() === postDate.getMonth() &&
      now.getDate() === postDate.getDate();

    // If the post is less than 1 minute ago
    if (timeDiff < oneMinute) {
      return "İndi";
    }

    // If the post is less than 1 hour ago
    if (timeDiff < oneHour) {
      const minutesAgo = Math.floor(timeDiff / oneMinute);
      return `${minutesAgo} dəqiqə qabaq`;
    }

    // If the post is today
    if (postDateWithoutTime.getTime() === today.getTime()) {
      return `Bugün, ${formatTime(
        new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000)
      )}`;
    }

    // If the post is yesterday
    if (postDateWithoutTime.getTime() === yesterday.getTime()) {
      return `Dünən, ${formatTime(
        new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000)
      )}`;
    }

    // If the post is within the last year but not today or yesterday
    if (timeDiff < oneYear) {
      return `${formatMonthDay(postDate)}, ${formatTime(
        new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000)
      )}`;
    }

    // If the post is over a year ago
    if (yearDiff > 1) {
      return `${yearDiff} il qabaq`;
    }

    // For any other day
    const options = { weekday: "long" };
    const weekday = new Intl.DateTimeFormat("en-US", options).format(postDate);
    return `${weekday}, at ${formatTime(
      new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000)
    )}`;
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.paidContainer}
        style={{ width: paidContainerWidth() }}
      >
        {paidRenderer()}
      </div>
      <Heart
        styles={{
          position: "absolute",
          marginLeft: "-25px",
          marginTop: "-25px",
          opacity: like ? "1" : "0.5",
        }}
        isClick={like}
        onClick={() => setLike(!like)}
      />

      <div className={styles.salon}>
        <h1 className={styles.salonText}>Salon</h1>
      </div>
      <img src={image} alt="Load" className={styles.cardImage} />

      <h1 className={styles.price}>{price}</h1>
      <h1 className={styles.title}>{title}</h1>
      <h1 className={styles.info}>{subtitle}</h1>
      <h1 className={styles.time}>{formatTimestamp(date)}</h1>
    </div>
  );
}

export default React.memo(Post);
