import styled from "styled-components";
import * as S from "./modal.styled";
import RedCheckButton from "@components/common/RedCheckButton";
import YellowCheckButton from "@components/common/YellowCheckButton";
import { LogType } from "../../types/types";
import close from "@assets/icons/closeWhite.svg";
import emergency from "@assets/icons/emergency.svg";
import notEmergency from "@assets/icons/notEmergency.svg";
import CheckLocationButton from "@components/common/CheckLocationButton";

const LogPopup = ({
  temp,
  onOpenConfirm,
  closePopup,
}: {
  temp: LogType;
  onOpenConfirm: () => void;
  closePopup: () => void;
}) => {
  return (
    <Wrapper>
      <S.PopupHeader bgcolor="B50">
        <img src={close} alt="닫기버튼" onClick={closePopup} />
      </S.PopupHeader>
      <S.PopupBody>
        <S.PopupTitle>
          {temp.emergency ? (
            <img src={emergency} alt="응급상황" />
          ) : (
            <img src={notEmergency} alt="비응급상황" />
          )}
          <p>{temp.problem} 환자 발생</p>
        </S.PopupTitle>
        <hr style={{ width: "80%", margin: "0 0 0.5em " }} />
        <S.PopupContent>
          <div>
            <p>성명 {temp.name}</p>
            <p>호실 {temp.locate}</p>
          </div>
          <p>발생 시간 {temp.time}</p>
        </S.PopupContent>
        <CheckLocationButton />
        <div style={{ marginBottom: "4px" }}></div>
        {temp.emergency ? (
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
  bottom: 20px;
  left: 20px;

  width: 300px;

  border-radius: 7.2px;
`;
