import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../components/layout/MainLayout";
import DashboardSec from "../pages/sec/DashboardSec";
import DashboardPage from "../pages/admin/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />
      },
      {
        path: "dashboard-admin",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />
          } 
        ]
      },
      {
        path: "dashboard-sec",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <DashboardSec />
          } 
        ]
      }
    ]
  }
]);