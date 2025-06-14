import styled from "styled-components";
import * as S from "./modal.styled";
import RedCheckButton from "@components/common/RedCheckButton";
import YellowCheckButton from "@components/common/YellowCheckButton";
import { EmergencyEvent } from "../../types/types";
import close from "@assets/icons/closeWhite.svg";
import emergency from "@assets/icons/emergency.svg";
import notEmergency from "@assets/icons/notemergency.svg";
import CheckLocationButton from "@components/common/CheckLocationButton";
import send from "@assets/icons/Send.svg";
import { useModalStore } from "@store/modalStore";
import { useEffect } from "react";

interface LogPopupProps {
  user: EmergencyEvent;
  style?: React.CSSProperties;
}

const LogPopup = ({ user, style }: LogPopupProps) => {
  const {
    setIsConfirmVisible,
    setSelectedPatient,
    activePopups,
    setActivePopups,
    setShouldUpdateLogList,
  } = useModalStore();

  // 팝업 떴을 때 로그 리스트 최신화
  useEffect(() => {
    console.log("팝업이 열렸을 때 로그 리스트 업데이트", user.emergencyId);
    setShouldUpdateLogList(true);
  }, [user.emergencyId]);

  const handleConfirm = (user: any) => {
    setIsConfirmVisible(true);
    setSelectedPatient({
      ssid: user.locatedInfo.ssid,
      id: user.emergencyId,
      patientId: user.patientId,
      name: user.name,
      place: user.locatedInfo.place,
      type: user.type,
      updatedAt: user.createAt,
    });
  };
  const handleClosePopup = (emergencyId: number) => {
    setActivePopups(
      activePopups.filter((popup) => popup.emergencyId !== emergencyId)
    );
  };

  const handleLocationCheck = (user: EmergencyEvent) => {
    const dot = document.querySelector(
      `.location-dot[data-id='${user.patientId}']`
    );
    if (dot) {
      let shadowColor = "#3151B3";
      if (user.type === "emergency") shadowColor = "rgb(255, 17, 0)";
      else if (user.type === "help") shadowColor = "#FFA826";
      dot.setAttribute("filter", `drop-shadow(0 0 8px ${shadowColor})`);
    }
  };
  return (
    <Wrapper style={style}>
      <S.PopupHeader bgcolor="B50">
        <img
          src={close}
          alt="닫기버튼"
          onClick={() => handleClosePopup(user.emergencyId)}
        />
      </S.PopupHeader>
      <S.PopupBody>
        <S.PopupTitle>
          {user.type === "emergency" ? (
            <>
              <img src={emergency} alt="응급상황" />
              <p>낙상감지 환자 발생</p>
            </>
          ) : (
            <>
              <img src={notEmergency} alt="비응급상황" />
              <p>널스콜 환자 발생</p>
            </>
          )}
        </S.PopupTitle>
        <hr style={{ width: "80%", margin: "0 0 0.5em " }} />
        <S.PopupContent>
          <div>
            <p>성명 {user.name}</p>
            <p>호실 {user.locatedInfo.place}</p>
          </div>
          <p>발생 시간 {new Date(user.createAt).toLocaleString()}</p>
        </S.PopupContent>
        <CheckLocationButton
          text="위치확인"
          img={send}
          onClick={() => handleLocationCheck(user)}
        />
        <div style={{ marginBottom: "4px" }}></div>
        {user.type === "emergency" ? (
          <RedCheckButton onClick={() => handleConfirm(user)} />
        ) : (
          <YellowCheckButton onClick={() => handleConfirm(user)} />
        )}
      </S.PopupBody>
    </Wrapper>
  );
};

export default LogPopup;

const Wrapper = styled.div`
  position: absolute;
  width: 300px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
