import styled from "styled-components";
import search from "@assets/icons/Search.svg";
import add from "@assets/icons/Add.svg";
import deleteIcon from "@assets/icons/Trashcan.svg";
import emergency from "@assets/icons/emergency.svg";
import notNormal from "@assets/icons/notemergency.svg";
import normal from "@assets/icons/normal.svg";

import * as S from "./customList.style";
import { Table, TableRow } from "@components/logFrame/logFrame.styled";
import CheckLocationButton from "@components/common/CheckLocationButton";

const customList = () => {
  return (
    <Wrapper>
      <S.Title>환자 목록</S.Title>
      <S.InputContainer>
        <input type="text" placeholder="환자명을 입력하세요" />
        <img src={search} alt="search" />
        <S.ButtonContainer>
          <img src={add} alt="add" />
        </S.ButtonContainer>
        <S.ButtonContainer>
          <img src={deleteIcon} alt="delete" />
        </S.ButtonContainer>
      </S.InputContainer>
      <Table>
        <thead>
          <TableRow>
            <th></th>
            <th>상태</th>
            <th>성명</th>
            <th>호실</th>
            <th></th>
          </TableRow>
        </thead>
        <tbody>
          <tr>
            <td style={{ paddingLeft: "8px" }}>
              <input type="checkbox" />
            </td>
            <td style={{ paddingLeft: "8px" }}>
              <img src={emergency} alt="응급" />
            </td>
            <td>홍길동</td>
            <td>102호</td>
            <td>
              <CheckLocationButton />
            </td>
          </tr>
          <tr>
            <td style={{ paddingLeft: "8px" }}>
              <input type="checkbox" />
            </td>
            <td style={{ paddingLeft: "8px" }}>
              <img src={notNormal} alt="비응급" />
            </td>
            <td>홍길동</td>
            <td>102호</td>
            <td>
              <CheckLocationButton />
            </td>
          </tr>

          <tr>
            <td style={{ paddingLeft: "8px" }}>
              <input type="checkbox" />
            </td>
            <td style={{ paddingLeft: "8px" }}>
              <img src={normal} alt="기본 상태" />
            </td>
            <td>홍길동</td>
            <td>102호</td>
            <td>
              <CheckLocationButton />
            </td>
          </tr>

          <tr>
            <td style={{ paddingLeft: "8px" }}>
              <input type="checkbox" />
            </td>
            <td style={{ paddingLeft: "8px" }}>
              <img src={emergency} alt="응급" />
            </td>
            <td>홍길동</td>
            <td>102호</td>
            <td>
              <CheckLocationButton />
            </td>
          </tr>
          <tr>
            <td style={{ paddingLeft: "8px" }}>
              <input type="checkbox" />
            </td>
            <td style={{ paddingLeft: "8px" }}>
              <img src={notNormal} alt="비응급" />
            </td>
            <td>홍길동</td>
            <td>102호</td>
            <td>
              <CheckLocationButton />
            </td>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default customList;

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
`;
