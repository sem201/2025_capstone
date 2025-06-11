import { useEffect, useRef } from "react";
import { useUserStore } from "@store/userStore";
import { useModalStore } from "@store/modalStore";
import { EmergencyEvent } from "../types/types";

export function useWebSocket() {
  const webSocket = useRef<WebSocket | null>(null);
  const setUserLocations = useUserStore((state) => state.setUserLocations);
  const updateUserLocation = useUserStore((state) => state.updateUserLocation);
  const setActivePopups = useModalStore((state) => state.setActivePopups);
  const activePopups = useModalStore((state) => state.activePopups);

  useEffect(() => {
    webSocket.current = new WebSocket(
      `${import.meta.env.VITE_SOCKET_URL}patient/location`
    );
    webSocket.current.onopen = () => {
      console.log("websocket 연결 성공");
    };
    webSocket.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      console.log("웹소켓 데이터", e.data);

      // 위치 업데이트 데이터 처리
      if (Array.isArray(data)) {
        setUserLocations(data);
      } else if (typeof data === "object" && data !== null) {
        // 단일 위치 업데이트
        if ("ssid" in data) {
          updateUserLocation(data);
        }
        // 이벤트 데이터 처리
        else if ("emergencyId" in data) {
          const eventData = data as EmergencyEvent;
          if (
            !activePopups.some(
              (popup) => popup.emergencyId === eventData.emergencyId
            )
          ) {
            setActivePopups([...activePopups, eventData]);
          }
        }
      }
    };
    return () => {
      webSocket.current?.close();
    };
  }, [setUserLocations, setActivePopups, activePopups]);
}
