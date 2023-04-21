import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({}) => css`
    padding: 16px;
    background-color: silver;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    div {
      display: flex;
      flex-direction: row;
      gap: 8px;
      align-items: center;
    }
  `}
`;
