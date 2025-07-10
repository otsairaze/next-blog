import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { articleReducer } from "@/entities/Article/model/slice/articleSlice";

export function createReduxStore() {
  return configureStore<StateSchema>({
    reducer: {
      article: articleReducer
    }
  });
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
