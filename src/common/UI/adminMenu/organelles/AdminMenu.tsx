import { Outlet } from "react-router-dom";
import { AdminMenuBlock } from "../molecules/AdminMenuBlock";
import "../styles/AdminMenu.css";

//встраиваем меню и страницы красиво, с запасом на будущее
export const AdminMenu = () => {
  return (
    <div className="AdminMenu">
      <AdminMenuBlock />
      <div className="contentPage">
        {/* Здесь в дальнейшем будут подставляться вызываемые страницы, в Outlet */}
        <Outlet />
      </div>
    </div>
  );
};
