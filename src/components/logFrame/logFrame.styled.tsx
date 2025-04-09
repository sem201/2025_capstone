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

  font-family: ${({ theme }) => theme.fonts.small["font-family"]};
  font-size: ${({ theme }) => theme.fonts.small["font-size"]};
  font-weight: ${({ theme }) => theme.fonts.small["font-weight"]};
  line-height: ${({ theme }) => theme.fonts.small["line-height"]};
  letter-spacing: ${({ theme }) => theme.fonts.small["letter-spacing"]};
`;
export const TableRow = styled.tr`
  background-color: #eee;
  color: ${({ theme }) => theme.colors.B60};

  border-color: ${({ theme }) => theme.colors.B20};
  /* border-color: black; */
  border-style: solid;
  border-left: 1px;
  border-right: 1px;

  td,
  th {
    min-width: 50px;
  }
`;

export const TableHeader = styled.thead`
  /* background-color: #eee; */
`;

const TableHeaderCell = styled.th`
  text-align: left;
`;
