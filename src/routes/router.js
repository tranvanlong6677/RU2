import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../components/ErrorHandle/ErrorPage.jsx'
import Admin from '../components/Admin/Admin.jsx'
import User from '../components/User/User.jsx'
import App from '../App';
import HomePage from "../components/Home/HomePage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/admin",
        element: <Admin/>,
      },
      {
        path: "/users",
        element: <User/>,
      },
    ],
  },
  
]);

export default router;
