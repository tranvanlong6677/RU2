import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../components/ErrorHandle/ErrorPage.jsx'
import Admin from '../components/Admin/Admin.jsx'
import User from '../components/User/User.jsx'
import App from '../App';
import HomePage from "../components/Home/HomePage.jsx";
import ManageUser from "../components/Admin/Content/ManageUser.jsx";
import Dashboard from "../components/Admin/Content/Dashboard.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      
      {
        path: "/users",
        element: <User/>,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin/>,
    children:[
      {
        path: "manage-user",
        element: <ManageUser/>,
      },
      {
        index:true,
        path: "dashboard",
        element: <Dashboard/>,
      }
    ]
  },
  
]);

export default router;
