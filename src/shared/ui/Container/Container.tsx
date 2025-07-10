import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Container.module.scss";
import { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
  return <div className={classNames(cls.Container, {}, [className])}>{children}</div>;
};
