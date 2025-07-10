import { ArticleState } from "@/entities/Article/model/types/articleDetailsSchema";

export interface StateSchema {
  article: ArticleState;
}

export type StateSchemaKey = keyof StateSchema;
