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
  {
    path: "/sensors/camera",
    element: <CameraPage />,
  },
  {
    path: "/sensors/network",
    element: <NetworkPage />,
  },
  {
    path: "/sensors/accelerometer",
    element: <AccelerometerPage />,
  },
  {
    path: "/sensors/storage",
    element: <StoragePage />,
  },
  {
    path: "/sensors/gyroscope",
    element: <GyroscopePage />,
  },
  {
    path: "/sensors/proximity",
    element: <ProximityPage />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
