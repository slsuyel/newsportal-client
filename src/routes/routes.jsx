import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import WithNavbar from "../layouts/WithNavbar";
import ErrorPage from "../components/ErrorPage";
import Home from "../Home/Home";
import Categories from "../pages/Categories/Categories";
import News from "../pages/News/News";
import SkeletonLoader from "../components/utilities/SkeletonLoader";
import DashHome from "../dashboards/Dash-Home/DashHome";
import AddBlog from "../dashboards/Blog/AddBlog";
import Blogs from "../dashboards/Blog/Blogs";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <WithOutnavbar />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/posts/:id",
                element: <News />,
            },
           
            {
                path: "/loader",
                element: <SkeletonLoader />,
            },
            {
                path: "/category/:category",
                element: <Categories />,
            },


        ],
    },
    {
        path: 'dashboard',
        element: <WithNavbar />,
        children: [
            {
                path: '',
                element: <DashHome />
            },
            {
                path: 'add/news',
                element: <AddBlog />
            },
            {
                path: 'news',
                element: <Blogs />
            },

        ]
    }

]);