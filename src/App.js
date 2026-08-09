import React from 'react';
import ReactDOM from 'react-dom/client';
import "../index.css";
import HeaderComponent from './Component/HeaderComponent'
import BodyComponent from './Component/BodyComponent';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import AboutComponent from './Component/AboutComponent';
import ContactComponent from './Component/ContactComponent';
import ErrorComponent from './Component/ErrorComponent';
import RestaurantMenuComponent from './Component/RestaurantMenuComponent';
// react element=> object when we render it on dom it become html element
// jsx => convention that merge html and js together
// not html  in js, it is html like syntax that is used to create react element
// jsx is a syntax and react element is object

// jsx -> transpiled before it reaches to js engine -> done by parcel (babel) -> babel transpile jsx to react element
//  babel -> take your code and convert in to something that js engine can understand
// jsx -> react.createElement() -> react -js object ->render html element
const jsxHeading  = <h1>namaste jsx</h1>
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// React component => function that return react element
// Class based component // Functional component

// Functional component => Just a normal js function that return react element
/**
 * Header
 *  - Logo
 *  - NavBar
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard 
 *          - Image
 *          - Name
 *          - Rating
 *          - Cusines
 *          - delicary ETA
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Copyright
 */


const AppLayout = ()=>{
    return (
        <div className="app">
            {/* Heaer */}
            <HeaderComponent/>
            <Outlet/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
        {
            path:"/",
            element:<BodyComponent/>
        }
        ,{
        path:"/about",
        element:<AboutComponent/>
        },
        {
            path:"/restaurant/:resId",
            element:<RestaurantMenuComponent/>
        },
    {
        path:"/contact",
        element:<ContactComponent/>
    }

        ],
        errorElement:<ErrorComponent/>
    },
])
root.render(<RouterProvider router={appRouter}/>);