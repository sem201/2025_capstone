import styled from "styled-components";
import * as S from "./modal.styled";
import { PopupHeader } from "./modal.styled";
import close from "@assets/icons/closeWhite.svg";
import emergencyImg from "@assets/icons/emergency.svg";
import nonEmergecyImg from "@assets/icons/notemergency.svg";
import {
  Pagenation,
  Table,
  TableRow,
} from "@components/logFrame/logFrame.styled";
import CheckLocationButton from "@components/common/CheckLocationButton";
import warning from "@assets/icons/Danger.svg";
import send from "@assets/icons/Send.svg";
import React, { useEffect } from "react";
import RedCheckButton from "@components/common/RedCheckButton";
import YellowCheckButton from "@components/common/YellowCheckButton";
import { formatDate } from "@utils/formatDate";
import { useLogList } from "@hooks/useLogList";
import { useModalStore } from "@store/modalStore";

const LogFrameDetailEme = () => {
  const [choosedUser, setChoosedUser] = React.useState<number | null>(null);
  const {
    setIsLocateVisible,
    setSelectedPatient,
    setIsConfirmVisible,
    setIsLogFrameDetailEme,
    isEmergency,
    setShouldUpdateLogList,
  } = useModalStore();
  const type = isEmergency ? "emergency" : "nurse-call";
  const { currentPage, totalPages, data, handlePageChange } = useLogList(
    `api/${type}`
  );

  const handleRowClick = (idx: number) => {
    setChoosedUser(idx);
    console.log("data", data);
  };

  const handleLocationClick = (item: any) => {
    console.log("isEmergency", isEmergency);
    setSelectedPatient({
      ...item,
      type: isEmergency ? "emergency" : "nurse-call",
    });
    setIsLocateVisible(true);
  };

  const handleConfirm = (item: any) => {
    setSelectedPatient({
      ssid: item.patientLocatedInfo.ssid,
      id: item.id,
      patientId: item.patientId,
      name: item.patientName,
      place: item.patientLocatedInfo.place,
      responsibility: item.reason,
      type: isEmergency ? "emergency" : "nurse-call",
      updatedAt: item.updatedAt,
    });
    setIsConfirmVisible(true);
  };

  const handleSave = () => {};

  useEffect(() => {
    setShouldUpdateLogList(true);
  }, [setShouldUpdateLogList]);

  return (
    <Wrapper>
      <PopupHeader bgcolor="B50">
        <img
          src={close}
          alt="닫기버튼"
          onClick={() => setIsLogFrameDetailEme(false)}
        />
      </PopupHeader>
      <S.DetailPopupBody>
        <div id="log-table">
          <Table>
            <thead>
              <TableRow>
                <th>성명</th>
                <th>발생 시간</th>
                <th>사유</th>
                <th>확인 여부</th>
                <th>확인 시간</th>
                <th>확인 위치</th>
              </TableRow>
            </thead>
            <tbody>
              {data &&
                data.map((item, idx) => (
                  <tr
                    key={idx}
                    onClick={() => handleRowClick(idx)}
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        choosedUser === idx ? "#f5f5f5" : "transparent",
                    }}
                  >
                    <td>{item.patientName}</td>
                    <td>{formatDate(item.updatedAt)}</td>
                    <td>
                      <img
                        src={isEmergency ? emergencyImg : nonEmergecyImg}
                        alt="응급"
                      />
                      &nbsp;낙상감지
                    </td>
                    {isEmergency ? (
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
                            확인 전
                            <RedCheckButton
                              onClick={() => handleConfirm(item)}
                            />
                          </>
                        )}
                      </td>
                    ) : (
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
                            확인 전
                            <YellowCheckButton
                              onClick={() => {
                                handleConfirm(item);
                              }}
                            />
                          </>
                        )}
                      </td>
                    )}

                    <td></td>
                    <td>
                      <CheckLocationButton
                        text="당시 위치"
                        img={warning}
                        onClick={() => handleLocationClick(item)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Pagenation>
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
          </Pagenation>
        </div>
        <S.UserContent>
          {choosedUser !== null && data ? (
            <>
              <div id="user-info">
                <S.NameContainer>
                  <div>
                    {isEmergency ? (
                      <>
                        <img src={emergencyImg} alt="응급" />
                        {data[choosedUser].patientName}
                      </>
                    ) : (
                      <>
                        <img src={nonEmergecyImg} alt="비응급" />
                        {data[choosedUser].patientName}
                      </>
                    )}
                  </div>
                  <CheckLocationButton text="위치확인" img={send} />
                </S.NameContainer>
                <S.PatientInfoContainer>
                  <div>
                    <span>호실</span>{" "}
                    {data[choosedUser].patientLocatedInfo.place}
                  </div>
                  <div>
                    <span>성별</span> 남 <span>혈액형</span> O
                    <span>생년월일</span> 54/06/21
                  </div>
                </S.PatientInfoContainer>
                <S.UserDiagnosisContainer>
                  <div>
                    <span>담당 의료진 &nbsp;</span>이상호 윤희수
                  </div>
                  <div>
                    <span>병명</span>
                    <textarea readOnly value="치매로 인한 입원" />
                  </div>
                </S.UserDiagnosisContainer>
              </div>
              <S.errorContainer emergency={isEmergency}>
                <img
                  src={isEmergency ? emergencyImg : nonEmergecyImg}
                  alt="응급 아이콘"
                />
                &nbsp;낙상감지 {formatDate(data[choosedUser].updatedAt)}
              </S.errorContainer>
              <div id="input">
                <S.InputContainer>
                  <p>처리사유</p>
                  <button onClick={handleSave}>저장</button>
                </S.InputContainer>
                <textarea />
              </div>
            </>
          ) : (
            <S.EmptyUser> 열람할 내역을 선택해주세요</S.EmptyUser>
          )}
        </S.UserContent>
      </S.DetailPopupBody>
    </Wrapper>
  );
};

export default LogFrameDetailEme;

const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  width: 830px;
  height: 408px;

  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 7.2px;

  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.25);
`;
