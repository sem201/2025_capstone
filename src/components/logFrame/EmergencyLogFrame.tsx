import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Right from "@assets/icons/Right.svg";
import emergency from "@assets/icons/emergency.svg";
import * as S from "./logFrame.styled";
import RedCheckButton from "@components/common/RedCheckButton";
import { ApiInstance } from "@api/ApiInstance";
import { LogData } from "@custom-types/types";

const EmergencyLogFrame = React.memo(
  ({
    openPopup,
    openDetail,
  }: {
    openPopup: () => void;
    openDetail: () => void;
  }) => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 5;
    const [date, setDate] = useState<string | null>(null);
    const [data, setData] = useState<LogData[] | null>(null);
    const handlePageChage = (page: number) => {
      if (page > 0 && page <= totalPages) {
        setCurrentPage(page);
      }
    };
    useEffect(() => {
      // 날짜가 null인 경우 현재 날짜를 ISO 형식으로 설정
      if (date === null) {
        const ex = new Date();
        const isoString = ex.toISOString();
        const formattedDate =
          isoString.replace("Z", "") + Math.random().toString().slice(2, 8);
        setDate(formattedDate);
        console.log(formattedDate);
      }
    }, [date]);

    useEffect(() => {
      const fetchData = async () => {
        if (date) {
          try {
            const response = await ApiInstance.get("api/emergency", {
              params: { date: date },
            });
            setData(response.data);
            console.log(response);
          } catch (e) {
            console.log(e);
          }
        }
      };
      fetchData();
    }, [date]);
    return (
      <Wrapper>
        <S.LogoTitleHeader>
          낙상감지 내역
          <button
            style={{ background: "none", border: "none", cursor: "pointer" }}
            onClick={openDetail}
          >
            <img src={Right} alt="낙상 감지내역 상세보기" />
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
                    <td>{item.name}</td>
                    <td>24.02.28 14:59:57</td>
                    <td>
                      <img src={emergency} alt="응급" />
                      낙상감지
                    </td>
                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      확인 전 <RedCheckButton onClick={openPopup} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </S.Table>
        <S.Pagenation>
          <button
            onClick={() => handlePageChage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChage(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </S.Pagenation>
      </Wrapper>
    );
  }
);

export default EmergencyLogFrame;

const Wrapper = styled.section`
  box-sizing: border-box;
  padding: 20px;
  position: relative;

  border-bottom: 1px solid ${({ theme }) => theme.colors.B10};
`;
