import { useState } from "react";
import { FaTasks, FaUserFriends, FaBug, FaChartBar, FaClipboardList, FaCogs, FaBars } from "react-icons/fa";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`h-screen ${isOpen ? "min-w-[250px] max-w-md" : "w-16"} bg-gray-900 text-white transition-all duration-300 flex flex-col`}>
      <button className="p-3 focus:outline-none text-white hover:bg-gray-700" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <br />
      <div className="flex-col">
        <SidebarItem to="/" icon={<FaChartBar />} text="Dashboard" isOpen={isOpen} />
        <SidebarItem to="/product-backlog" icon={<FaClipboardList />} text="Product Backlog" isOpen={isOpen} />
        <SidebarItem to="/sprint-backlog" icon={<FaTasks />} text="Sprint Backlog" isOpen={isOpen} />
        <SidebarItem to="/scrum-meetings" icon={<MdOutlineMeetingRoom />} text="Scrum Meetings" isOpen={isOpen} />
        <SidebarItem to="/testing-bugs" icon={<FaBug />} text="Testing & Bugs" isOpen={isOpen} />
        <SidebarItem to="/deployment" icon={<FaCogs />} text="Deployment & Versions" isOpen={isOpen} />
        <SidebarItem to="/team-management" icon={<FaUserFriends />} text="Team Management" isOpen={isOpen} />
      </div>
    </div>
  );
};

const SidebarItem = ({ to, icon, text, isOpen }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center p-3 hover:bg-gray-700 cursor-pointer ${
          isActive ? "bg-gray-700" : ""
        }`
      }
    >
      <span className="text-xl">{icon}</span>
      {isOpen && <span className="ml-3 text-sm">{text}</span>}
    </NavLink>
  );
};

export default SideBar;
