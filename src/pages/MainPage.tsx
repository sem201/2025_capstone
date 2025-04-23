import CustomList from "@components/customList/customList";
import Header from "@components/header/Header";
import LogFrame from "@components/logFrame/LogFrame";
import MapHeader from "@components/mainview/MapHeader";
import MapContainer from "@components/map/MapContainer";
import { useState } from "react";
import styled from "styled-components";
const MainPage = () => {
  const [currentFloor, setCurrentFloor] = useState("전체");
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
        </MainView>
      </Container>
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
`;
