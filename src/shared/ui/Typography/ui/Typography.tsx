import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Typography.module.scss";
import { memo } from "react";

export enum TypographyColor {
  PRIMARY = "primary",
  ERROR = "error"
}

export enum TypographyAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center"
}

export enum TypographySize {
  M = "size_medium",
  L = "size_large"
}

interface TypographyProps {
  className?: string;
  title?: string;
  text?: string;
  size?: TypographySize;
  align?: TypographyAlign;
  color?: TypographyColor;
}

export const Typography = memo((props: TypographyProps) => {
  const {
    className,
    text,
    title,
    size = TypographySize.M,
    align = TypographyAlign.LEFT,
    color = TypographyColor.PRIMARY
  } = props;

  const mods: Mods = {
    [cls[size]]: true,
    [cls[align]]: true,
    [cls[color]]: true
  };

  return (
    <div className={classNames(cls.Typography, mods, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});

Typography.displayName = "Typography";
