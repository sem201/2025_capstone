import Header from "@components/header/Header";
import LogFrame from "@components/logFrame/LogFrame";
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
        <div></div>
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

const SideBar = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 1fr 2.5fr;
`;
