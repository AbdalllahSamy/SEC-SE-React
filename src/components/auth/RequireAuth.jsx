import React from 'react';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const RequireAuth = () => {
    const navigate = useNavigate();
    const auth = JSON.parse(sessionStorage.getItem("auth"));
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if(!auth && isMounted) {
            navigate("/");
        }
    }, [auth, navigate, isMounted]);

    if (auth) {
        return (
            <>
                <Outlet />
            </>
        )
    }
}

export default RequireAuth;