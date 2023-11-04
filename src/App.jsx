import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Main from "./pages/Main";
import Error from "./pages/Error";
import { mainLoader } from "./pages/Main";
import { logoutAction } from "./acrtions/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: mainLoader,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
        loader: dashboardLoader,
        errorElement: <Error></Error>
      }, {
        path: '/logout',
        action: logoutAction
      }
    ]
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
