import "./App.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./routes/Root"
import Timer from "./pages/timer/Timer"
import NewPage from "./pages/newpage/NewPage"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/:id",
      element: <Timer />,
    },
    {
      path: "/newpage",
      element: <NewPage />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
