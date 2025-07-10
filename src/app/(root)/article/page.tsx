"use client";

import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./page.module.scss";
import { Typography } from "@/shared/ui/Typography";
import { memo, useEffect } from "react";
import { getArticleData } from "@/entities/Article/model/services/article";
import { fetchArticles } from "@/entities/Article/model/services/fetchArticles/fetchArticles";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { ArticleBlock } from "@/entities/Article/ui/ArticleBlock/Article";

interface pageProps {
  className?: string;
}

export const ArticlePage = memo(({ className }: pageProps) => {
  const dispatch = useAppDispatch();
  const data = useSelector(getArticleData);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  console.log(data, "data");

  return (
    <div className={classNames(cls.Article, {}, [className])}>
      <Typography title="Article Page" />

      {data?.length ? (
        data.map((article, index) => (
          <ArticleBlock
            key={index}
            title={article.title}
            imageUrl={article.imageUrl}
            description={article.description}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
});

ArticlePage.displayName = "ArticlePage";
export default memo(ArticlePage);
