import styled, { css } from "styled-components";
import { ButtonProps } from ".";

type WrapperProps = Pick<ButtonProps, "disabled">;

export const Wrapper = styled.button<WrapperProps>`
  ${({ disabled }) => css`
    padding: 8px;
    width: 120px;
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: 1px solid black;
    border-radius: 4px;

    &:disabled {
      cursor: not-allowed;
      border-color: silver;
      color: silver;
    }
  `}
`;
