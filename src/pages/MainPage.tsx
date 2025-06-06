import CustomList from "@components/customList/customList";
import Header from "@components/header/Header";
import LogFrame from "@components/logFrame/LogFrame";
import MapHeader from "@components/mainview/MapHeader";
import MapContainer from "@components/map/MapContainer";
import LogPopup from "@components/modal/LogPopup";
import { UserLocation } from "../types/types";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ConfirmPopup from "@components/modal/ConfirmPopup";
import EmergencyLogFrame from "@components/logFrame/EmergencyLogFrame";
import LogFrameDetailEme from "@components/modal/LogFrameDetailEme";
import { useWebSocket } from "../hooks/useWebSocket";
import { useUserStore } from "@store/userStore";
import CheckLocate from "@components/modal/CheckLocate";

const MainPage = () => {
  const [currentFloor, setCurrentFloor] = useState("전체");
  const [_isLogPopupVisible, setIsLogPopupVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isLogFrameDetailEme, setIsLogFrameDetailEme] = useState(false);
  const [isEmergency, setIsEmergency] = useState(false);
  const [activePopups, setActivePopups] = useState<UserLocation[]>([]);
  const [isLocateVisible, setIsLocateVisible] = useState(true);
  const userLocations = useUserStore((state) => state.userLocations);

  useWebSocket();
  useEffect(() => {
    userLocations.forEach((user) => {
      if (
        (user.type === "emergency" || user.type === "help") &&
        !activePopups.some((popup) => popup.id === user.id)
      ) {
        setActivePopups((prev) => [...prev, user]);
      }
    });
  }, [userLocations]);

  const handleClosePopup = (userId: string) => {
    setActivePopups((prev) => prev.filter((popup) => popup.id !== userId));
  };

  return (
    <>
      <Header />
      <Container>
        <SideBar>
          <EmergencyLogFrame
            openPopup={() => setIsLogPopupVisible(true)}
            openDetail={() => {
              setIsLogFrameDetailEme(true);
              setIsEmergency(true);
            }}
          />
          <LogFrame
            openPopup={() => setIsLogPopupVisible(true)}
            openDetail={() => {
              setIsLogFrameDetailEme(true);
              setIsEmergency(false);
            }}
          />
          <CustomList />
        </SideBar>
        <MainView>
          <MapHeader
            currentFloor={currentFloor}
            setCurrentFloor={setCurrentFloor}
          />
          <MapContainer currentFloor={currentFloor} />
          <PopupStack>
            {activePopups.map((user, index) => (
              <LogPopup
                key={user.id}
                user={user}
                onOpenConfirm={() => setIsConfirmVisible(true)}
                closePopup={() => handleClosePopup(user.id)}
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
            <ConfirmPopup
              user={activePopups[0]}
              closePopup={() => setIsConfirmVisible(false)}
              submitPopup={() => {
                setIsConfirmVisible(false);
                handleClosePopup(activePopups[0].id);
              }}
            />
          </DarkBackground>
        </>
      )}
      {isLogFrameDetailEme && (
        <LogFrameDetailEme
          closeDetail={() => setIsLogFrameDetailEme(false)}
          emergency={isEmergency}
        />
      )}
      {isLocateVisible && (
        <CheckLocate closeLocate={() => setIsLocateVisible(false)} />
      )}
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
