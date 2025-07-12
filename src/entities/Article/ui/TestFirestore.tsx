"use client";
import { getArticleById } from "@/api/firestore/getArticlesById";
import { useEffect } from "react";

export const TestFirestore = () => {
  useEffect(() => {
    const test = async () => {
      const result = await getArticleById("1");
      console.log("Test result:", result);
    };
    test();
  }, []);

  return <div>Тестовый Firestore-запрос — смотри в консоль 🔍</div>;
};
