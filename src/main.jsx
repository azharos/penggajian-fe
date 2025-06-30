import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Karyawan from "./pages/Karyawan.jsx";
import Departemen from "./pages/Departemen.jsx";
import Jabatan from "./pages/Jabatan.jsx";

let router = createBrowserRouter([
	{
		path: "/",
		Component: Home,
	},
	{
		path: "/dashboard",
		Component: Dashboard,
	},
	{
		path: "/karyawan",
		Component: Karyawan,
	},
	{
		path: "/departemen",
		Component: Departemen,
	},
	{
		path: "/jabatan",
		Component: Jabatan,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
