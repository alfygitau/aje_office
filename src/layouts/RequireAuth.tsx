import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAuth } from "../hooks/useAuth";


const RequireAuth: React.FC = () => {
  const {auth,setAuth } = useAuth();

  const events = [
    "load",
    "mousemove",
    "mousedown",
    "click",
    "scroll",
    "keypress",
  ];

  const timerRef = useRef<NodeJS.Timeout | null>(null); 

  const handleLogoutTimer = () => {
    timerRef.current = setTimeout(() => {
      resetTimer();

      events.forEach((item) => {
        window.removeEventListener(item, resetTimer);
      });

      logoutAction();
    }, 600000);
  };

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  useEffect(() => {
    events.forEach((item) => {
      window.addEventListener(item, () => {
        resetTimer();
        handleLogoutTimer();
      });
    });

    return () => {
      events.forEach((item) => {
        window.removeEventListener(item, resetTimer);
      });
    };
  }, []);

  const logoutAction = () => {
    localStorage.clear();
    setAuth(null);
    window.location.pathname = "/";
  };

  const location = useLocation();

  return auth?.user?.name ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
