import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({}) => css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 8px;
  `}
`;
