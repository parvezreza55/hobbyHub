import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllGroup from "../Components/AllGroup";
import CreateGroup from "../Components/CreateGroup";
import MyGroup from "../Components/MyGroup";
import AuthLayOut from "../Layouts/AuthLayOut";
import SignUp from "../Pages/SignUp";
import LogIn from "../Pages/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allgroup",
        element: <AllGroup></AllGroup>,
      },
      {
        path: "/create-group",
        element: <CreateGroup></CreateGroup>,
      },
      {
        path: "/my-group",
        element: <MyGroup></MyGroup>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayOut></AuthLayOut>,
    children: [
      {
        path: "/auth/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/auth/login",
        element: <LogIn></LogIn>,
      },
    ],
  },
]);
export default router;
