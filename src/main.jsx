import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import HomeNew from "./pages/HomeNew.jsx";

let router = createBrowserRouter([
	{
		path: "/",
		Component: HomeNew,
	},
	{
		path: "/dashboard",
		Component: Dashboard,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
