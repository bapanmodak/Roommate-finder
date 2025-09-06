import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Banner from "../components/Banner";
import DownloadOurApp from "../components/DownloadOurApp";
import ErrorPage from "../Pages/ErrorPage";
import FindRoommate from "../Pages/FindRoommate";
import RoommatesPost from "../components/RoommatesPost";
import RoommateDetails from "../components/RoommateDetails";
import BrowseListing from "../Pages/BrowseListing";
import AuthProvider from "../provider/AuthProvider";
import signIn from "../Pages/signIn";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../Pages/Register";
import MyListing from "../Pages/MyListing";
import UpdateRoommatePost from "../components/UpdateRoommatePost";
import PrivateRoute from "../provider/PrivateRoute";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Dashboard from "../Pages/Dashboard";
// import PrivateRoute from "../provider/PrivateRoute";


export const router = createBrowserRouter(
    [
        {
            path: "/",
            // Component: MainLayout,
            element: (
                <Suspense fallback={<Loader />}><MainLayout /></Suspense>
            ),
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    index: true,
                    path: "/",
                    loader: () => fetch("https://roommate-server-side-nu.vercel.app/filterRoommates"),
                    // Component: Home
                    element: (
                        <Suspense fallback={<Loader />}> <Home /> </Suspense>
                    )
                },
                {
                    path: "banner",
                    Component: Banner
                },
                {
                    path: "downloadOurApp",
                    Component: DownloadOurApp
                },
                {
                    path: "roommatePost",
                    Component: RoommatesPost
                },
                {
                    path: "roommate/:id",
                    loader: ({ params }) => fetch(`https://roommate-server-side-nu.vercel.app/roommates/${params.id}`),
                    // Component: RoommateDetails
                    element: <PrivateRoute> <RoommateDetails /></PrivateRoute>
                },
                {
                    path: "browseListing",
                    loader: () => fetch("https://roommate-server-side-nu.vercel.app/allRoommates"),
                    // Component: BrowseListing
                    element: <BrowseListing />
                },
                {
                    path: "myListing",
                    loader: () => fetch("https://roommate-server-side-nu.vercel.app/allRoommates"),
                    element: <PrivateRoute> <MyListing /> </PrivateRoute>
                },
                {
                    path: "UpdateRoommatePost/:id",
                    loader: ({ params }) => fetch(`https://roommate-server-side-nu.vercel.app/allRoommates/${params.id}`),
                    element: <PrivateRoute> <UpdateRoommatePost /></PrivateRoute>
                },
                {
                    path: "/findRoommate",
                    element: <PrivateRoute> <FindRoommate /> </PrivateRoute>
                },
                {
                    path: "/dashboard",
                    element: <PrivateRoute> <Dashboard /> </PrivateRoute>
                },
            ]
        },

        {
            path: "/auth",
            Component: AuthLayout,
            children: [
                {
                    path: "/auth/signIn",
                    Component: signIn
                },
                {
                    path: "/auth/register",
                    Component: Register
                },
            ]
        },


    ]
)