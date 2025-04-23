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
    font-family: ${({ theme }) => theme.fonts.body5["font-family"]};
    font-size: ${({ theme }) => theme.fonts.body5["font-size"]};
    font-weight: ${({ theme }) => theme.fonts.body5["font-weight"]};
    line-height: ${({ theme }) => theme.fonts.body5["line-height"]};
    letter-spacing: ${({ theme }) => theme.fonts.body5["letter-spacing"]};
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

  font-family: ${({ theme }) => theme.fonts.body4["font-family"]};
  font-size: ${({ theme }) => theme.fonts.body4["font-size"]};
  font-weight: ${({ theme }) => theme.fonts.body4["font-weight"]};
  line-height: ${({ theme }) => theme.fonts.body4["line-height"]};
  letter-spacing: ${({ theme }) => theme.fonts.body4["letter-spacing"]};

  td,
  th {
    min-width: 50px;
  }
`;
