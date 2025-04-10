import Header from "@components/header/Header";
import LogFrame from "@components/logFrame/LogFrame";
import MapHeader from "@components/mainview/MapHeader";
import styled from "styled-components";
const MainPage = () => {
  return (
    <>
      <Header />
      <Container>
        <SideBar>
          <LogFrame />
          <LogFrame />
          <div style={{ border: "1px solid black" }}></div>
        </SideBar>
        <MainView>
          <MapHeader />
          <div></div>
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
  > div {
    width: calc(100% - 2px);
    min-width: 400px;
    height: calc(100% - 2px);
    /* border: 1px solid black; */
  }
`;

const SideBar = styled.section`
  min-width: 330px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 1fr 2.5fr;
`;

const MainView = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
