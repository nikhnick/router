import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {Layout, Home, About, Contact, User, GitHub, gitHubInfo } from './compnenents'
import ErrorPage from "./ErrorPage";
import "./index.css";

//Approach 1
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<Layout />,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }
//     ]
//   },
// ]);

//Approach 2
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
    <Route path="" element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path="contact" element={<Contact/>} />
    <Route path="user/:userId" element={<User/>} />
    <Route loader={gitHubInfo} path="github" element={<GitHub/>} />
  </Route>
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
