import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";

const Profile = () => {
    return (
        <div className="relative flex items-center justify-center cursor-pointer">
            <button className="p-2 rounded-full  transition duration-300 cursor-pointer">
                <FaRegUserCircle className="text-4xl text-gray-600 hover:text-gray-800 transition duration-300" />
            </button>
        </div>
    );
}

export default Profile;
