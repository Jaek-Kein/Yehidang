import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainPage from './View/mainPage'
import Desc from './View/Desc'
import styled from '@emotion/styled'

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainPage/>
  },
  {
    path:"/description",
    element:<Desc/>
  },
])

const Wrapper = styled.div`
  padding-bottom: 50px;
`

function App() {

  return (
    <Wrapper>
      <RouterProvider router={router}/>
    </Wrapper>
  )
}

export default App
