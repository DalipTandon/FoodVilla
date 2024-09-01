import React from "react";
import ReactDOM from "react-dom/client";
import Header from "/components/Header";
import Body from "/components/Body"
import Footer from "/components/Footer";
import About from "/components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { BrowserRouter,RouterProvider,Outlet, createBrowserRouter } from "react-router-dom";
const AppLayout=()=>{
    return (
        <>
        <Header/>
       <Outlet/>
        <Footer/>
        </>
    )
}
const appRouter=createBrowserRouter([
    {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            path:"/",
            element:<Body/>
        },
        {
            path:"about",
            element:<About/>
        },
        {
            path:"contact",
            element:<Contact/>
        },
        {
            path:"/restaurant/:resId",
            element:<RestaurantMenu/>
        },
    ]
    }
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);