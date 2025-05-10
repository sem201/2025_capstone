import CustomList from "@components/customList/customList";
import Header from "@components/header/Header";
import LogFrame from "@components/logFrame/LogFrame";
import MapHeader from "@components/mainview/MapHeader";
import MapContainer from "@components/map/MapContainer";
import LogPopup from "@components/modal/LogPopup";
import { LogType } from "../types/types";
import { useState } from "react";
import styled from "styled-components";
import ConfirmPopup from "@components/modal/ConfirmPopup";
const MainPage = () => {
  const [currentFloor, setCurrentFloor] = useState("전체");
  const [isLogPopupVisible, setIsLogPopupVisible] = useState(true);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const tmp: LogType = {
    emergency: true,
    problem: "널스콜",
    name: "홍길동",
    locate: "5401호",
    time: "2023-10-10 12:00",
  };
  return (
    <>
      <Header />
      <Container>
        <SideBar>
          <LogFrame />
          <LogFrame />
          <CustomList />
        </SideBar>
        <MainView>
          <MapHeader
            currentFloor={currentFloor}
            setCurrentFloor={setCurrentFloor}
          />
          <MapContainer currentFloor={currentFloor} />
          {isLogPopupVisible && (
            <LogPopup
              temp={tmp}
              onOpenConfirm={() => setIsConfirmVisible(true)}
              closePopup={() => setIsLogPopupVisible(false)}
            />
          )}
        </MainView>
      </Container>
      {isConfirmVisible && (
        <>
          <DarkBackground>
            <ConfirmPopup
              temp={tmp}
              closePopup={() => setIsConfirmVisible(false)}
            />
          </DarkBackground>
        </>
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

const DarkBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
