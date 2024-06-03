import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Auth from "./pages/Auth.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import FinancialRecord from "./context/FinancialRecord.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>
  },
  {
    path: "/auth",
    element: <Auth/>
  }
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;


if (!PUBLISHABLE_KEY) {
  throw new Error("Missing publishable key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FinancialRecord>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <RouterProvider router={router} />
      </ClerkProvider>
    </FinancialRecord>
  </React.StrictMode>
);
