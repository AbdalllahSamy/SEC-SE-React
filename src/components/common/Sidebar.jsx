import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography, colors } from '@mui/material';
import { images } from "../../assets";
import Animate from "./Animate";


const Sidebar = ({ sidebarWidth }) => {
  const [activeState, setActiveState] = useState("inbox");
  const [menus, setMenus] = useState([]);
  useEffect(() => {

    // Retrieve user role from local storage
    const role=JSON.parse(sessionStorage.getItem("auth")).role;

    // Based on the user's role, set the appropriate menu
    if (role === 'ADMIN') {
      setMenus([
        {
          title: "Teachers",
          icon: <DashboardCustomizeOutlinedIcon />,
          state: "teac",
          link: "/dashboard-admin/teachers"
        },
        {
          title: "Sec",
          icon: <DashboardCustomizeOutlinedIcon />,
          state: "sec",
          link: "/dashboard-admin/secs"
        },
        {
          title: "Events",
          icon: <DashboardCustomizeOutlinedIcon />,
          state: "eve",
          link: "/dashboard-admin/events"
        },
        {
          title: "Parents",
          icon: <DashboardCustomizeOutlinedIcon />,
          state: "par",
          link: "/dashboard-admin/parents"
        }
      ]);
    } else if (role === 'SEC') {
      setMenus([
        {
          title: "HomeSec",
          icon: <MailOutlinedIcon />,
          state: "inbox",
          link: "/dashboard-sec"
        },
        {
          title: "Teachers",
          icon: <DashboardCustomizeOutlinedIcon />,
          state: "teac",
          link: "/dashboard-sec/teachers"
        },
        {
          title: "Events",
          icon: <DashboardCustomizeOutlinedIcon />,
          state: "eve",
          link: "/dashboard-sec/events"
        },
        {
          title: "Parents",
          icon: <DashboardCustomizeOutlinedIcon />,
          state: "par",
          link: "/dashboard-sec/parents"
        }
      ]);
    }
    else if (role === 'TEACHER') {
      setMenus([
        {
          title: "Home",
          icon: <MailOutlinedIcon />,
          state: "inbox",
          link: "/dashboard-teacher"
        },
        {
          title: "Students",
          icon: <DashboardCustomizeOutlinedIcon />,
          state: "teac",
          link: "/dashboard-teacher/students"
        },
        {
          title: "Events",
          icon: <DashboardCustomizeOutlinedIcon />,
          state: "eve",
          link: "/dashboard-teacher/events"
        },
        {
          title: "Class",
          icon: <DashboardCustomizeOutlinedIcon />,
          state: "par",
          link: "/dashboard-teacher/class"
        }
      ]);
    }
    else if (role === 'USER') {
      setMenus([
        {
          title: "Home",
          icon: <MailOutlinedIcon />,
          state: "inbox",
          link: "/dashboard-user"
        },
        {
          title: "My child",
          icon: <DashboardCustomizeOutlinedIcon />,
          state: "teac",
          link: "/dashboard-user/profile"
        },
        {
          title: "Events",
          icon: <DashboardCustomizeOutlinedIcon />,
          state: "eve",
          link: "/dashboard-user/events"
        },
      ]);
    }
  }, []);
  const drawer = (
    <Box
      padding={3}
      paddingBottom={0}
      display="flex"
      flexDirection="column"
      height="100vh"
      sx={{
        "::-webkit-scrollbar": {
          display: "none"
        }
      }}
    >
      {/* logo */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Animate type="fade" delay={1}>
         <h1 className=' fw-bold'><span className=''>Kinder</span><span className=' text-success'>garten</span></h1>
        </Animate>
      </Box>
      {/* logo */}

      <Animate sx={{ flexGrow: 1 }}>
        <Paper
          elevation={0}
          square
          sx={{
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            p: 2,
            height: "100%",
            boxShadow: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px"
          }}
        >
          {/* menu group 1 */}
          <List>
            {menus.map((item, index) => (
              <ListItem
                key={index}
                component={Link} // Use Link component from react-router-dom
                to={item.link}
                className={`sidebar-item ${item.state === activeState ? 'active' : ''}`}
                onClick={() => setActiveState(item.state === activeState ? null : item.state)}
              >
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Animate>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { md: sidebarWidth },
        flexShrink: { md: 0 }
      }}
    >
      {/* large screen */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: sidebarWidth,
            borderWidth: 0,
            bgcolor: "transparent",
            "::-webkit-scrollbar": {
              display: "none"
            }
          }
        }}
        open
      >
        {drawer}
      </Drawer>
      {/* large screen */}
    </Box>
  );
};

export default Sidebar;
