import { useRef, useState, useCallback } from "react";
import * as S from "./map.styled";
import { useUpdateUser } from "@hooks/useUpdateUser";
import { useWebSocket } from "@hooks/useWebSocket";
import { useUserStore } from "@store/userStore";
import styled from "styled-components";
import { UserLocation } from "@custom-types/types";

const MapContainer = ({ currentFloor }: { currentFloor: string }) => {
  const svgRef5 = useRef<SVGSVGElement>(null);
  const svgRef6 = useRef<SVGSVGElement>(null);
  const userLocations = useUserStore((state) => state.userLocations);
  const [selectedUser, setSelectedUser] = useState<UserLocation | null>(null);

  // 웹 소켓 호출 훅
  useWebSocket();

  // 점 클릭 시 말풍선 변경
  const handleDotClick = useCallback((user: UserLocation) => {
    setSelectedUser(user);
  }, []);

  const handleCloseBalloon = () => {
    setSelectedUser(null);
    // dot의 filter 제거
    const svg = svgRef5.current || svgRef6.current;
    if (svg && selectedUser) {
      const dot = svg.querySelector(
        `.location-dot[data-id='${selectedUser.id}']`
      );
      if (dot) dot.removeAttribute("filter");
    }
  };

  useUpdateUser(userLocations, svgRef5, currentFloor, handleDotClick);
  useUpdateUser(userLocations, svgRef6, currentFloor, handleDotClick);

  return (
    <S.Wrapper>
      {selectedUser && (
        <BalloonStack>
          <Balloon>
            <Dot
              color={
                selectedUser.type === "emergency"
                  ? "#FF594D"
                  : selectedUser.type === "help"
                  ? "#FFA826"
                  : "#3151B3"
              }
            />
            <span style={{ margin: "0 6px" }}>
              {selectedUser.name} 환자 위치확인 중
            </span>
            <StopButton onClick={handleCloseBalloon}>중지하기</StopButton>
          </Balloon>
        </BalloonStack>
      )}
      {currentFloor === "전체" ? (
        <S.FullView>
          <S.FloorSection>
            <S.StyledMap5 ref={svgRef5} viewBox="0 0 783 950" />
            <S.FloorLabel>5층</S.FloorLabel>
          </S.FloorSection>
          <S.Divider />
          <S.FloorSection>
            <S.StyledMap6 ref={svgRef6} viewBox="0 0 891 600" />
            <S.FloorLabel>6층</S.FloorLabel>
          </S.FloorSection>
        </S.FullView>
      ) : (
        <S.SingleView>
          {currentFloor == "5" ? (
            <S.StyledMap5 ref={svgRef5} viewBox="0 0 783 950" />
          ) : (
            <S.StyledMap6 ref={svgRef6} viewBox="0 0 891 600" />
          )}
          <S.FloorLabel>{currentFloor}층</S.FloorLabel>
        </S.SingleView>
      )}
    </S.Wrapper>
  );
};

export default MapContainer;

const BalloonStack = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
`;

const Balloon = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  padding: 8px 16px;
  font-size: 15px;
  font-weight: 500;
`;

const Dot = styled.span<{ color: string }>`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ color }) => color};
  margin-right: 8px;
`;

const StopButton = styled.button`
  background: #52525b;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  padding: 4px 12px;
  margin-left: 10px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.15s;
  &:hover {
    background: #33343a;
  }
`;
