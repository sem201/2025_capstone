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

const CheckLocate = ({
  closeLocate,
  emergency,
}: {
  closeLocate: () => void;
  emergency: boolean;
}) => {
  const svgRef5 = useRef<SVGSVGElement>(null);
  const svgRef6 = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { selectedPatient } = useModalStore();

  const currentSvgRef =
    selectedPatient?.patientLocatedInfo?.floor === 5 ? svgRef5 : svgRef6;

  useDisplayLocation(
    selectedPatient?.patientLocatedInfo
      ? {
          place: selectedPatient.patientLocatedInfo.place,
          floor: selectedPatient.patientLocatedInfo.floor,
          x: selectedPatient.patientLocatedInfo.x,
          y: selectedPatient.patientLocatedInfo.y,
          name: selectedPatient.patientName,
          type: emergency ? "emergency" : "help",
        }
      : null,
    currentSvgRef
  );

  return (
    <S.Wrapper>
      <PopupHeader bgcolor="B60">
        <img src={close} alt="닫기버튼" onClick={closeLocate} />
      </PopupHeader>
      <S.ContentContainer>
        <S.UserContainer>
          <span>성명</span> {selectedPatient?.patientName} &nbsp;
          <span>발생 시간</span>{" "}
          {selectedPatient ? formatDate(selectedPatient.updatedAt) : ""}&nbsp;
          {emergency ? (
            <>
              <div>
                <span>사유&nbsp;&nbsp;</span>
                <img src={emergencyImg} alt="널스콜" />
                &nbsp; 낙상 사고
              </div>
              <div>
                <span>확인 여부&nbsp;&nbsp;</span>
                {selectedPatient?.name
                  ? `완료 (${selectedPatient.name})`
                  : "확인 전"}
                &nbsp;&nbsp;
                <RedCheckButton onClick={() => {}} />
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
                확인 전 &nbsp;&nbsp;
                <YellowCheckButton onClick={() => {}} />
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
