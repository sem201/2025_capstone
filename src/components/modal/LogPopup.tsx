import styled from "styled-components";
import * as S from "./modal.styled";
import close from "@assets/icons/close.svg";
import RedCheckButton from "@components/common/RedCheckButton";
import YellowCheckButton from "@components/common/YellowCheckButton";
import { LogType } from "../../types/types";
import emergency from "@assets/icons/emergency.svg";
import notEmergency from "@assets/icons/notEmergency.svg";
import CheckLocationButton from "@components/common/CheckLocationButton";

const LogPopup = ({ temp }: { temp: LogType }) => {
  return (
    <Wrapper>
      <S.PopupHeader bgcolor="B50">
        <img src={close} alt="닫기버튼" />
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
          성명 {temp.name} 호실 {temp.locate}
          <br />
          발생 시간 {temp.time}
        </S.PopupContent>
        <CheckLocationButton />
        {temp.emergency ? <RedCheckButton /> : <YellowCheckButton />}
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
