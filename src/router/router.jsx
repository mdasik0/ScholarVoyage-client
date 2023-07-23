import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Pages/HomePage/Home/Home";
import Colleges from "../components/Pages/CollegesPage/Colleges/Colleges";
import Admission from "../components/Pages/AdmissionPage/Admission/Admission";
import MyCollege from "../components/Pages/MyCollegePage/MyCollege/MyCollege";
import SignIn from "../components/Pages/AuthenticationPages/SignIn/SignIn";
import SignUp from "../components/Pages/AuthenticationPages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "Colleges",
            element: <Colleges></Colleges>
        },
        {
            path: "Admission",
            element: <Admission></Admission>
        },
        {
            path: "MyCollege",
            element: <MyCollege></MyCollege>
        },
        {
            path: "signIn",
            element: <SignIn></SignIn>
        },
        {
            path: "signUp",
            element: <SignUp></SignUp>
        },
        {
            path: "forgotPassword",
            element: <SignUp></SignUp>
        },
      ]
    },
  ]);

  export default router; 