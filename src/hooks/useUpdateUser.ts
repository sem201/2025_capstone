import { UserLocation } from "@custom-types/types";
import { useEffect } from "react";
import { getCenterXY } from "./getCenterXY";

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

    userLocations.map((location) => {
      if (location.type == "delete") return;

      const center = getCenterXY(location, svgRef);
      if (!center) return;
      const { x, y } = center;
      const dot = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      dot.setAttribute("data-id", location.id);
      dot.setAttribute("cx", `${x}`);
      dot.setAttribute("cy", `${y}`);
      dot.setAttribute("r", "10");
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

      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        let shadowColor = "#3151B3";
        if (location.type === "emergency") shadowColor = "rgb(255, 17, 0)";
        else if (location.type === "help") shadowColor = "#FFA826";
        dot.setAttribute("filter", `drop-shadow(0 0 8px ${shadowColor})`);
        if (onDotClick) onDotClick(location);
      });

      // 말풍선이 닫히거나 다른 점이 선택되면 filter 제거
      if (!selectedUserId || selectedUserId !== location.id) {
        dot.removeAttribute("filter");
      }

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
    // console.log("현재 위치", userLocations);
  }, [userLocations, svgRef, currentFloor, onDotClick, selectedUserId]);
}
