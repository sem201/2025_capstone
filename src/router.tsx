import { createBrowserRouter } from "react-router-dom"
import { DefaultLayout } from "./layout/DefaultLayout"
import TestPage from "@pages/TestPage"


export const router = createBrowserRouter([
    {
        path:"/",
        element:<DefaultLayout/>,
        children:[
            {path:"", element:<TestPage/>}
        ]
    }
])