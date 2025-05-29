import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Desc from "./View/Desc";
import styled from "@emotion/styled";
import MainTemp from "./View/maintemp";
import MainTemp2 from "./View/mainTemp2";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainTemp2 />,
        },
        {
            path: "/description",
            element: <Desc />,
        },
        {
            path:"/temp",
            element: <MainTemp/>,
        },
        {
            path:"/temp2",
            element: <MainTemp2/>,
        }
    ],
    {
        basename: "/Yehidang/",
    }
);

const Wrapper = styled.div`
    min-height: 100vh;
`;

function App() {
    return (
        <Wrapper>
            <RouterProvider router={router} />
        </Wrapper>
    );
}

export default App;
