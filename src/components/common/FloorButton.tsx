import { ReactNode } from "react";
import styled from "styled-components";

const FloorButton = ({
  children,
  currentFloor,
  setCurrentFloor,
  floor,
}: {
  children: ReactNode;
  currentFloor: string;
  setCurrentFloor: React.Dispatch<React.SetStateAction<string>>;
  floor: string;
}) => {
  return (
    <Wrapper
      onClick={() => setCurrentFloor(floor)}
      isselected={currentFloor === floor}
    >
      {children}
    </Wrapper>
  );
};

export default FloorButton;

const Wrapper = styled.button<{ isselected: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  background-color: ${({ theme, isselected }) =>
    isselected ? theme.colors.B50 : theme.colors.WHITE};

  border: 0;
  border-radius: 6px;
  cursor: pointer;

  padding: 10px 15px;

  color: ${({ theme, isselected }) =>
    isselected ? theme.colors.WHITE : theme.colors.B40};
  font-family: ${({ theme }) => theme.fonts.body4["font-family"]};
  font-size: ${({ theme }) => theme.fonts.body4["font-size"]};
  font-weight: ${({ theme }) => theme.fonts.body4["font-weight"]};
  &:hover {
    background-color: ${({ theme }) => theme.colors.B50};
    color: ${({ theme }) => theme.colors.WHITE};
  }
`;
