import { getCenterXY } from "../utils/getCenterXY";
import { UserLocation } from "@custom-types/types";

interface LocationInfo {
  place: string;
  floor: number;
  x: number;
  y: number;
  name: string;
  type: "emergency" | "help";
}

export function useDisplayLocation(
  location: LocationInfo | null,
  svgRef: React.RefObject<SVGSVGElement | null>
) {
  if (!svgRef.current || !location) return;

  const existingDots = svgRef.current.querySelectorAll(".location-dot");
  if (existingDots.length > 0) return;

  const center = getCenterXY(location as UserLocation, svgRef);
  if (!center) return;
  const { x, y } = center;

  const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute("cx", `${x}`);
  dot.setAttribute("cy", `${y}`);
  dot.setAttribute("r", "10");
  dot.classList.add("location-dot");
  dot.setAttribute("stroke", "white");
  dot.setAttribute("stroke-width", "2");
  dot.setAttribute(
    "fill",
    `${location.type === "emergency" ? "#FF594D" : "#FFA826"}`
  );
  dot.setAttribute(
    "filter",
    `drop-shadow(0 0 8px ${
      location.type === "emergency" ? "rgb(255, 17, 0)" : "#FFA826"
    })`
  );

  dot.classList.add("blink-dot");
  svgRef.current.appendChild(dot);
}
