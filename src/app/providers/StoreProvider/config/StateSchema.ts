import { ArticleDetailsState } from "@/entities/Article/model/types/articleDetailsSchema";
import { ArticleState } from "@/entities/Article/model/types/articleSchema";

export interface StateSchema {
  article: ArticleState;
  articleDetails: ArticleDetailsState;
}

export type StateSchemaKey = keyof StateSchema;
