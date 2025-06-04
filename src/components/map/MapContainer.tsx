import { useRef, useState } from "react";
import * as S from "./map.styled";
import { UserLocation } from "@custom-types/types";
// import { useUserStore } from "../../store/userStore";
import { useUpdateUser } from "@hooks/useUpdateUser";
import { useWebSocket } from "@hooks/useWebSocket";

const MapContainer = ({ currentFloor }: { currentFloor: string }) => {
  const svgRef5 = useRef<SVGSVGElement>(null);
  const svgRef6 = useRef<SVGSVGElement>(null);
  const [userLocations, setUserLocations] = useState<UserLocation[]>([]);

  // 웹 소켓 호출 훅
  useWebSocket({ setUserLocations });
  // 5층 6층 각각 user위치 정보 업데이트 훅
  useUpdateUser(userLocations, svgRef5);
  useUpdateUser(userLocations, svgRef6);
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
