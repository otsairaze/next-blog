import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { articleReducer } from "@/entities/Article/model/slice/articleSlice";
import { articleDetailsReducer } from "@/entities/Article/model/slice/articleDetailsSlice";

export function createReduxStore() {
  return configureStore<StateSchema>({
    reducer: {
      article: articleReducer,
      articleDetails: articleDetailsReducer
    }
  });
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
