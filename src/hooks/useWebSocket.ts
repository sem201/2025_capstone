import { UserLocation } from "@custom-types/types";
import { useEffect, useRef } from "react";

interface UseWebSocketProps {
  setUserLocations: React.Dispatch<React.SetStateAction<UserLocation[]>>;
}

export function useWebSocket({ setUserLocations }: UseWebSocketProps) {
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
      console.log("웹소켓 데이터", e);
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
    return () => {
      webSocket.current?.close();
    };
  }, [setUserLocations]);
}
