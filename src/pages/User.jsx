import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRandomUser } from "../context/RandomUserContext";
import Map from "../components/Map";
import profile_bg from "../assets/profile-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import UserProfile from "../components/UserProfile";
import UserprofileErr from "../components/UserprofileErr";

const User = () => {
  const { userId } = useParams();
  const { randomUser } = useRandomUser();
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState([]);

  const handleSelectedUser = () => {
    const filteredUser = randomUser.filter((user) => {
      return user.id.value === userId;
    });

    if (filteredUser.length > 0) {
      setSelectedUser(filteredUser);
    } else [setSelectedUser([])];
  };

  useLayoutEffect(() => {
    handleSelectedUser();
  }, []);

  useEffect(() => {
    selectedUser.length &&
      (document.title = `Sample User - ${selectedUser[0].name.first}`);
  }, [selectedUser]);

  return (
    <>
      <div className="min-h-[88vh]">
        <div className="img">
          <img
            src={profile_bg}
            alt="Profile background"
            className="w-full lg:h-[50vh] sm:h-[40vh] h-[280px] object-cover"
          />
        </div>
        <div className="sm:mx-6 mx-4">
          <div className="bg-white rounded-2xl xl:w-8/12 container mx-auto relative -mt-48 md:p-8 sm:p-6 p-4 flex items-start justify-between shadow-lg">
            <button
              onClick={() => navigate("/")}
              className="text-cyan-500 sm:text-xl text-base font-semibold px-1"
            >
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="sm:mr-2 mr-0 font-bold text-xl"
              />
              <span className="sm:inline-block hidden">
              Home
              </span>
            </button>

            {selectedUser.length === 0 ? (
              <div className="text-center my-28">
                <UserprofileErr />
              </div>
            ) : (
              <>
                <UserProfile selectedUser={selectedUser[0]} />
              </>
            )}

            <div className="md:w-[70px] sm:w-[55px] w-[20px]"></div>
          </div>

          <h2 className="mt-28 text-center container mx-auto font-roboto text-3xl capitalize text-gray-700">
            View My Address on Map Below
          </h2>
          <div className="xl:w-8/12 container mx-auto lg:h-[50vh] sm:h-[40vh] h-[280px] rounded-2xl overflow-hidden shadow-lg mt-8 mb-12">
            <Map
              lat={selectedUser[0]?.location.coordinates.latitude}
              lng={selectedUser[0]?.location.coordinates.longitude}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
