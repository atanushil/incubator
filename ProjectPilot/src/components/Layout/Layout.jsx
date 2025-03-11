import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";

export const Layout = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 grid-rows-8 gap-2 bg-slate-400">
        <div className="col-span-3 row-span-8 "><SideBar/></div>
        <div className="col-span-7 col-start-4">Search</div>
        <div className="col-span-9 row-span-7 col-start-4 row-start-2 "><Outlet/></div>
        <div className="col-span-2 col-start-11 row-start-1">profile</div>
      </div>
    </div>
  );
};

export default Layout;
