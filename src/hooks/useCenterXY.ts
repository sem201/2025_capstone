import { UserLocation } from "@custom-types/types";
import { useCallback } from "react";

export function useCenterXY() {
  const getCenterXY = useCallback(
    (location: UserLocation, svgRef: React.RefObject<SVGSVGElement | null>) => {
      if (!svgRef.current) return { x: 0, y: 0 };

      const group = svgRef.current.querySelector(`#${location.place}`);
      if (!group) return { x: 0, y: 0 };

      const targetRect = group.querySelector(
        `[id="${location.x}-${location.y}"]`
      );
      if (!targetRect) return { x: 0, y: 0 };
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

      return { x: centerX, y: centerY };
    },
    []
  );

  return getCenterXY;
}
