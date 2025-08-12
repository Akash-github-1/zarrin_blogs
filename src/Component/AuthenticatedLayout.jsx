import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SideBar from "./Main Component/SideBar";

export default function AuthenticatedLayout() {
  const isAuthenticated = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
        navigate('/login')
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex">
       <SideBar/> 
      <Outlet />
    </div>
  );
}