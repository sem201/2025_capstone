import { useRef } from "react";
import * as S from "./map.styled";
import { useUpdateUser } from "@hooks/useUpdateUser";
import { useWebSocket } from "@hooks/useWebSocket";
import { useUserStore } from "@store/userStore";

const MapContainer = ({ currentFloor }: { currentFloor: string }) => {
  const svgRef5 = useRef<SVGSVGElement>(null);
  const svgRef6 = useRef<SVGSVGElement>(null);
  const userLocations = useUserStore((state) => state.userLocations);

  // 웹 소켓 호출 훅
  useWebSocket();
  // 5층 6층 각각 user위치 정보 업데이트 훅
  useUpdateUser(userLocations, svgRef5, currentFloor);
  useUpdateUser(userLocations, svgRef6, currentFloor);

  return (
    <S.Wrapper>
      {currentFloor === "전체" ? (
        <S.FullView>
          <S.FloorSection>
            <S.StyledMap5 ref={svgRef5} viewBox="0 0 783 921" />
            <S.FloorLabel>5층</S.FloorLabel>
          </S.FloorSection>
          <S.Divider />
          <S.FloorSection>
            <S.StyledMap6 ref={svgRef6} viewBox="0 0 891 577" />
            <S.FloorLabel>6층</S.FloorLabel>
          </S.FloorSection>
        </S.FullView>
      ) : (
        <S.SingleView>
          {currentFloor == "5" ? (
            <S.StyledMap5 ref={svgRef5} />
          ) : (
            <S.StyledMap6 ref={svgRef6} viewBox="0 0 891 577" />
          )}
          <S.FloorLabel>{currentFloor}층</S.FloorLabel>
        </S.SingleView>
      )}
    </S.Wrapper>
  );
};

export default MapContainer;
