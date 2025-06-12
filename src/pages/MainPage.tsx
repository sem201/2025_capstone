import CustomList from "@components/customList/customList";
import Header from "@components/header/Header";
import LogFrame from "@components/logFrame/LogFrame";
import MapHeader from "@components/mainview/MapHeader";
import MapContainer from "@components/map/MapContainer";
import LogPopup from "@components/modal/LogPopup";
import { useState } from "react";
import styled from "styled-components";
import ConfirmPopup from "@components/modal/ConfirmPopup";
import EmergencyLogFrame from "@components/logFrame/EmergencyLogFrame";
import LogFrameDetailEme from "@components/modal/LogFrameDetailEme";
import { useWebSocket } from "../hooks/useWebSocket";
import CheckLocate from "@components/modal/CheckLocate";
import { useModalStore } from "@store/modalStore";

const MainPage = () => {
  const [currentFloor, setCurrentFloor] = useState("전체");

  const {
    isConfirmVisible,
    isLogFrameDetailEme,
    isLocateVisible,
    activePopups,
  } = useModalStore();

  useWebSocket();

  return (
    <>
      <Header />
      <Container>
        <SideBar>
          <EmergencyLogFrame />
          <LogFrame />
          <CustomList />
        </SideBar>
        <MainView>
          <MapHeader
            currentFloor={currentFloor}
            setCurrentFloor={setCurrentFloor}
          />
          <MapContainer currentFloor={currentFloor} />
          <PopupStack>
            {activePopups.map((popup, index) => (
              <LogPopup
                key={popup.emergencyId}
                user={popup}
                style={{
                  bottom: `${20 + index * 50}px`,
                  left: `${20 + index * 50}px`,
                  zIndex: index,
                }}
              />
            ))}
          </PopupStack>
        </MainView>
      </Container>
      {isConfirmVisible && (
        <>
          <DarkBackground>
            <ConfirmPopup />
          </DarkBackground>
        </>
      )}
      {isLogFrameDetailEme && <LogFrameDetailEme />}
      {isLocateVisible && <CheckLocate />}
    </>
  );
};

export default MainPage;

const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 4fr;
  width: 100%;
  height: calc(100vh - 40px);
`;

const SideBar = styled.section`
  min-width: 380px;
  max-width: 450px;

  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 1fr 2.5fr;

  border-right: 1px solid ${({ theme }) => theme.colors.B10};
`;

const MainView = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const PopupStack = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DarkBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
