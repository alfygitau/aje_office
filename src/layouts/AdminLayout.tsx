import { Outlet } from "react-router-dom";
import TopBar from "../topbar/TopBar";
import LeftBar from "../leftbar/LeftBar";

const AdminLayout = () => {
  return (
    <div>
      <div></div>
      <div>
        <div className="w-[100%]">
          <TopBar />
        </div>
      </div>
      <div className="w-[95%] flex items-center">
        <div className="w-[15%]">
          <LeftBar />
        </div>
        <div className="w-[85%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
