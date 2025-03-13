import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClear } from "react-icons/ai";

const SearchBar = () => {
    const [query, setQuery] = useState("");

    return (
        <div className="relative flex items-center transition-all duration-300 ease-in-out border border-gray-300 bg-white rounded-full shadow-md focus-within:ring-2 focus-within:ring-blue-400"
            style={{ width: query ? "100%" : "340px" }} // Expands when typing
        >
            <AiOutlineSearch className=" mx-3 text-gray-500" size={20} />
            <input 
                type="text" 
                className="w-full px-4 py-2 text-gray-700 bg-transparent outline-none placeholder-gray-400 transition-all duration-300 ease-in-out"
                placeholder="Find tasks, team member's ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {query && (
                <button 
                    className="absolute right-3 p-2 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition duration-300"
                    onClick={() => setQuery("")}
                >
                    <AiOutlineClear size={18} />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
