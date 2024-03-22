import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-lg z-10 relative inset-x-0">
      <nav className="container mx-auto py-4 flex justify-between items-center">
        <div className="text-xl font-bold font-iceberg">Sample User</div>
        <div className="text-base font-semibold font-roboto">Welcome! <span className="text-cyan-500">Subayyal Ayub</span></div>
      </nav>
    </div>
  );
};

export default Navbar;
