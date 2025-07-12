"use client";

import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleDetailts.module.scss";
import { Typography, TypographyColor } from "@/shared/ui/Typography";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchArticleById } from "../../model/services/fetchArticlesById/fetchArticlesById";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import {
  getArticleByIdData,
  getArticleByIdError,
  getArticleByIdIsLoading
} from "../../model/selectors/getArticleById/getArticleById";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

export const ArticleDetails = (props: ArticleDetailsProps) => {
  const { className, id } = props;
  const dispatch = useAppDispatch();

  const article = useSelector(getArticleByIdData);
  const error = useSelector(getArticleByIdError);
  const isLoading = useSelector(getArticleByIdIsLoading);

  useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id));
    }
  }, [id, dispatch]);

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        <Skeleton width="100%" height={40} />
        <Skeleton width="100%" height={200} className={cls.skeleton} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        <Typography color={TypographyColor.ERROR} text="Произошла ошибка при загрузке статьи" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        <Typography text="Article not found" />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleDetails, {}, [className])}>
      <Typography title={article.title} />
      {article.imageUrl && <img src={article.imageUrl} alt={article.title} className={cls.image} />}
      <Typography text={article.description} className={cls.description} />
    </div>
  );
};
