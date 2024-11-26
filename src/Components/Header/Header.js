import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../../Utils/Store/AppSlice";
import { BellDot, Menu, Search, User, Video } from 'lucide-react';

const Header = () => {
  const dispatch = useDispatch();
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showSuggestion, setSuggestions] = useState(false);

  const getSearchData = () => {
    fetch(`http://localhost:5000?q=${searchInput}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(searchSuggestions);
        setSearchSuggestions(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("api call made" + searchInput)
      if (searchInput)
        getSearchData();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  const HandleToogleMenu = () => {
    dispatch(toogleMenu());
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={HandleToogleMenu} className="p-2 hover:bg-gray-100 rounded-full">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center ml-4">
            <img
              className="h-8 w-auto mr-2"
              src="data:image/png;base64,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"
              alt="YouTube Logo"
            />
            <h1 className="text-xl font-bold">YouTube</h1>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <input
              className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={handleChange}
              onFocus={() => setSuggestions(true)}
              onBlur={() => setTimeout(() => setSuggestions(false), 200)}
            />
            <button className="absolute right-0 top-0 mt-2 mr-4">
              <Search className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          {showSuggestion && searchSuggestions.length > 0 && (
            <ul className="absolute z-10 w-full max-w-xl bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
              {searchSuggestions.map((res, index) => (
                <li
                  key={index}
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  <Search className="w-4 h-4 mr-2 text-gray-500" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Video className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <BellDot className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;