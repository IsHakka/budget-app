import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    loader: dashboardLoader
  },
  {
    path: "*",
    element: <Error></Error>
  }
]);


function App() {

  return (
    <div className="App">
      <RouterProvider
        router={router}
      />
    </div>
  )
}

export default App
