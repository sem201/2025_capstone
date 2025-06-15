import { UserLocation } from "@custom-types/types";
import { useEffect } from "react";
import { getCenterXY } from "../utils/getCenterXY";

export function useUpdateUser(
  userLocations: UserLocation[],
  svgRef: React.RefObject<SVGSVGElement | null>,
  currentFloor: string,
  onDotClick?: (user: UserLocation) => void,
  selectedUserId?: string | null
) {
  useEffect(() => {
    if (!svgRef.current) return;

    const existingDots = svgRef.current.querySelectorAll(".location-dot");
    const nameTexts = svgRef.current.querySelectorAll(".location-name-text");
    const nameBgs = svgRef.current.querySelectorAll(".location-name-bg");

    existingDots.forEach((dot) => dot.remove());
    nameTexts.forEach((text) => text.remove());
    nameBgs.forEach((bg) => bg.remove());
    console.log(userLocations);
    userLocations.map((location) => {
      if (location.type == "delete") return;
      // "전체"가 아닐 때만 층수 체크
      if (currentFloor !== "전체") {
        if (
          (currentFloor === "5" && location.floor !== 5) ||
          (currentFloor === "6" && location.floor !== 6)
        )
          return;
      }

      const center = getCenterXY(location, svgRef);
      if (!center) return;
      const { x, y } = center;
      const dot = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      dot.setAttribute("data-id", location.patientId);
      dot.setAttribute("cx", `${x}`);
      dot.setAttribute("cy", `${y}`);
      dot.setAttribute("r", "12");
      if (location.type == "emergency") {
        dot.setAttribute("fill", "#FF594D");
        dot.classList.add("blink-dot");
      } else if (location.type == "help") {
        dot.setAttribute("fill", "#FFA826");
        dot.classList.add("blink-dot");
      } else if (location.type == "active") {
        dot.setAttribute("fill", "#3151B3");
      }
      dot.setAttribute("border", "1px");
      dot.classList.add("location-dot");
      dot.setAttribute("stroke", "white");
      dot.setAttribute("stroke-width", "2");

      // 선택된 사용자에 대한 filter 설정
      if (selectedUserId === location.id && location.type !== "active") {
        let shadowColor = "#3151B3";
        if (location.type === "emergency") shadowColor = "rgb(255, 17, 0)";
        else if (location.type === "help") shadowColor = "#FFA826";
        dot.setAttribute("filter", `drop-shadow(0 0 16px ${shadowColor})`);
        dot.setAttribute("r", "16");
      }

      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        dot.setAttribute("r", "16");
        if (onDotClick) onDotClick(location);
      });

      const labelWidth = Math.max(60, location.name.length * 16);
      const labelHeight = 24;
      const labelRect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      labelRect.setAttribute("x", `${x - labelWidth / 2}`);
      labelRect.setAttribute("y", `${y + 14}`);
      labelRect.setAttribute("width", `${labelWidth}`);
      labelRect.setAttribute("height", `${labelHeight}`);
      labelRect.setAttribute("rx", "4");
      labelRect.setAttribute("fill", "#222");
      labelRect.setAttribute("class", "location-name-bg");

      const labelText = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      labelText.setAttribute("x", `${x}`);
      labelText.setAttribute("y", `${y + 31}`);
      labelText.setAttribute("fill", "#fff");
      labelText.setAttribute("font-size", "16");
      labelText.setAttribute("font-weight", "bold");
      labelText.setAttribute("text-anchor", "middle");
      labelText.textContent = location.name;
      labelText.setAttribute("class", "location-name-text");

      svgRef.current?.appendChild(dot);
      svgRef.current?.appendChild(labelRect);
      svgRef.current?.appendChild(labelText);
    });
  }, [userLocations, svgRef, currentFloor, onDotClick, selectedUserId]);
}
