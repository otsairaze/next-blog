import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getArticleByIdData = (state: StateSchema) => state.articleDetails?.data;
export const getArticleByIdIsLoading = (state: StateSchema) => state.articleDetails?.isLoading;
export const getArticleByIdError = (state: StateSchema) => state.articleDetails?.error;
