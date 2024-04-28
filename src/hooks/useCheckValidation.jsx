import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const useCheckValidation = (requiredType) => {
  const location = useLocation();
  const navigateFunction = useNavigate();
  const auth = JSON.parse(sessionStorage.getItem("auth"));
  useEffect(() => {
    if (auth.role !== requiredType) {
      if (auth.role === "ADMIN") {
        navigateFunction("/dashboard-admin");
      } else if (auth.role === "TEACHER") {
        navigateFunction("/dashboard-teacher");
      } else if (auth.role === "SEC") {
        navigateFunction("/dashboard-sec");
      } else if (auth.role === "USER") {
        navigateFunction("/dashboard-user");
      }
    }
  }, [location, location.pathname]);
};
