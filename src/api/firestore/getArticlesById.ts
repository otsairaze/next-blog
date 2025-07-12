import { db } from "@/api/firestore/index.";
import { Article } from "@/entities/Article/model/types/article";
import { collection, query, where, getDocs } from "firebase/firestore";

export const getArticleById = async (id: string): Promise<Article | null> => {
  try {
    const q = query(collection(db, "article"), where("id", "==", String(id)));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0];
      const data = docSnap.data();

      return {
        id: data.id,
        ...data
      } as Article;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
