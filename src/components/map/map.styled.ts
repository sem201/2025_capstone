import styled from "styled-components";
import Map5 from "@assets/maplayer/map_group_5.svg?component";
import Map6 from "@assets/maplayer/map_group_6.svg?component";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: calc(100vh - (40px + 60px));
  background-color: ${({ theme }) => theme.colors.B00};
`;

export const FullView = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SingleView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const FloorSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Divider = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.B30};
  margin: 0 20px;
`;

export const StyledMap5 = styled(Map5)`
  width: 70%;
  height: 70%;
  max-width: 703px;
  object-fit: contain;
`;

export const StyledMap6 = styled(Map6)`
  width: 70%;
  height: 70%;
  max-width: 703px;
  object-fit: contain;
`;

export const FloorLabel = styled.div`
  position: absolute;
  top: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.B60};
  background-color: ${({ theme }) => theme.colors.B00};
  padding: 5px 15px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
