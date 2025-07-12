import { createAsyncThunk } from "@reduxjs/toolkit";
import { getArticleById } from "@/api/firestore/getArticlesById";

export const fetchArticleById = createAsyncThunk("article/fetchById", async (id: string, { rejectWithValue }) => {
  try {
    const article = await getArticleById(id);

    if (!article) {
      return rejectWithValue("Статья не найдена");
    }

    return article;
  } catch (error) {
    return rejectWithValue("Ошибка при загрузке статьи");
  }
});
