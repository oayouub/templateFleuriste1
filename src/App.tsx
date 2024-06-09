import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Navbar } from "./components/Navbar"

const router = createBrowserRouter([
  
    {
      path: '/',
      element: <Home />,
    },
    
  
])

function App() {

  return (
    <div className="app">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
