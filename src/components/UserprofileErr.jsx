import React from "react";
import { useNavigate } from "react-router-dom";

const UserprofileErr = () => {
    const navigate = useNavigate()

  return (
    <>
      <h2 className="font-roboto text-3xl uppercase text-gray-700">
        there is nothing to show
      </h2>
      <h2 className="font-roboto text-lg capitalize text-gray-700 mt-1">
        Please Select a user from the Home Page
      </h2>
      <button
        className="hover:bg-cyan-500 hover:text-white w-1/2 py-2 bg-white text-cyan-500 font-roboto rounded-full cursor-pointer border-2 border-cyan-500 transition-all duration-100 shadow-lg mt-10 capitalize"
        onClick={() => navigate("/")}
      >
        go back to home
      </button>
    </>
  );
};

export default UserprofileErr;
