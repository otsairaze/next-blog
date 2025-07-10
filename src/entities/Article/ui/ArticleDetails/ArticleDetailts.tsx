import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleDetailts.module.scss";

interface ArticleDetailtsProps {
  className?: string;
}

export const ArticleDetails = ({ className }: ArticleDetailtsProps) => {
  return <div className={classNames(cls.ArticleDetailts, {}, [className])}></div>;
};
