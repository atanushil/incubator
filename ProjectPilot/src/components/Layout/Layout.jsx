import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../ui/SideBar";
import SearchBar from "../search-bar/SearchBar";
import Notification from "../ui/Notification";
import Profile from "../ui/Profile";

export const Layout = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="grid grid-cols-12 grid-rows-8 h-full w-full bg-slate-400">
        <div className="col-span-3 row-span-8">
          <SideBar />
        </div>
        <div className="col-span-8 col-start-4 flex justify-end items-center px-5">
          <SearchBar />
        </div>
        <div className="col-span-9 row-span-7 col-start-4 row-start-2 bg-amber-200 text-black">
          <Outlet />
        </div>
        <div className="col-span-1 col-start-12 row-start-1 flex justify-between px-1 items-center">
          <Notification />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Layout;
