import styled from "styled-components";
import * as S from "./mainview.styled";
import FloorButton from "@components/common/FloorButton";
import emergency from "@assets/icons/emergency.svg";
import normal from "@assets/icons/normal.svg";
import nurse from "@assets/icons/nursecall.svg";

const MapHeader = ({
  currentFloor,
  setCurrentFloor,
}: {
  currentFloor: string;
  setCurrentFloor: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Wrapper>
      <S.FloorWrapper>
        <FloorButton
          currentFloor={currentFloor}
          setCurrentFloor={setCurrentFloor}
          floor="전체"
        >
          전체
        </FloorButton>
        <FloorButton
          currentFloor={currentFloor}
          setCurrentFloor={setCurrentFloor}
          floor="5"
        >
          5층
        </FloorButton>
        <FloorButton
          currentFloor={currentFloor}
          setCurrentFloor={setCurrentFloor}
          floor="6"
        >
          6층
        </FloorButton>
      </S.FloorWrapper>
      <S.UserStatusWrapper>
        <S.state>
          <img src={normal} alt="상태:일반" />
          &nbsp;일반
        </S.state>
        <S.state>
          <img src={emergency} alt="상태:위급" />
          &nbsp;낙상감지
        </S.state>
        <S.state>
          <img src={nurse} alt="상태:호출" />
          &nbsp;널스콜
        </S.state>
      </S.UserStatusWrapper>
    </Wrapper>
  );
};

export default MapHeader;

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  height: 60px;
  box-sizing: border-box;
  padding: 8px 32px;

  justify-content: space-between;
`;
