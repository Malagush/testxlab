import { Outlet } from "react-router-dom";
import { AdminMenuBlock } from "../molecules/AdminMenuBlock";
import "../styles/AdminMenu.css";

export const AdminMenu = () => {
  return (
    <div className="AdminMenu">
      <AdminMenuBlock />
      <div className="contentPage">
        <Outlet />
      </div>
    </div>
  );
};
