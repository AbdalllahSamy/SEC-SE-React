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
import Students from "../pages/teacher/students/Students";
import Class from "../pages/teacher/class/Class";
import DashboardUser from "../pages/user/DashboardUser";
import UserEvent from "../pages/user/userevent/UserEvent";
import SecsProfilePage from "../pages/admin/secs/SecsProfilePage";
import TeacherProfilePage from "../pages/admin/teacher/TeacherProfilePage";

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
            element: <MainLayout />,
            children: [
              {
                index: true,
                element: <DashboardPage />
              },
              {
                path: "teachers",
                children: [
                  {
                    path: ":id", // This path captures the teacher ID
                    element: <TeacherProfilePage />
                  },
                  // Add the below Route to render TeachersPage if no ID is provided
                  {
                    index: true,
                    element: <TeachersPage />
                  }
                ]
              },
              {
                path: "secs",
                children: [
                  {
                    path: ":id", // This path captures the teacher ID
                    element: <SecsProfilePage />
                  },
                  // Add the below Route to render TeachersPage if no ID is provided
                  {
                    index: true,
                    element: <SecsPage />
                  }
                ]
              },
              {
                path: "profile",
                element: <Profile />
              },
              {
                path: "events",
                element: <Event />
              },
              {
                path: "parents",
                element: <Parent />
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
            element: <MainLayout />,
            children: [
              {
                index: true,
                element: <DashboardSec />
              },
              {
                path: "profile",
                element: <Profile />
              },
              {
                path: "events",
                element: <Event />
              },
              {
                path: "parents",
                element: <Parent />
              },
              {
                path: "teachers",
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
            element: <MainLayout />,
            children: [
              {
                index: true,
                element: <DashboardTeacher />
              },
              {
                path: "students",
                element: <Students />
              },
              {
                // This should be corrected to point to the user's events
                path: "events",
                element: <Event />
              },
              {
                path: "class",
                element: <Class />
              }
            ]
          }
        ]
      },
      {
        path: "dashboard-user",
        element: <RequireAuth />, // Protect this route
        children: [
          {
            element: <MainLayout />,
            children: [
              {
                index: true,
                element: <DashboardUser />
              },
              {
                path: "profile",
                element: <Profile />
              },
              {
                path: "events",
                element: <UserEvent />
              }
            ]
          }
        ]
      }
    ]
  }
]);
