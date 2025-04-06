import { useEffect, useRef } from "react";
import TestSVG  from "@assets/images/Frame_218.svg?component";

type Position = {
  row: number;
  col : number;
};

interface TestProps{
  currentPositions : Position[];
}

const CELL_SIZE = 9;


const Test = ({currentPositions}:TestProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(()=>{
    if(!svgRef.current) return;

    const rects = svgRef.current.querySelectorAll("rect");

    rects.forEach((rect)=>{
      const x = Number(rect.getAttribute("x") ?? "0");
      const y = Number(rect.getAttribute("y")?? "0");

      const col = x /CELL_SIZE +1;
      const row = y/ CELL_SIZE +1;
      const isCurrent = currentPositions.some(
        (pos) => pos.row === row && pos.col === col
      );
      rect.setAttribute("fill", isCurrent ? "red" : "#D9D9D9");
    });
  },[currentPositions])
  return (
    <div>
      <TestSVG ref={svgRef}/>
    </div>
  );
};

export default Test;
