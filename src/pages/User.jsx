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
            className="w-full h-[55vh] object-cover"
          />
        </div>
        <div className="bg-white rounded-2xl w-8/12 mx-auto relative -mt-48 p-8 flex items-start justify-between shadow-lg">
          <button
            onClick={() => navigate("/")}
            className="text-cyan-500 text-lg flex items-center font-semibold"
          >
            <FontAwesomeIcon icon={faAngleLeft} className="mr-2" />
            Home
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

          <div className="w-8"></div>
        </div>

        <h2 className="mt-28 text-center container mx-auto font-roboto text-3xl capitalize text-gray-700">View My Address on Map Below</h2>
        <div className="w-8/12 mx-auto h-[50vh] rounded-2xl overflow-hidden shadow-lg mt-8 mb-12">
          <Map
            lat={selectedUser[0]?.location.coordinates.latitude}
            lng={selectedUser[0]?.location.coordinates.longitude}
          />
        </div>
      </div>
    </>
  );
};

export default User;
