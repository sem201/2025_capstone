import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  width: 550px;
  height: 400px;

  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 0 0 7.2px 7.2px;

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

export const MapContainer = styled.section``;
