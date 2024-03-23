import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="shadow-lg z-10 relative inset-x-0">
      {/* Desktop Navbar */}
      <nav className="container mx-auto py-4 flex justify-between items-center sm:px-6 px-4">
        <h2 className="text-xl font-bold font-iceberg">Sample User</h2>
        <p className="text-base font-semibold font-roboto md:block hidden">
          Welcome! <span className="text-cyan-500">Subayyal Ayub</span>
        </p>
        <button
          className="md:hidden border-2 border-cyan-500/50 rounded-lg px-2 py-2 flex justify-center items-center "
          onClick={() => setOpenNav(!openNav)}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="text-cyan-500 text-lg w-5 h-5"
          />
        </button>
      </nav>

      {/* Mobile Navbar */}
      <nav>
        <div
          className={`${
            openNav ? "block" : "hidden"
          }  fixed top-0 inset-x-0 w-full z-10 h-screen bg-white `}
        >
          <div className="text-base font-semibold font-roboto ">
            <div className="container mx-auto py-4 flex justify-between items-center sm:px-6 px-4">
              <div className="text-xl font-bold font-iceberg">Sample User</div>
              <button
                className="md:hidden border-2 border-cyan-500/50 rounded-lg px-2 py-2 flex justify-center items-center"
                onClick={() => setOpenNav(!openNav)}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-cyan-500 text-lg w-5 h-5"
                />
              </button>
            </div>

            <div className="container mx-auto text-xl h-[80vh] sm:px-6 px-4 flex justify-center flex-col">
              <p className="py-2 font-medium">
                Welcome! <span className="text-cyan-500">Subayyal Ayub</span>
              </p>

              <ul className="text-2xl capitalize mt-2">
                <li className="mb-4" onClick={()=>setOpenNav(false)}>
                  <Link to="/">Home</Link>
                </li>
                <li className="mb-4" onClick={()=>setOpenNav(false)}>
                  <Link to="/user/abc">User</Link>
                </li>
                <li className="mb-4" onClick={()=>setOpenNav(false)}>About</li>
              </ul>
            </div>
          </div>
          <p className="font-roboto text-sm font-medium capitalize text-center ">Design and Developed by Subayyal Ayub</p>
          {/* absolute bottom-4 inset-x-0 */}
        </div>

        
      </nav>
    </div>
  );
};

export default Navbar;
