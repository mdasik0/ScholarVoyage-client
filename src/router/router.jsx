import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Pages/HomePage/Home/Home";
import Colleges from "../components/Pages/CollegesPage/Colleges/Colleges";
import Admission from "../components/Pages/AdmissionPage/Admission/Admission";
import MyCollege from "../components/Pages/MyCollegePage/MyCollege/MyCollege";
import SignIn from "../components/Pages/AuthenticationPages/SignIn/SignIn";
import SignUp from "../components/Pages/AuthenticationPages/SignUp/SignUp";
import ForgotPassword from "../components/Pages/AuthenticationPages/ForgotPassword/ForgotPassword";
import Details from "../components/Shared/Details/Details";
import Profile from "../components/Pages/Profile/Profile";
import EditProfile from "../components/Pages/Profile/EditProfile/EditProfile";
import AdmissionForm from "../components/Pages/AdmissionPage/AdmissionForm/AdmissionForm";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "Colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "Admission",
        element: <Admission></Admission>,
      },
      {
        path: "MyCollege",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "forgotPassword",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "editProfile",
        element: <EditProfile></EditProfile>,
      },
      {
        path: "/AdmissionForm/:id",
        element: <AdmissionForm></AdmissionForm>,
      },
    ],
  },
]);

export default router;
