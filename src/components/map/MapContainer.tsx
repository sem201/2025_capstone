import { useEffect, useRef } from "react";
import styled from "styled-components";
import Map5 from "@assets/maplayer/map5.svg?component";
import UserLocation from "@type/types";
import { useUserStore, UserLocation } from "../../store/userStore";

const MapContainer = ({ currentFloor }: { currentFloor: string }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const userLocations = useUserStore(
    (state: { userLocations: UserLocation[] }) => state.userLocations
  );
  const setUserLocations = useUserStore((state) => state.setUserLocations);
  const webSocket = useRef<WebSocket | null>(null);

  useEffect(() => {
    webSocket.current = new WebSocket("wss://api.fpfp.o-r.kr/patient/location");
    webSocket.current.onopen = (e) => {
      console.log("websocket 연결 성공");
    };
    webSocket.current.onmessage = (e) => {
      console.log("websocket 메세지 수신", e);
    };
    const testLocations: UserLocation[] = [
      {
        id: "hall_5103",
        type: "hall",
        x: 5,
        y: 1,
      },
      {
        id: "hall_5103",
        type: "hall",
        x: 1,
        y: 1,
      },
    ];
    setUserLocations(testLocations);
  }, [setUserLocations]);

  useEffect(() => {
    if (!svgRef.current) return;

    const existingDots = svgRef.current.querySelectorAll(".location-dot");
    existingDots.forEach((dot) => dot.remove());

    userLocations.forEach((location) => {
      const group = svgRef.current?.querySelector(`#${location.id}`);
      if (group) {
        const targetRect = group.querySelector(
          `[id="${location.x}-${location.y}"]`
        );
        if (targetRect) {
          const x = Number(targetRect.getAttribute("x") ?? "0");
          const y = Number(targetRect.getAttribute("y") ?? "0");
          const width = Number(targetRect.getAttribute("width") ?? "0");
          const height = Number(targetRect.getAttribute("height") ?? "0");
          const transform = targetRect.getAttribute("transform");

          let centerX, centerY;
          if (transform) {
            centerX = x - width / 2;
            centerY = y + height / 2;
          } else {
            centerX = x + width / 2;
            centerY = y + height / 2;
          }

          const dot = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
          );
          dot.setAttribute("cx", centerX.toString());
          dot.setAttribute("cy", centerY.toString());
          dot.setAttribute("r", "10");
          dot.setAttribute("fill", "gray");
          dot.classList.add("location-dot");

          svgRef.current?.appendChild(dot);
        }
      }
    });
  }, [userLocations]);

  return (
    <Wrapper>
      {currentFloor === "전체" ? (
        <FullView>
          <FloorSection>
            <StyledMap ref={svgRef} viewBox="0 0 703 921" />
            <FloorLabel>5층</FloorLabel>
          </FloorSection>
          <Divider />
          <FloorSection>
            <StyledMap ref={svgRef} viewBox="0 0 703 921" />
            <FloorLabel>6층</FloorLabel>
          </FloorSection>
        </FullView>
      ) : (
        <SingleView>
          <StyledMap ref={svgRef} viewBox="0 0 703 921" />
          <FloorLabel>{currentFloor}층</FloorLabel>
        </SingleView>
      )}
    </Wrapper>
  );
};

export default MapContainer;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: calc(100vh - (40px + 60px));
  background-color: ${({ theme }) => theme.colors.B00};
`;

const FullView = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const SingleView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const FloorSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Divider = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.B30};
  margin: 0 20px;
`;

const StyledMap = styled(Map5)`
  width: 70%;
  height: 70%;
  max-width: 703px;
  object-fit: contain;
`;

const FloorLabel = styled.div`
  position: absolute;
  top: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.B60};
  background-color: ${({ theme }) => theme.colors.B00};
  padding: 5px 15px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
