import { Article } from "./article";

export interface ArticleState {
  isLoading: boolean;
  error?: string;
  data?: Article[];
}
