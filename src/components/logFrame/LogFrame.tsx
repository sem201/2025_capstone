import React from "react";
import styled from "styled-components";
import Right from "@assets/icons/Right.svg";
import emergency from "@assets/icons/emergency.svg";
import * as S from "./logFrame.styled";
import RedCheckButton from "@components/common/RedCheckButton";

const LogFrame = React.memo(() => {
  // 층수 변경시 얘도 리렌더링 되는 것을 막음.
  return (
    <Wrapper>
      <S.LogoTitleHeader>
        낙상감지내역
        <img src={Right} alt="낙상 감지내역 상세보기" />
      </S.LogoTitleHeader>
      <S.Table>
        <S.TableRow>
          <th>성명</th>
          <th>발생 시간</th>
          <th>사유</th>
          <th>확인 여부</th>
        </S.TableRow>
        <tr>
          <td>김철수</td>
          <td>24.02.28 14:59:57</td>
          <td>
            <img src={emergency} alt="응급" />
            낙상감지
          </td>
          <td>
            확인 전 <RedCheckButton />
          </td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>24.02.28 14:59:57</td>
          <td>
            <img src={emergency} alt="응급" />
            낙상감지
          </td>
          <td>
            확인 전 <RedCheckButton />
          </td>
        </tr>
      </S.Table>
      <div>
        {"<"} 1 2 3 4 5 6 {">"}
      </div>
    </Wrapper>
  );
});

export default LogFrame;

const Wrapper = styled.section`
  box-sizing: border-box;
  padding: 20px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.B10};
  border-right: 1px solid ${({ theme }) => theme.colors.B10};
`;
