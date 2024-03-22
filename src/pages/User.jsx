import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useRandomUser } from "../context/RandomUserContext";
import Map from "../components/Map";

const User = () => {
  const { userId } = useParams();
  const { randomUser } = useRandomUser();
  const [selectedUser, setSelectedUser] = useState(
    randomUser.filter((user) => user.id.value === userId)
  );

  const coordinates = {
    lat: selectedUser[0]?.location.coordinates.latitude,
    lng: selectedUser[0]?.location.coordinates.longitude,
  };

  const handleSelectedUser = () => {
    const filteredUser = randomUser.filter((user) => {
      return user.id.value === userId;
    });
    setSelectedUser(filteredUser);
  };

  useLayoutEffect(() => {
    handleSelectedUser();
  }, []);

  useEffect(() => {
    selectedUser.length &&
      (document.title = `Sample User - ${selectedUser[0].name.first}`);
  }, [selectedUser]);

  // console.log(selectedUser[0]?.location.coordinates);
  // console.log(coordinates);

  if (selectedUser.length === 0) {
    return (
      <div>
        <h2>there is nothing to show</h2>
        <h2>Please Select a user from the Home Page</h2>
        <Link to={"/"}>go back to home</Link>
      </div>
    );
  } else {
    return (
      <>
        <div>
          {selectedUser[0]?.email}
          {/* 33.99911076012358, 72.94826281768678 */}
          <div className="container mx-auto h-[80vh]">
            <Map lat={selectedUser[0]?.location.coordinates.latitude} lng={selectedUser[0]?.location.coordinates.longitude}/>
            {/* <Map /> */}
          </div>
          {/* <Map Location={selectedUser[0]?.location.coordinates} /> */}
        </div>
        <Link to={"/"}>go back to home</Link>
      </>
    );
  }
};

export default User;
