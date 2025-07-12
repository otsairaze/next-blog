import { createSlice } from "@reduxjs/toolkit";

import { fetchArticleById } from "../services/fetchArticlesById/fetchArticlesById";
import { ArticleDetailsState } from "../types/articleDetailsSchema";

const initialState: ArticleDetailsState = {
  isLoading: false
};

export const articleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state) => {
        state.isLoading = false;
        state.error = "Ошибка при загрузке статей";
      });
  }
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
