import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Home from "./pages/home/Home"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./routes/Root"

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/:uuidUrl",
      element: <Root />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
