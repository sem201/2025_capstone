import React from "react";
import styled from "styled-components";
import Right from "@assets/icons/Right.svg";
import nonemergency from "@assets/icons/notemergency.svg";
import * as S from "./logFrame.styled";
import YellowCheckButton from "@components/common/YellowCheckButton";
import { useLogList } from "@hooks/useLogList";
import { formatDate } from "@utils/formatDate";

const LogFrame = React.memo(
  ({
    openPopup,
    openDetail,
  }: {
    openPopup: () => void;
    openDetail: () => void;
  }) => {
    const { currentPage, totalPages, data, handlePageChange } =
      useLogList("api/nurse-call");
    return (
      <Wrapper>
        <S.LogoTitleHeader>
          널스콜 내역
          <button
            style={{ background: "none", border: "none", cursor: "pointer" }}
            onClick={openDetail}
          >
            <img src={Right} alt="널스콜 상세보기" />
          </button>
        </S.LogoTitleHeader>
        <S.Table>
          <thead>
            <S.TableRow>
              <th>성명</th>
              <th>발생 시간</th>
              <th>사유</th>
              <th>확인 여부</th>
            </S.TableRow>
          </thead>
          <tbody>
            {data &&
              data.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{item.patientName}</td>
                    <td>{formatDate(item.updatedAt)}</td>
                    <td>
                      <img src={nonemergency} alt="응급" />
                      낙상감지
                    </td>

                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      {item.name ? (
                        `완료 (${item.name})`
                      ) : (
                        <>
                          확인 전 <YellowCheckButton onClick={openPopup} />
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </S.Table>
        <S.Pagenation>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </S.Pagenation>
      </Wrapper>
    );
  }
);

export default LogFrame;

const Wrapper = styled.section`
  box-sizing: border-box;
  padding: 20px;
  position: relative;

  border-bottom: 1px solid ${({ theme }) => theme.colors.B10};
`;
