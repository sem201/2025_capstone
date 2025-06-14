import * as S from "./Locate.styled";
import close from "@assets/icons/closeWhite.svg";
import emergencyImg from "@assets/icons/emergency.svg";
import nonEmergencyImg from "@assets/icons/notemergency.svg";
import { PopupHeader, ButtonContainer } from "./modal.styled";
import YellowCheckButton from "@components/common/YellowCheckButton";
import RedCheckButton from "@components/common/RedCheckButton";
import { useRef } from "react";
import { useModalStore } from "@store/modalStore";
import { formatDate } from "@utils/formatDate";
import { useDisplayLocation } from "@hooks/useDisplayLocation";

const CheckLocate = () => {
  const svgRef5 = useRef<SVGSVGElement>(null);
  const svgRef6 = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    selectedPatient,
    setIsLocateVisible,
    setIsConfirmVisible,
    setSelectedPatient,
  } = useModalStore();

  const currentSvgRef =
    selectedPatient?.patientLocatedInfo?.floor === 5 ? svgRef5 : svgRef6;

  useDisplayLocation(
    // console.log("selectedPatient", selectedPatient),
    selectedPatient?.patientLocatedInfo
      ? {
          place: selectedPatient.patientLocatedInfo.place,
          floor: selectedPatient.patientLocatedInfo.floor,
          x: selectedPatient.patientLocatedInfo.x,
          y: selectedPatient.patientLocatedInfo.y,
          name: selectedPatient.patientName,
          type: selectedPatient.type,
        }
      : null,
    currentSvgRef
  );

  const handleConfirm = (item: any) => {
    setSelectedPatient({
      ssid: item.patientLocatedInfo.ssid,
      id: item.id, // emergencyid
      patientId: item.patientId,
      name: item.patientName,
      responsibility: item.responsibility,
      place: item.patientLocatedInfo.place,
      // type: isEmergency ? "emergency" : "nurse-call",
      updatedAt: item.updatedAt,
    });
    setIsConfirmVisible(true);
  };

  return (
    <S.Wrapper>
      <PopupHeader bgcolor="B60">
        <img
          src={close}
          alt="닫기버튼"
          onClick={() => setIsLocateVisible(false)}
        />
      </PopupHeader>
      <S.ContentContainer>
        <S.UserContainer>
          <span>성명</span> {selectedPatient?.patientName} &nbsp;
          <span>발생 시간</span>{" "}
          {selectedPatient ? formatDate(selectedPatient.updatedAt) : ""}&nbsp;
          {selectedPatient?.type === "emergency" ? (
            <>
              <div>
                <span>사유&nbsp;&nbsp;</span>
                <img src={emergencyImg} alt="널스콜" />
                &nbsp; 낙상 사고
              </div>
              <div>
                <span>확인 여부&nbsp;&nbsp;</span>
                {selectedPatient?.responsibility ? (
                  `완료 (${selectedPatient.responsibility})`
                ) : (
                  <>
                    "확인 전"
                    <RedCheckButton
                      onClick={() => handleConfirm(selectedPatient)}
                    />
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <div>
                <span>사유&nbsp;&nbsp;</span>
                <img src={nonEmergencyImg} alt="널스콜" />
                &nbsp; 널스콜
              </div>
              <div>
                <span>확인 여부&nbsp;&nbsp;</span>
                확인 전
                <YellowCheckButton
                  onClick={() => handleConfirm(selectedPatient)}
                />
              </div>
            </>
          )}
        </S.UserContainer>
        <ButtonContainer></ButtonContainer>
        <S.MapContainer ref={containerRef}>
          {selectedPatient?.patientLocatedInfo?.floor === 5 ? (
            <S.StyledMap5 ref={svgRef5} />
          ) : selectedPatient?.patientLocatedInfo?.floor === 6 ? (
            <S.StyledMap6 ref={svgRef6} />
          ) : null}
        </S.MapContainer>
      </S.ContentContainer>
    </S.Wrapper>
  );
};

export default CheckLocate;
