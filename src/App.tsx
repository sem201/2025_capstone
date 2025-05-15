import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import MainPage from "@pages/MainPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
