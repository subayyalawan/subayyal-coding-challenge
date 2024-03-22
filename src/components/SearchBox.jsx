import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { useRandomUser } from "../context/RandomUserContext";

const SearchBox = ({ searchQuery, setSearchQuery, handleGenderFilter }) => {
  const { genderFilter, setGenderFilter } = useRandomUser();

  const handleGenderChange = (e) => {
    setGenderFilter(e.target.value);
    handleGenderFilter();
  };

  return (
    <div className="bg-cyan-50 flex justify-center items-center flex-col py-8">
      <div className="w-1/3 flex justify-between">
        <input
          type="text"
          className="outline-none w-full px-2 py-3 border-2 border-cyan-500/30 rounded-2xl mr-1 bg-cyan-50 focus:bg-white transition-all duration-200 font-roboto text-center"
          placeholder="Type Here to Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="mt-4 flex justify-between items-center w-3/12">
        <FontAwesomeIcon
          icon={faSliders}
          className={`${
            genderFilter
              ? "bg-cyan-500 text-white "
              : "text-cyan-500 hover:bg-cyan-100"
          } border-2 border-cyan-500/70 w-1/6 py-2 font-roboto rounded-full text-xl cursor-pointer transition-all duration-150`}
        />
        <button
          value="all"
          className={`${
            genderFilter === "all"
              ? "bg-cyan-500 text-white"
              : "hover:bg-cyan-100 bg-transparent text-cyan-500"
          } border-2 border-cyan-500/70 w-1/5 py-2 px-4 font-roboto rounded-full cursor-pointer transition-all duration-150`}
          onClick={handleGenderChange}
        >
          All
        </button>
        <button
          value="female"
          className={`${
            genderFilter === "female"
              ? "bg-cyan-500 text-white"
              : "hover:bg-cyan-100 bg-transparent text-cyan-500"
          } border-2 border-cyan-500/70 w-1/4 py-2 px-4  font-roboto rounded-full cursor-pointer transition-all duration-150`}
          onClick={handleGenderChange}
        >
          Female
        </button>
        <button
          value="male"
          className={`${
            genderFilter === "male"
              ? "bg-cyan-500 text-white"
              : "hover:bg-cyan-100 bg-transparent text-cyan-500"
          } border-2 border-cyan-500/70 w-1/5 py-2 px-4  font-roboto rounded-full cursor-pointer transition-all duration-150`}
          onClick={handleGenderChange}
        >
          Male
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
