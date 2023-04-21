import { InputHTMLAttributes } from "react";
import * as S from "./styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: string;
  placeholder?: string;
};

export const Input = ({
  type = "text",
  placeholder = "Placeholder Text",
  ...props
}: InputProps) => (
  <S.Wrapper>
    <S.Input {...props} type={type} placeholder={placeholder}></S.Input>
  </S.Wrapper>
);
