import { useEffect, useRef, useState } from "react";
import * as S from "./map.styled";
import { UserLocation } from "@custom-types/types";
// import { useUserStore } from "../../store/userStore";
import { useCenterXY } from "@hooks/useCenterXY";

const MapContainer = ({ currentFloor }: { currentFloor: string }) => {
  const svgRef5 = useRef<SVGSVGElement>(null);
  const svgRef6 = useRef<SVGSVGElement>(null);
  // const userLocations = useUserStore(
  //   (state: { userLocations: UserLocation[] }) => state.userLocations
  // );
  // const setUserLocations = useUserStore((state) => state.setUserLocations);
  const [userLocations, setUserLocations] = useState<UserLocation[]>([]);
  const webSocket = useRef<WebSocket | null>(null);
  const getCenterXY = useCenterXY();

  useEffect(() => {
    webSocket.current = new WebSocket(
      `${import.meta.env.VITE_SOCKET_URL}patient/location`
    );
    webSocket.current.onopen = () => {
      console.log("websocket 연결 성공");
    };
    webSocket.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (Array.isArray(data)) {
        setUserLocations(data);
      } else if (typeof data === "object" && data !== null) {
        setUserLocations((prev) => {
          if (!Array.isArray(prev)) return [data]; // 이상 상태일 때는 새 배열로 시작
          // 여기서 업데이트 규칙 정하기
          // 예: id가 같으면 교체, 없으면 추가
          const index = prev.findIndex((loc) => loc.id === data.id);
          if (index === -1) {
            return [...prev, data]; // 새 위치 추가
          } else {
            const newArr = [...prev];
            newArr[index] = data; // 기존 위치 업데이트
            return newArr;
          }
        });
      }
    };
  }, []);

  useEffect(() => {
    if (!svgRef5.current) return;

    const existingDots = svgRef5.current.querySelectorAll(".location-dot");
    existingDots.forEach((dot) => dot.remove());
    userLocations.map((location) => {
      const { x, y } = getCenterXY(location, svgRef5);
      const dot = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      dot.setAttribute("cx", `${x}`);
      dot.setAttribute("cy", `${y}`);
      dot.setAttribute("r", "10");
      dot.setAttribute("fill", "blue");
      dot.setAttribute("border", "1px");
      dot.classList.add("location-dot");
      dot.setAttribute("stroke", "white");
      dot.setAttribute("stroke-width", "2");

      const nameText = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      nameText.setAttribute("x", `${x}`);
      nameText.setAttribute("y", `${y + 20}`);
      nameText.setAttribute("fill", "black");
      nameText.setAttribute("font-size", "12");
      nameText.setAttribute("text-anchor", "middle");
      nameText.textContent = location.name;

      svgRef5.current?.appendChild(dot);
      svgRef5.current?.appendChild(nameText);
    });
    console.log("바뀐 위치", userLocations);
  }, [userLocations]);
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
