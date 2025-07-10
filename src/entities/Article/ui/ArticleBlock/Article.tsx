import cls from "./Article.module.scss";
import { Article } from "../../model/types/article";
import { Button, ButtonVariant } from "@/shared/ui/Button";
import { truncateText } from "@/shared/utils/truncateText";

interface ArticleProps extends Article {
  className?: string;
}

export const ArticleBlock = (props: ArticleProps) => {
  const { description, imageUrl, title } = props;

  const shortDescription = truncateText(description, 150);

  return (
    <div className={cls.Article}>
      <div className={cls.titleBlock}>
        <h1>{title}</h1>
        <img alt="article" src={imageUrl} width={100} height={100} />
      </div>
      <div className={cls.descriptionBlock}>
        <h2 className={cls.description}>{shortDescription}</h2>
        <Button variant={ButtonVariant.CLEAR}>Читать дальше</Button>
      </div>
    </div>
  );
};
