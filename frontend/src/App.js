import { createBrowserRouter, RouterProvider } from "react-router-dom"

import CheckmyDevicePage from "./pages/checkmyDevice.page"
import HomePage from "./pages/home.page"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/check-my-device",
    element: <CheckmyDevicePage />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
