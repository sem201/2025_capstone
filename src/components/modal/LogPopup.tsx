import styled from "styled-components";
import * as S from "./modal.styled";
import RedCheckButton from "@components/common/RedCheckButton";
import YellowCheckButton from "@components/common/YellowCheckButton";
import { UserLocation } from "@custom-types/types";
import close from "@assets/icons/closeWhite.svg";
import emergency from "@assets/icons/emergency.svg";
import notEmergency from "@assets/icons/notemergency.svg";
import CheckLocationButton from "@components/common/CheckLocationButton";
import send from "@assets/icons/Send.svg";

interface LogPopupProps {
  user: UserLocation;
  closePopup: () => void;
  onOpenConfirm: () => void;
  style?: React.CSSProperties;
}

const LogPopup = ({
  user,
  onOpenConfirm,
  closePopup,
  style,
}: LogPopupProps) => {
  console.log("user", user);
  return (
    <Wrapper style={style}>
      <S.PopupHeader bgcolor="B50">
        <img src={close} alt="닫기버튼" onClick={closePopup} />
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
            <p>호실 {user.place}</p>
          </div>
          <p>발생 시간 {new Date().toLocaleString()}</p>
        </S.PopupContent>
        <CheckLocationButton text="위치확인" img={send} />
        <div style={{ marginBottom: "4px" }}></div>
        {user.type === "emergency" ? (
          <RedCheckButton onClick={onOpenConfirm} />
        ) : (
          <YellowCheckButton onClick={onOpenConfirm} />
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
