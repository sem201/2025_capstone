import { createBrowserRouter } from "react-router-dom";
import TestPage from "@pages/TestPage";
import MainPage from "@pages/MainPage";

export const router = createBrowserRouter([
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
]);
