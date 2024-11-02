import React, { useEffect, useState } from "react";
import ApproveData from "../ApproveData/ApproveData";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function CheckCard() {
  const [unchecked, setUnchecked] = useState([]);
  async function recieveDocs() {
    const querySnapshot = await getDocs(collection(db, "approve"));

    const newPosts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));

    setUnchecked(newPosts);
  }

  useEffect(() => {
    recieveDocs();
  }, []);

  return (
    <div>
      {unchecked.map((value, index) => {
        return <ApproveData data={value.data} id={value.id} />;
      })}
    </div>
  );
}

export default CheckCard;
