import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import styled from "@emotion/styled";
import MainView from "./View/mainView";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./style/Global";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainView />,
        },
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
            <Global styles={GlobalStyles} />
            <RouterProvider router={router} />
        </Wrapper>
    );
}

export default App;
