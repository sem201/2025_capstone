import styled from "styled-components";

export const LogoTitleHeader = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 14px;
  border-collapse: collapse;
  text-align: left;
  td {
    ${({ theme }) => theme.fonts.body5}
  }
  img {
    width: 9px;
    height: 9px;
  }
`;
export const TableRow = styled.tr`
  border-width: 1.5px;
  background-color: #eee;
  color: ${({ theme }) => theme.colors.B60};

  border-color: ${({ theme }) => theme.colors.B20};
  border-style: solid;
  border-left: 1px;
  border-right: 1px;

  ${({ theme }) => theme.fonts.body4}

  td,
  th {
    min-width: 50px;
  }
`;

export const Pagenation = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  justify-content: center;
  gap: 8px;
  margin-top: 20px;

  button {
    padding: 5px 10px;
    cursor: pointer;
    background-color: inherit;
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.B30};

    &.active {
      color: ${({ theme }) => theme.colors.B60};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
