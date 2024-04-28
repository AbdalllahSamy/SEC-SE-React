import { createBrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes as ReactRoutes, Outlet } from 'react-router-dom';
import AppLayout from "../components/layout/AppLayout";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../components/layout/MainLayout";
import DashboardSec from "../pages/sec/DashboardSec";
import DashboardPage from "../pages/admin/DashboardPage";
import TeachersPage from "../pages/admin/teacher/TeachersPage";
import RequireAuth from "./../components/auth/RequireAuth"
import DashboardTeacher from "../pages/teacher/DashboardTeacher";
import SecsPage from "../pages/admin/secs/SecsPage";
import Profile from "../pages/Profile";
import Event from "../pages/sec/events/Event";
import Parent from "../pages/sec/parents/Parent";
import Teacher from "../pages/sec/teachers/Teacher";
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
        element: <RequireAuth />, // Protect this route
        children: [
          {
            // index: true,
            element: <MainLayout />,
            children: [
              {
                index: true,
                element: <DashboardPage />
              },
              {
                path: "teachers",
                element: <TeachersPage />
              },
              {
                path: "secs",
                element: <SecsPage />
              },
              {
                path:"profile",
                element: <Profile />
              }
            ]
          }
        ]
      },
      {
        path: "dashboard-sec",
        element: <RequireAuth />, // Protect this route
        children: [
          {
            // index: true,
            element: <MainLayout />,
            children: [
              {
                index: true,
                element: <DashboardSec />
              },
              {
                path:"profile",
                element: <Profile />
              },
              {
                path:"events",
                element: <Event />
              },
              {
                path:"parents",
                element: <Parent />
              },
              {
                path:"teachers",
                element: <Teacher />
              }
            ]
          }
        ]
      },
      {
        path: "dashboard-teacher",
        element: <RequireAuth />, // Protect this route
        children: [
          {
            // index: true,
            element: <MainLayout />,
            children: [
              {
                index: true,
                element: <DashboardTeacher />
              }
            ]
          }
        ]
      }
    ]
  }
]);