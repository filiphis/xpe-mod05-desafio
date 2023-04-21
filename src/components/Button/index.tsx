import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  disabled?: boolean;
};

export const Button = ({
  children,
  disabled = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper {...props} disabled={disabled}>
    {children}
  </S.Wrapper>
);
