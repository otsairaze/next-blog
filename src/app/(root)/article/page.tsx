"use client";

import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./page.module.scss";
import { Typography } from "@/shared/ui/Typography";
import { memo, useEffect, useState } from "react";
import {
  getArticleData,
  getArticleError,
  getArticleIsLoading
} from "@/entities/Article/model/selectors/getArticle/article";
import { fetchArticles } from "@/entities/Article/model/services/fetchArticles/fetchArticles";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { ArticleBlock } from "@/entities/Article/ui/ArticleBlock/Article";
import { Modal } from "@/shared/ui/Modal";

interface pageProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ArticlePage = memo(({ className, isOpen, onClose }: pageProps) => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const data = useSelector(getArticleData);
  const error = useSelector(getArticleError);
  const isLoading = useSelector(getArticleIsLoading);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div className={classNames(cls.Article, {}, [className])}>
      <Typography title="Article Page" />

      <button onClick={() => setOpen(true)}>Создать статью</button>

      {open && <Modal lazy isOpen={isOpen} onClose={onClose} />}

      {data?.length ? (
        data.map((article, index) => (
          <ArticleBlock
            id={article.id}
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
