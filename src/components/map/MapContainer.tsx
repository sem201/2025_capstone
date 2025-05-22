import { useEffect, useRef } from "react";
import styled from "styled-components";
import Map5 from "@assets/maplayer/map_group_5.svg?component";
import Map6 from "@assets/maplayer/map_group_6.svg?component";
import { UserLocation } from "@custom-types/types";
import { useUserStore } from "../../store/userStore";

const MapContainer = ({ currentFloor }: { currentFloor: string }) => {
  const svgRef5 = useRef<SVGSVGElement>(null);
  const svgRef6 = useRef<SVGSVGElement>(null);
  const userLocations = useUserStore(
    (state: { userLocations: UserLocation[] }) => state.userLocations
  );
  const setUserLocations = useUserStore((state) => state.setUserLocations);
  const webSocket = useRef<WebSocket | null>(null);

  useEffect(() => {
    webSocket.current = new WebSocket(
      `${import.meta.env.VITE_SOCKET_URL}patient/location`
    );
    webSocket.current.onopen = () => {
      console.log("websocket 연결 성공");
    };
    webSocket.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      const userLocations: UserLocation[] = data.map((item: UserLocation) => ({
        id: item.id,
        name: item.name,
        place: item.place,
        ssid: item.ssid,
        x: item.x,
        y: item.y,
      }));
      setUserLocations(userLocations);
    };
  }, []);
  useEffect(() => {
    if (!svgRef5.current) return;

    const existingDots = svgRef5.current.querySelectorAll(".location-dot");
    existingDots.forEach((dot) => dot.remove());

    userLocations.forEach((location) => {
      console.log(location);
      const group = svgRef5.current?.querySelector(`#${location.place}`);
      if (group) {
        const targetRect = group.querySelector(
          `[id="${location.x}-${location.y}"]`
        );

        if (targetRect) {
          const x = Number(targetRect.getAttribute("x") ?? "0");
          const y = Number(targetRect.getAttribute("y") ?? "0");
          const width = Number(targetRect.getAttribute("width") ?? "0");
          const height = Number(targetRect.getAttribute("height") ?? "0");
          const transformValue = targetRect.getAttribute("transform");
          let centerX, centerY;

          if (!transformValue) {
            centerX = x + width / 2;
            centerY = y + height / 2;
          } else if (transformValue.startsWith("rotate(90")) {
            centerX = x - width / 2;
            centerY = y + height / 2;
          } else if (transformValue.startsWith("rotate(-90")) {
            centerX = x + width / 2;
            centerY = y - height / 2;
          } else {
            centerX = x - width / 2;
            centerY = y - height / 2;
          }

          const dot = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
          );
          dot.setAttribute("cx", centerX.toString());
          dot.setAttribute("cy", centerY.toString());
          dot.setAttribute("r", "10");
          dot.setAttribute("fill", "blue");
          dot.setAttribute("border", "1px");
          dot.classList.add("location-dot");
          dot.setAttribute("stroke", "white");
          dot.setAttribute("stroke-width", "2");

          const text = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
          );
          const nameText = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
          );
          nameText.setAttribute("x", centerX.toString());
          nameText.setAttribute("y", (centerY + 20).toString());
          nameText.setAttribute("fill", "black");
          nameText.setAttribute("font-size", "12");
          nameText.setAttribute("text-anchor", "middle");
          nameText.textContent = location.name;

          svgRef5.current?.appendChild(dot);
          svgRef5.current?.appendChild(nameText);
        }
      }
    });
  }, [userLocations]);

  return (
    <Wrapper>
      {currentFloor === "전체" ? (
        <FullView>
          <FloorSection>
            <StyledMap5 ref={svgRef5} viewBox="0 0 783 921" />
            <FloorLabel>5층</FloorLabel>
          </FloorSection>
          <Divider />
          <FloorSection>
            <StyledMap6 ref={svgRef6} viewBox="0 0 891 577" />
            <FloorLabel>6층</FloorLabel>
          </FloorSection>
        </FullView>
      ) : (
        <SingleView>
          {currentFloor == "5" ? (
            <StyledMap5 ref={svgRef5} />
          ) : (
            <StyledMap6 ref={svgRef6} viewBox="0 0 891 577" />
          )}
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

const StyledMap5 = styled(Map5)`
  width: 70%;
  height: 70%;
  max-width: 703px;
  object-fit: contain;
`;

const StyledMap6 = styled(Map6)`
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
