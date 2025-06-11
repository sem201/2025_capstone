import styled from "styled-components";
import Map5 from "@assets/maplayer/map_group_5.svg?component";
import Map6 from "@assets/maplayer/map_group_6.svg?component";

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -30%);
  width: 550px;
  height: 600px;

  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 7.2px;

  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.25);
`;
export const ContentContainer = styled.div`
  box-sizing: border-box;
  padding: 1em;
  width: 100%;
  /* height: 100%; */
`;

export const UserContainer = styled.section`
  box-sizing: border-box;
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  ${({ theme }) => theme.fonts.small};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.B10};
  color: #000;
  span {
    color: ${({ theme }) => theme.colors.B50};
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const MapContainer = styled.section`
  width: 100%;
  height: 100%;
`;

export const StyledMap5 = styled(Map5)`
  width: 70%;
  height: 70%;
  max-width: 703px;
  transform-origin: center;
  object-fit: contain;
  overflow: hidden;
`;

export const StyledMap6 = styled(Map6)`
  width: 70%;
  height: 70%;
  max-width: 703px;
  transform-origin: center;
  object-fit: contain;
  overflow: hidden;
`;
