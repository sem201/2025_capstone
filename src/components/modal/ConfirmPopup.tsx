import styled from "styled-components";
import * as S from "./modal.styled";
import close from "@assets/icons/closeBlack.svg";
import emergency from "@assets/icons/emergency.svg";
import notEmergency from "@assets/icons/notemergency.svg";
import CommonButton2 from "@components/common/CommonButton2";
import { useModalStore } from "@store/modalStore";
import { useRef } from "react";
import { ApiInstance } from "@api/ApiInstance";
import { formatDate } from "@utils/formatDate";

const ConfirmPopup = () => {
  const { selectedPatient, setIsConfirmVisible } = useModalStore();
  console.log("selectedPatient", selectedPatient);
  const inputRef = useRef<HTMLInputElement>(null);
  const submit = () => {
    setIsConfirmVisible(false);
    const name = inputRef.current?.value;
    const type =
      selectedPatient?.type === "emergency" ? "emergency" : "nurse-call";
    console.log("name", name);
    console.log("selectedPatient?.id", selectedPatient?.id);
    console.log("selectedPatient?.ssid", selectedPatient?.ssid);

    ApiInstance.patch(`/api/${type}`, {
      ssid: selectedPatient?.ssid,
      [type === "emergency" ? "emergencyId" : "nurseCallId"]:
        selectedPatient?.id,
      responsibility: name,
    });
  };
  return (
    <Wrapper>
      <S.PopupHeader bgcolor="B20">
        <img
          src={close}
          alt="닫기버튼"
          onClick={() => setIsConfirmVisible(false)}
        />
      </S.PopupHeader>
      <S.PopupBody>
        <S.PopupTitle>
          <p>{selectedPatient?.name} 님을 확인처리 하시겠습니까?</p>
        </S.PopupTitle>
        <hr style={{ width: "80%", margin: "0 0 0.5em " }} />
        <S.PopupContent>
          <div>
            <p>
              사유&nbsp;&nbsp;
              {selectedPatient?.type === "emergency" ? (
                <img src={emergency} />
              ) : (
                <img src={notEmergency} alt="비응급상황" />
              )}
              &nbsp;
              {selectedPatient?.type === "emergency" ? "낙상감지" : "널스콜"}
            </p>
            <p>호실 {selectedPatient?.place}&nbsp;&nbsp;</p>
          </div>
          <p>발생 시간 {formatDate(selectedPatient?.updatedAt)}</p>
        </S.PopupContent>
        <S.ConfirmPopupBody>
          <p>아래에 담당자 성명을 입력해주세요.</p>
          <input type="text" ref={inputRef} />
        </S.ConfirmPopupBody>
        <CommonButton2 onClick={() => submit()}>
          <p style={{ color: "white", margin: "0.5em 0" }}>제출하기</p>
        </CommonButton2>
      </S.PopupBody>
    </Wrapper>
  );
};

export default ConfirmPopup;

const Wrapper = styled.div`
  position: absolute;
  width: 400px;

  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
`;
