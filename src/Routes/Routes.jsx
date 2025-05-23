import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllGroup from "../Components/AllGroup";
import CreateGroup from "../Components/CreateGroup";
import MyGroup from "../Components/MyGroup";
import AuthLayOut from "../Layouts/AuthLayOut";
import SignUp from "../Pages/SignUp";
import LogIn from "../Pages/LogIn";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import UpdateGroup from "../Components/UpdateGroup";

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
        hydrateFallbackElement: (
          <>
            <div className="text-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          </>
        ),
        loader: () => fetch("http://localhost:3000/hobbies"),
        element: <AllGroup></AllGroup>,
      },
      {
        path: "/create-group",
        element: (
          <PrivateRoutes>
            <CreateGroup></CreateGroup>
          </PrivateRoutes>
        ),
      },
      {
        path: "/create-group/update",
        element: (
          <PrivateRoutes>
            <UpdateGroup></UpdateGroup>
          </PrivateRoutes>
        ),
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
