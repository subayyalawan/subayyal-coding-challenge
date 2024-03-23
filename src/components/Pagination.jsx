import React from "react";
import { useRandomUser } from "../context/RandomUserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
  const { pageNo, handlePageChange } = useRandomUser();

  return (
    <>
      <div className="container mx-auto flex justify-center items-center mt-20 sm:py-5 py-3">
        <button
          onClick={() => handlePageChange(pageNo - 1)}
          className="cursor-pointer text-cyan-500 disabled:text-cyan-500/30 disabled:cursor-default"
          disabled={pageNo === 1}
        >
          <FontAwesomeIcon
            className="text-2xl mr-2"
            icon={faAngleLeft}
          ></FontAwesomeIcon>
        </button>

        {[1, 2, 3, 4, 5, 6].map((ele) => {
          return (
            <button
              key={ele}
              className={`${
                pageNo === ele
                  ? "bg-cyan-500 text-white"
                  : "bg-transparent text-cyan-500 hover:bg-cyan-100"
              } transition-all duration-150 border-2 border-cyan-500 px-3 py-1 rounded-full sm:mx-2 mx-1 font-bold font-roboto`}
              onClick={() => handlePageChange(ele)}
            >
              {ele}
            </button>
          );
        })}

        <button
          onClick={() => handlePageChange(pageNo + 1)}
          className="cursor-pointer text-cyan-500 disabled:text-cyan-500/30 disabled:cursor-default"
          disabled={pageNo === 6}
        >
          <FontAwesomeIcon
            className="text-2xl ml-2"
            icon={faAngleRight}
          ></FontAwesomeIcon>
        </button>
      </div>
    </>
  );
};

export default Pagination;
