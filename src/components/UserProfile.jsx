import {
  faPhone,
  faMap,
  faFlag,
  faEnvelope,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import UserProfileIcon from "./UserProfileIcon";
import UserProfileIconDisplay from "./UserProfileIconDisplay";

const UserProfile = ({ selectedUser }) => {
  const [currentHover, setCurrentHover] = useState("email");

  return (
    <div className="flex justify-center flex-col items-center lg:w-3/4 md:w-4/6 sm:w-4/6 w-5/6">
      <div className="rounded-full overflow-hidden lg:-mt-[150px] sm:-mt-[120px] -mt-[80px] lg:w-[25vh] md:w-2/5 sm:w-1/2 w-[150px] border-8 border-white shadow-md ">
        <img src={selectedUser.picture.large} alt="" className="w-full" />
      </div>
      <div className="font-roboto font-bold md:text-4xl sm:text-3xl text-2xl text-gray-900 md:my-7 sm:my-6 my-5">
        {selectedUser.name.first} {selectedUser.name.last}
      </div>

      <UserProfileIconDisplay currentHover={currentHover} selectedUser={selectedUser} />

      

      <div className="flex justify-between items-center lg:w-4/6 sm:w-5/6 w-[290px] mt-4">
        <UserProfileIcon
          currentHover={currentHover}
          setCurrentHover={setCurrentHover}
          icon={faEnvelope}
          hover={"email"}
        />
        <UserProfileIcon
          currentHover={currentHover}
          setCurrentHover={setCurrentHover}
          icon={faCalendarDays}
          hover={"dob"}
        />
        <UserProfileIcon
          currentHover={currentHover}
          setCurrentHover={setCurrentHover}
          icon={faMap}
          hover={"address"}
        />
        <UserProfileIcon
          currentHover={currentHover}
          setCurrentHover={setCurrentHover}
          icon={faPhone}
          hover={"phone"}
        />
        <UserProfileIcon
          currentHover={currentHover}
          setCurrentHover={setCurrentHover}
          icon={faFlag}
          hover={"nationality"}
        />
      </div>
    </div>
  );
};

export default UserProfile;
