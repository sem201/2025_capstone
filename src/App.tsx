import { router } from "./router";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import MainPage from "@pages/MainPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <RouterProvider router={router}/> */}
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
