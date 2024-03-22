import React, { useEffect, useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import User from "./pages/User";
import axios from "axios";
import { RandomUserProvider } from "./context/RandomUserContext";
import logo from "./assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [randomUser, setRandomUser] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loader, setLoader] = useState(true);
  const [genderFilter, setGenderFilter] = useState("all");
  const [errMsg, setErrMsg] = useState("Please Wait ...")

  const RandomUserFetch = async () => {
    try {
      // const baseURL = process.env.REACT_APP_RANDOM_USERS_BASE_URL // for CRA
      const baseURL = import.meta.env.VITE_REACT_APP_RANDOM_USERS_BASE_URL; // for Vite
      await axios
        .get(
          `${baseURL}?results=9&page=${pageNo}&seed=abcd&exc=registered,login,cell&nat=au,br,ca,rs,us`
        )
        .then((resp) => {
          setRandomUser(resp.data.results);
          setTimeout(() => {
            setLoader(false);
          }, 500);
        });
    } catch (err) {
      toast(err.message);
      setErrMsg(err.message)
    }
  };

  useEffect(() => {
    RandomUserFetch();
    setLoader(true);
  }, [pageNo]);

  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="user/:userId" element={<User />} />
      </Route>
    )
  );

  const handlePageChange = (page) => {
    setPageNo(page);
  };

  return (
    <>
      <RandomUserProvider
        value={{
          randomUser,
          pageNo,
          handlePageChange,
          genderFilter,
          setGenderFilter,
        }}
      >
        {loader ? (
          <div className="bg-cyan-500 min-h-screen fixed w-full transition-all duration-500 flex justify-center items-center flex-col">
            <img src={logo} alt="Logo" />
            <p className="text-white text-2xl font-iceberg">{errMsg}</p>
          </div>
        ) : (
          <RouterProvider router={Router} />
        )}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Zoom
        />
      </RandomUserProvider>
    </>
  );
};

export default App;
