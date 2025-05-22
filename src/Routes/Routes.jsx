import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllGroup from "../Components/AllGroup";
import CreateGroup from "../Components/CreateGroup";
import MyGroup from "../Components/MyGroup";

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
]);
export default router;
