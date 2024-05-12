import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import MasterPrice from "../pages/MasterPrice/MasterPrice";
import Calender from "../pages/Calender/Calender";
import Report from "../pages/Report/Report";
import PageNoteFound from "../pages/Shared/PageNoteFound/PageNoteFound";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/masterprice',
        element: <MasterPrice></MasterPrice>
      },
      {
        path: '/calender',
        element: <Calender></Calender>
      },
      {
        path: '/report',
        element: <Report></Report>
      },
      {
        path: '*',
        element: <PageNoteFound></PageNoteFound>
      },
    ]
  }
]);
export default router;