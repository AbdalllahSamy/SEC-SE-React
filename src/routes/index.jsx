import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../components/layout/MainLayout";
import DashboardSec from "../pages/sec/DashboardSec";
import DashboardPage from "../pages/admin/DashboardPage";
import TeachersPage from "../pages/admin/teacher/TeachersPage";
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
          },
          {
            path: "teachers", // New route path
            element: <TeachersPage /> // Render TeachersPage component
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