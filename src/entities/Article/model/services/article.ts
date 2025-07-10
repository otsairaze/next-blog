import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getArticleData = (state: StateSchema) => state.article?.data;
export const getArticleIsLoading = (state: StateSchema) => state.article?.error;
export const getArticleError = (state: StateSchema) => state.article?.isLoading;
