import "./App.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./routes/Root"
import Timer from "./pages/timer/Timer"
import NoteTimer from "./components/notetimer/NoteTimer"

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
      path: "/:test",
      element: <Timer />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
