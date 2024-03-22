import { createContext, useContext } from "react";

export const RandomUserContext = createContext({
  randomUser: [],
  pageNo: 1,
  genderFilter: "all",

  handlePageChange: () => {},
  setGenderFilter : () => {},
});

export const RandomUserProvider = RandomUserContext.Provider;

export const useRandomUser = () => {
  return useContext(RandomUserContext);
};
