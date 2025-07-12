import { db } from "@/api/firestore/index.";
import { Article } from "@/entities/Article/model/types/article";
import { collection, getDocs } from "firebase/firestore";

export const getArticles = async (): Promise<Article[]> => {
  try {
    const snapshot = await getDocs(collection(db, "article"));
    const articles = snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data()
        }) as Article
    );

    return articles;
  } catch (error) {
    console.error("error", error);
    return [];
  }
};
