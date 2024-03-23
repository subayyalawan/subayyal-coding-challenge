import React from "react";
import { useNavigate } from "react-router-dom";

const UserprofileErr = () => {
    const navigate = useNavigate()

  return (
    <>
      <h2 className="font-roboto md:text-3xl sm:text-2xl text-xl uppercase text-gray-700">
        there is nothing to show
      </h2>
      <h2 className="font-roboto md:text-lg sm:text-base tetx-sm capitalize text-gray-700 mt-1">
        Please Select a user from the Home Page
      </h2>
      <button
        className="hover:bg-cyan-500 hover:text-white md:w-1/2 sm:w-3/5 py-2 px-3  bg-white text-cyan-500 font-roboto rounded-full cursor-pointer border-2 border-cyan-500 transition-all duration-100 shadow-lg lg:mt-8 mt-6 capitalize"
        onClick={() => navigate("/")}
      >
        go back to home
      </button>
    </>
  );
};

export default UserprofileErr;
