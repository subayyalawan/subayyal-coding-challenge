import React, { useEffect, useState } from "react";
import { useRandomUser } from "../context/RandomUserContext";
import SearchBox from "../components/SearchBox";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";

const Home = () => {
  const { randomUser, genderFilter } = useRandomUser();
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState(randomUser);

  const handleSearchQuery = (processedUsers) => {
    if (searchQuery.length > 0) {
      const searchedUser = processedUsers.filter((user) => {
        return user.name.first
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      });
      setUsers(searchedUser);
    } else {
      setUsers(processedUsers);
    }
  };

  const handleGenderFilter = () => {
    if (genderFilter === "male") {
      const filteredUser = randomUser.filter((user) => {
        return user.gender === "male";
      });
      handleSearchQuery(filteredUser);
    } else if (genderFilter === "female") {
      const filteredUser = randomUser.filter((user) => {
        return user.gender === "female";
      });
      handleSearchQuery(filteredUser);
    } else {
      handleSearchQuery(randomUser);
    }
  };

  useEffect(() => {
    handleGenderFilter();
    document.title = "Sample User - Home";
  }, [genderFilter, searchQuery]);

  return (
    <>
      <SearchBox
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleGenderFilter={handleGenderFilter}
      />
      <div className="container mx-auto my-10 min-h-[58vh]">
        {users.length === 0 ? (
          <div className="flex justify-center items-center text-center mt-20">
            <h2 className="font-roboto text-3xl uppercase text-gray-700">
              no result found, please try again
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-16">
            {users.map((data) => {
              return <UserCard key={data.id.value} data={data} />;
            })}
          </div>
        )}
      </div>

      <Pagination />
    </>
  );
};

export default Home;
