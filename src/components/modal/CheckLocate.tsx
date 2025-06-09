import * as S from "./Locate.styled";
import close from "@assets/icons/closeWhite.svg";
import emergencyImg from "@assets/icons/emergency.svg";
import nonEmergencyImg from "@assets/icons/notemergency.svg";
import { PopupHeader, ButtonContainer } from "./modal.styled";
import YellowCheckButton from "@components/common/YellowCheckButton";
import RedCheckButton from "@components/common/RedCheckButton";
import { StyledMap5 } from "@components/map/map.styled";
import { useRef } from "react";
import add from "@assets/icons/addMap.svg";
import minus from "@assets/icons/minusMap.svg";
import { useModalStore } from "@store/modalStore";
import { formatDate } from "@utils/formatDate";

const CheckLocate = ({
  closeLocate,
  emergency,
}: {
  closeLocate: () => void;
  emergency: boolean;
}) => {
  const svgRef5 = useRef<SVGSVGElement>(null);
  const { selectedPatient } = useModalStore();

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
                {selectedPatient?.name
                  ? `완료 (${selectedPatient.name})`
                  : "확인 전"}
                &nbsp;&nbsp;
                <YellowCheckButton onClick={() => {}} />
              </div>
            </>
          )}
        </S.UserContainer>
        <ButtonContainer>
          <button>
            <img src={add} alt="+" />
          </button>
          <button>
            <img src={minus} alt="-" />
          </button>
        </ButtonContainer>
        <S.MapContainer>
          <StyledMap5 ref={svgRef5} viewBox="" />
        </S.MapContainer>
      </S.ContentContainer>
    </S.Wrapper>
  );
};

export default CheckLocate;
