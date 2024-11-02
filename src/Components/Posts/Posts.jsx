import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import styles from "./Posts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  getDocs,
  query,
  collection,
  orderBy,
  startAfter,
  limit,
} from "@firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const fetchData = async () => {
    if (!hasMore) return;

    const queryRef = collection(db, "publicData");

    // Initial query to get the first 4 elements (replace 4 with your desired initial limit)
    let initialQuery = query(queryRef, orderBy("createdAt", "desc"), limit(4));

    if (lastVisible) {
      // Subsequent queries use startAfter for pagination
      initialQuery = query(
        queryRef,
        orderBy("createdAt", "desc"),
        startAfter(lastVisible),
        limit(4)
      );
    }

    const querySnapshot = await getDocs(initialQuery);

    const newPosts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));

    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    setHasMore(querySnapshot.docs.length === 4); // Check if there are more elements to fetch
  };

  const fetchFirst = async () => {
    const queryRef = collection(db, "publicData");

    // Initial query to get the first 4 elements (replace 4 with your desired initial limit)
    let initialQuery = query(queryRef, orderBy("createdAt", "desc"), limit(4));

    const querySnapshot = await getDocs(initialQuery);

    const newPosts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));

    setPosts(newPosts);
    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
  };

  useEffect(() => {
    fetchFirst();
  }, []);
  return (
    <>
      <h1 className={styles.title}>Elanlar</h1>

      <InfiniteScroll
        dataLength={posts.length}
        next={fetchData}
        hasMore={hasMore}
      >
        <div className={styles.container}>
          {posts.map((item, index) => {
            return (
              <Post
                key={item.id || index}
                id={item.id}
                title={item.data.marka + " " + item.data.model}
                date={item.data.createdAt}
                subtitle={item.data.year + ", " + item.data.hecm + "L"}
                price={item.data.price + "AZN"}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default Posts;
