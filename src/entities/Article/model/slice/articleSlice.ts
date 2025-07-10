import { createSlice } from "@reduxjs/toolkit";

import { fetchArticles } from "../services/fetchArticles/fetchArticles";
import { ArticleState } from "../types/articleDetailsSchema";

const initialState: ArticleState = {
  isLoading: false
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticles.rejected, (state) => {
        state.isLoading = false;
        state.error = "Ошибка при загрузке статей";
      });
  }
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
