import { useEffect, useRef } from "react";
import { useUserStore } from "@store/userStore";

export function useWebSocket() {
  const webSocket = useRef<WebSocket | null>(null);
  const setUserLocations = useUserStore((state) => state.setUserLocations);
  const updateUserLocation = useUserStore((state) => state.updateUserLocation);

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

      if (Array.isArray(data)) {
        setUserLocations(data);
      } else if (typeof data === "object" && data !== null) {
        updateUserLocation(data);
      }
    };
    return () => {
      webSocket.current?.close();
    };
  }, [setUserLocations]);
}
