import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({}) => css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 8px;
    overflow: auto;
    flex: 1;
  `}

  table {
    margin-top: 48px;
    width: 100%;
    min-width: 600px;
    border-collapse: collapse;
  }

  tr {
    background-color: silver;
    transition: background-color linear 200ms;
    color: black;
    &:hover {
      background-color: gray;
      color: white;
    }
  }

  thead {
    font-weight: bold;
    background-color: gray;
  }

  th {
    padding: 8px;
    text-align: left;
  }

  td {
    margin: 16px;
    border-top: 4px solid white;
    padding: 8px;
  }
`;

export const Table = styled.table``;
