import React from 'react';
import { IoIosNotificationsOutline, IoMdNotifications } from "react-icons/io";

const Notification = ({ count = 5 }) => {
    return (
        <div className="relative flex items-center space-x-2 cursor-pointer">
            {/* Notification Button */}
            <button className="relative p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition duration-300 cursor-pointer">
                {count > 0 ? <IoMdNotifications className="text-red-500 text-xl" /> : <IoIosNotificationsOutline className="text-gray-600 text-lg" />}
            </button>

            {/* Notification Badge */}
            {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {count}
                </span>
            )}
        </div>
    );
}

export default Notification;
