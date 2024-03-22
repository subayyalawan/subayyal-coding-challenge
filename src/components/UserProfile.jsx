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
  const [currentHover, setCurrentHover] = useState("phone");

  return (
    <div className="flex justify-center flex-col items-center w-2/4">
      <div className="rounded-full overflow-hidden -mt-[18%] w-[30%] border-8 border-white shadow-md">
        <img src={selectedUser.picture.large} alt="" className="w-full" />
      </div>
      <div className="font-roboto font-bold text-4xl text-gray-900 my-7">
        {selectedUser.name.first} {selectedUser.name.last}
      </div>

      <UserProfileIconDisplay currentHover={currentHover} selectedUser={selectedUser} />

      

      <div className="flex justify-between items-center w-5/6 mt-4">
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
