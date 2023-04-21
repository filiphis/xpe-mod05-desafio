import * as S from "./styles";

export type TitleProps = {
  children: string;
};

const Title = ({ children }: TitleProps) => <S.Wrapper>{children}</S.Wrapper>;

export { Title };
