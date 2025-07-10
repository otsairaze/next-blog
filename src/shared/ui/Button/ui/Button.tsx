import { ButtonHTMLAttributes, memo, ReactNode } from "react";

import { classNames, Mods } from "@/shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export enum ButtonSize {
  M = "size_medium",
  L = "size_large",
  XL = "size_xlarge"
}

export enum ButtonVariant {
  CLEAR = "clear"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const { className, size = ButtonSize.M, disabled, variant = ButtonVariant.CLEAR, children, ...rest } = props;

  const mods: Mods = {
    [cls[size]]: true,
    [cls[variant]]: true,
    [cls.disabled]: disabled
  };

  return (
    <button type="button" className={classNames(cls.Button, mods, [className])} disabled={disabled} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
