import { Box, Button, Checkbox, CircularProgress, FormControlLabel, FormGroup, Stack, TextField, Typography, circularProgressClasses, colors } from "@mui/material";
import React, { useState } from "react";
import { images } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Animate from "../components/common/Animate";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username: email,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      localStorage.setItem("auth", JSON.stringify(response.data.data));

      if (response.data.data.role === "ADMIN") {
        navigate("/dashboard-admin");
      } else if (response.data.data.role === "TEACHER") {
        navigate("/dashboard-teacher");
      } else if (response.data.data.role === "SEC") {
        navigate("/dashboard-sec");
      } else if (response.data.data.role === "USER") {
        navigate("/dashboard-user");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      position="relative"
      height="100vh"
      sx={{ "::-webkit-scrollbar": { display: "none" } }}
    >
      {/* background box */}
      <Box sx={{
        position: "absolute",
        right: 0,
        height: "100%",
        width: "70%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${images.loginBg})`
      }} />
      {/* background box */}

      {/* Login form */}
      <Box sx={{
        position: "absolute",
        left: 0,
        height: "100%",
        width: { xl: "30%", lg: "40%", md: "50%", xs: "100%" },
        transition: "all 1s ease-in-out",
        bgcolor: colors.common.white
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          opacity: 1,
          transition: "all 0.3s ease-in-out",
          height: "100%",
          "::-webkit-scrollbar": { display: "none" }
        }}>
          {/* logo */}
          <Box sx={{ textAlign: "center", p: 5 }}>
            <Animate type="fade" delay={0.5}>
              <img src={images.logo} alt="logo" height={60}></img>
            </Animate>
          </Box>
          {/* logo */}

          {/* form */}
          <Box sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "::-webkit-scrollbar": { display: "none" }
          }}>
            <Animate type="fade" sx={{ maxWidth: 400, width: "100%" }}>
              <Box component="form" maxWidth={400} width="100%" onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField label="username" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                  <TextField label="password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
                  <Button type="submit" size="large" variant="contained" color="success">
                    sign in
                  </Button>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="Remember me" />
                    </FormGroup>
                    <Typography color="error" fontWeight="bold">
                      <Link to="#">
                        Forgot password?
                      </Link>
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Animate>
          </Box>
          {/* form */}

          {/* footer */}
          <Box sx={{ textAlign: "center", p: 5, zIndex: 2 }}>
            <Animate type="fade" delay={1}>
              <Typography
                display="inline"
                fontWeight="bold"
                sx={{ "& > a": { color: colors.red[900], ml: "5px" } }}
              >
                Don't have an account -
                <Link to="#">
                  Register now
                </Link>
              </Typography>
            </Animate>
          </Box>
          {/* footer */}


        </Box>
      </Box>
      {/* Login form */}
    </Box>
  );
};

export default LoginPage;