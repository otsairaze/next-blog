import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "../../types/article";
import { getArticles } from "@/api/firestore/getArticles";

export const fetchArticles = createAsyncThunk<Article[]>("article/fetchArticles", async () => {
  return await getArticles();
});
