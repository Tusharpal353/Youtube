/* 

WITHOUT RESPONSIVE

import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../../Utils/Store/AppSlice";
import { BellDot, Menu, Search, User, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ytlogo } from "../../Utils/Constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      console.log("api call made" + searchInput);
      if (searchInput) getSearchData();
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

  const handleSearchClick = () => {
    navigate(`/search?q=${searchInput}`);
  };

  const handleSuggestionClick = (suggestion) => {
    // If the suggestion is an object, access the property you need (e.g., 'title' or 'name')
    setSearchInput(suggestion);
    navigate(`/search?q=${suggestion}`);
  };

  return (
    <header className="bg-white shadow-m fixed w-full">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={HandleToogleMenu}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center ml-4">
            <img className="h-8 w-auto mr-2" src={ytlogo} alt="YouTube Logo" />
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
            <button
              className="absolute right-0 top-0 mt-2 mr-4"
              onClick={handleSearchClick}
            >
              <Search className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          {showSuggestion && searchSuggestions.length > 0 && (
            <ul className="absolute z-10 w-full max-w-xl bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
              {searchSuggestions.map((res, index) => (
                <li
                  key={index}
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(res)} // Pass the actual suggestion object or value
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
 */


import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../../Utils/Store/AppSlice";
import { BellDot, Menu, Search, User, Video } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { ytlogo } from "../../Utils/Constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      console.log("api call made" + searchInput);
      if (searchInput) getSearchData();
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

  const handleSearchClick = () => {
    navigate(`/search?q=${searchInput}`);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    navigate(`/search?q=${suggestion}`);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={HandleToogleMenu}
            className="p-2 hover:bg-gray-100 rounded-full mr-2"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <div className="flex items-center">
            <img className="h-6 sm:h-8 w-auto mr-2" src={ytlogo} alt="YouTube Logo" />
            <h1 className="text-lg sm:text-xl font-bold hidden sm:block">YouTube</h1>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-2 sm:mx-4">
          <div className="relative">
            <input
              className="w-full py-1 sm:py-2 pl-3 sm:pl-4 pr-8 sm:pr-10 text-sm sm:text-base border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={handleChange}
              onFocus={() => setSuggestions(true)}
              onBlur={() => setTimeout(() => setSuggestions(false), 200)}
            />
            <button
              className="absolute right-0 top-0 mt-1 sm:mt-2 mr-2 sm:mr-4"
              onClick={handleSearchClick}
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
            </button>
          </div>
          {showSuggestion && searchSuggestions.length > 0 && (
            <ul className="absolute z-10 w-full max-w-xl bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
              {searchSuggestions.map((res, index) => (
                <li
                  key={index}
                  className="flex items-center px-3 sm:px-4 py-2 text-sm sm:text-base cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(res)}
                >
                  <Search className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-gray-500" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center">
          <button className="p-1 sm:p-2 hover:bg-gray-100 rounded-full">
            <Video className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="p-1 sm:p-2 hover:bg-gray-100 rounded-full">
            <BellDot className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="p-1 sm:p-2 hover:bg-gray-100 rounded-full">
            <User className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

