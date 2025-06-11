import { UserLocation } from "@custom-types/types";

export function getCenterXY(
  location: UserLocation,
  svgRef: React.RefObject<SVGSVGElement | null>
): { x: number; y: number } | undefined {
  if (!svgRef.current) return undefined;

  const group = svgRef.current.querySelector(`#${location.place}`);
  if (!group) return undefined;

  const targetRect = group.querySelector(`[id="${location.x}-${location.y}"]`);
  if (!targetRect) return undefined;
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
}
