import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";

let router = createBrowserRouter([
	{
		path: "/",
		Component: Home,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
