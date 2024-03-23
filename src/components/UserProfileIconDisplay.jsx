import React from "react";
import ReactCountryFlag from "react-country-flag";

const UserProfileIconDisplay = ({ currentHover, selectedUser }) => {
  return (
    <>
      <p className="text-center font-roboto font-medium text-base text-gray-800 capitalize md:h-20 sm:h-[70px] h-[60px]">
        {currentHover === "email" && (
          <>
            My Email is <br /> <span className="text-cyan-500 font-light md:text-3xl text-xl mt-2 block">{selectedUser.email}</span>
          </>
        )}

        {currentHover === "dob" && (
          <>
            I Was born on <br />
            <span className="text-cyan-500 font-light md:text-3xl text-xl mt-2 block">{selectedUser.dob.date.slice(8, 10)}/{selectedUser.dob.date.slice(5, 7)}/{selectedUser.dob.date.slice(0, 4)}</span>
          </>
        )}

        {currentHover === "address" && (
          <>
            I live at <br />
            <span className="text-cyan-500 font-light md:text-3xl text-xl mt-2 block">
              {selectedUser.location.street.number}, {selectedUser.location.street.name}, {selectedUser.location.city}
            </span>
          </>
        )}
        {currentHover === "phone" && (
          <>
            You can contact me at <br />
            <span className="text-cyan-500 font-light md:text-3xl text-xl mt-2 block">{selectedUser.phone}</span>
          </>
        )}

        {currentHover === "nationality" && (
          <>
            My nationality is <br />
            <span className="text-cyan-500 font-light md:text-3xl text-xl mt-2 block">
              {selectedUser.location.country}
              <ReactCountryFlag
                countryCode={selectedUser.nat}
                svg
                className="mx-2 text-4xl"
              />
            </span>
          </>
        )}
      </p>
    </>
  );
};

export default UserProfileIconDisplay;
