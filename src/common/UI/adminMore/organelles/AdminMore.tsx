import { AdminMoreHeader } from "../molecules/AdminMoreHeader";

import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../styles/AdminMore.css";

//В этом компоненте есть изменение внешней логики роутов
//Родительский компонент всех страниц
export const AdminMore = () => {
  const location = useLocation();
  useEffect(() => {}, [location.pathname]);
  return (
    <div className="AdminMore body">
      <AdminMoreHeader />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
