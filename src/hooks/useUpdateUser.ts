import { UserLocation } from "@custom-types/types";
import { useEffect } from "react";
import { getCenterXY } from "./getCenterXY";

export function useUpdateUser(
  userLocations: UserLocation[],
  svgRef: React.RefObject<SVGSVGElement | null>,
  currentFloor: string
) {
  useEffect(() => {
    if (!svgRef.current) return;

    const existingDots = svgRef.current.querySelectorAll(".location-dot");
    const nameTexts = svgRef.current.querySelectorAll(".location-name-text");

    existingDots.forEach((dot) => dot.remove());
    nameTexts.forEach((text) => text.remove());
    userLocations.map((location) => {
      if (location.type == "delete") {
        return;
      }

      const center = getCenterXY(location, svgRef);
      if (!center) {
        return;
      }
      const { x, y } = center;
      const dot = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
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

      const nameText = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      nameText.setAttribute("class", "location-name-text");
      nameText.setAttribute("x", `${x}`);
      nameText.setAttribute("y", `${y + 20}`);
      nameText.setAttribute("fill", "black");
      nameText.setAttribute("font-size", "12");
      nameText.setAttribute("text-anchor", "middle");
      nameText.textContent = location.name;

      svgRef.current?.appendChild(dot);
      svgRef.current?.appendChild(nameText);
    });
    // console.log("현재 위치", userLocations);
  }, [userLocations, svgRef, currentFloor]);
}
