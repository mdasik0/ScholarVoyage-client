import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Pages/HomePage/Home/Home";
import Colleges from "../components/Pages/CollegesPage/Colleges/Colleges";
import Admission from "../components/Pages/AdmissionPage/Admission/Admission";
import MyCollege from "../components/Pages/MyCollegePage/MyCollege/MyCollege";

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
        }
      ]
    },
  ]);

  export default router; 