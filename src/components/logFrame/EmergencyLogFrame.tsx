import React from "react";
import styled from "styled-components";
import Right from "@assets/icons/Right.svg";
import emergency from "@assets/icons/emergency.svg";
import * as S from "./logFrame.styled";
import RedCheckButton from "@components/common/RedCheckButton";
import { useLogList } from "@hooks/useLogList";
import { formatDate } from "@utils/formatDate";
import { useModalStore } from "@store/modalStore";

const EmergencyLogFrame = React.memo(() => {
  const { currentPage, totalPages, data, handlePageChange } =
    useLogList("api/emergency");
  const {
    setIsConfirmVisible,
    setIsLogFrameDetailEme,
    setIsEmergency,
    setSelectedPatient,
  } = useModalStore();

  const handleDetailClick = () => {
    setIsEmergency(true);
    setIsLogFrameDetailEme(true);
  };

  const handleConfirm = (item: any) => {
    console.log("item", item);
    setSelectedPatient({
      ssid: item.patientLocatedInfo.ssid,
      id: item.id, // emergencyid
      patientId: item.patientId,
      name: item.patientName,
      responsibility: item.responsibility,
      place: item.patientLocatedInfo.place,
      type: "emergency",
      updatedAt: item.updatedAt,
    });
    setIsEmergency(true);
    setIsConfirmVisible(true);
  };

  return (
    <Wrapper>
      <S.LogoTitleHeader>
        낙상감지 내역
        <button
          style={{ background: "none", border: "none", cursor: "pointer" }}
          onClick={handleDetailClick}
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
                  <td>{item.patientName}</td>
                  <td>{formatDate(item.updatedAt)}</td>
                  <td>
                    <img src={emergency} alt="응급" />
                    &nbsp;낙상감지
                  </td>

                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {item.responsibility ? (
                      `완료 (${item.responsibility})`
                    ) : (
                      <>
                        확인 전{" "}
                        <RedCheckButton onClick={() => handleConfirm(item)} />
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
});

export default EmergencyLogFrame;

const Wrapper = styled.section`
  box-sizing: border-box;
  padding: 20px;
  position: relative;

  border-bottom: 1px solid ${({ theme }) => theme.colors.B10};
`;
