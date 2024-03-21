import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Shop from './pages/ShopPage';
import CardsDresses from './pages/CardsDresses'; // Import the AdminDresses component
import DressesPage from './pages/DressesPage'; // Import the AdminDresses component
import AdminDresses from './pages/AdminDresses'; // Import the AdminDresses component
import EditDress from './pages/EditDress'; // Import the EditDress component
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/shop", // Correct the path to "/shop"
    element: <Shop/>
  },
  {
    path: "/card", 
    element: <CardsDresses/>
  },
  {
    path: "/admin/dresses/add", // Route for AdminDresses page
    element: <DressesPage/>
  },
  {
    path: "/admin/dresses", // Route for AdminDresses page
    element: <AdminDresses/>
  },
  {
    path: "/admin/dresses/:id/edit", // Route for EditDress page with dynamic ID
    element: <EditDress/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
