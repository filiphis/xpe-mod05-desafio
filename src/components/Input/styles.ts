import styled, { css } from "styled-components";
import { InputProps } from ".";

// type WrapperProps = Pick<InputProps, "disabled">;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

export const Input = styled.input`
  ${({}) => css`
    flex: 1;
    margin: 8px;
    color: darkgray;
    padding: 8px;
  `}
`;
