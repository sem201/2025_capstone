import { useRef, useCallback } from "react";
import * as S from "./map.styled";
import { useUpdateUser } from "@hooks/useUpdateUser";
import { useWebSocket } from "@hooks/useWebSocket";
import { useUserStore } from "@store/userStore";
import { UserLocation } from "@custom-types/types";

const MapContainer = ({ currentFloor }: { currentFloor: string }) => {
  const svgRef5 = useRef<SVGSVGElement>(null);
  const svgRef6 = useRef<SVGSVGElement>(null);
  const userLocations = useUserStore((state) => state.userLocations);
  const selectedUser = useUserStore((state) => state.selectedUser);
  const setSelectedUser = useUserStore((state) => state.setSelectedUser);

  // 웹 소켓 호출 훅
  useWebSocket();

  // 점 클릭 시 말풍선 변경
  const handleDotClick = useCallback(
    (user: UserLocation) => {
      console.log("user", user);
      setSelectedUser(user);
    },
    [setSelectedUser]
  );

  const handleCloseBalloon = () => {
    // selectedUser를 먼저 저장
    const currentSelectedUser = selectedUser;
    console.log("currentSelectedUser", currentSelectedUser);
    setSelectedUser(null);
    const svg = currentFloor === "5" ? svgRef5.current : svgRef6.current;
    if (svg && currentSelectedUser) {
      const dot = svg.querySelector(
        `.location-dot[data-id='${currentSelectedUser.patientId}']`
      );
      console.log(svg);
      if (dot) {
        dot.removeAttribute("filter");
        dot.setAttribute("r", "12");
      }
    }
  };

  useUpdateUser(
    userLocations,
    svgRef5,
    currentFloor,
    handleDotClick,
    selectedUser?.id
  );

  useUpdateUser(
    userLocations,
    svgRef6,
    currentFloor,
    handleDotClick,
    selectedUser?.id
  );

  return (
    <S.Wrapper showBorder={!!selectedUser}>
      {selectedUser && (
        <S.BalloonStack>
          <S.Balloon>
            <S.Dot
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
            <S.StopButton onClick={handleCloseBalloon}>중지하기</S.StopButton>
          </S.Balloon>
        </S.BalloonStack>
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
