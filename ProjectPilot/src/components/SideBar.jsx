import { useState } from "react";
import { FaTasks, FaUserFriends, FaBug, FaChartBar, FaClipboardList, FaCogs, FaBars } from "react-icons/fa";
import { MdOutlineMeetingRoom } from "react-icons/md";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`h-screen ${isOpen ? 'w-64' : 'w-16'} bg-gray-900 text-white transition-all duration-300 flex flex-col`}> 
      <button 
        className="p-3 focus:outline-none text-white hover:bg-gray-700"
        onClick={toggleSidebar}
      >
        <FaBars size={24} />
      </button>
      <nav className="flex flex-col flex-grow mt-4">
        <SidebarItem icon={<FaChartBar />} text="Dashboard" isOpen={isOpen} />
        <SidebarItem icon={<FaClipboardList />} text="Product Backlog" isOpen={isOpen} />
        <SidebarItem icon={<FaTasks />} text="Sprint Backlog" isOpen={isOpen} />
        <SidebarItem icon={<MdOutlineMeetingRoom />} text="Scrum Meetings" isOpen={isOpen} />
        <SidebarItem icon={<FaBug />} text="Testing & Bugs" isOpen={isOpen} />
        <SidebarItem icon={<FaCogs />} text="Deployment & Versions" isOpen={isOpen} />
        <SidebarItem icon={<FaUserFriends />} text="Team Management" isOpen={isOpen} />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, text, isOpen }) => {
  return (
    <div className="flex items-center p-3 hover:bg-gray-700 cursor-pointer">
      <span className="text-xl">{icon}</span>
      {isOpen && <span className="ml-3 text-sm">{text}</span>}
    </div>
  );
};

export default SideBar;
