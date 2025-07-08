import { collection, getDocs } from "firebase/firestore";

import { db } from "./index.";

export const getArticles = async () => {
  const snapshot = await getDocs(collection(db, "articles"));
  const articles = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  console.log("🔥 Articles from Firestore:", articles);
  return articles;
};
