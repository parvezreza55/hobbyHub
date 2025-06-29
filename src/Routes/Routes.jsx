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
import DetailsGroups from "../Components/DetailsGroups";
import ErrorPage from "../Components/ErrorPage";
import DashBoardLaout from "../Layouts/DashBoardLaout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashAllgroup from "../Pages/DashComponents/DashAllgroup";
import DashMyGroups from "../Pages/DashComponents/DashMyGroups";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: (
          <>
            <div className="text-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          </>
        ),
        loader: () => fetch("http://localhost:3000/hobbies"),

        element: <Home></Home>,
      },
      {
        path: "/allgroup",
        errorElement: <ErrorPage></ErrorPage>,
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
        path: "/allgroup/:id",
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: (
          <>
            <div className="text-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          </>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/hobbies/${params.id}`),
        element: (
          <PrivateRoutes>
            <DetailsGroups></DetailsGroups>
          </PrivateRoutes>
        ),
      },
      {
        path: "/create-group",
        errorElement: <ErrorPage></ErrorPage>,
        element: (
          <PrivateRoutes>
            <CreateGroup></CreateGroup>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-group/:id",
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: (
          <>
            <div className="text-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          </>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/hobbies/${params.id}`),
        element: (
          <PrivateRoutes>
            <UpdateGroup></UpdateGroup>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-group",
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: (
          <>
            <div className="text-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          </>
        ),
        loader: () => fetch("http://localhost:3000/hobbies"),
        element: (
          <PrivateRoutes>
            <MyGroup></MyGroup>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/auth",
    errorElement: <ErrorPage></ErrorPage>,
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
  {
    path: "/",
    element: <DashBoardLaout></DashBoardLaout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        errorElement: <ErrorPage></ErrorPage>,
        element: (
          <PrivateRoutes>
            <Dashboard></Dashboard>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/allgroup",
        hydrateFallbackElement: (
          <>
            <div className="text-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          </>
        ),
        errorElement: <ErrorPage></ErrorPage>,
        element: <DashAllgroup></DashAllgroup>,
      },
      {
        path: "/dashboard/my-group",
        hydrateFallbackElement: (
          <>
            <div className="text-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          </>
        ),
        errorElement: <ErrorPage></ErrorPage>,
        element: <DashMyGroups></DashMyGroups>,
      },
    ],
  },
]);
export default router;
