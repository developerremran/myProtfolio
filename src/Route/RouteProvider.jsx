import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../MainLayout/HomePageLayout";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import About from "../Pages/About/About";
import Protfolio from "../Pages/Protfolio/Protfolio";
const router = createBrowserRouter([
           {
            path:'/',
            errorElement:<Error></Error>,
            element:<HomePageLayout></HomePageLayout>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/about',
                    element:<About></About>
                },
                {
                    path:'/portfolio',
                    element:<Protfolio></Protfolio>
                }
            ]
           }
])

export default router;