import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useNavigate } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const UserCard = ({ data }) => {
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    duration: 400,
    offset: 120,
    easing: "ease",
    once: false,
    mirror: true,
  });

  const navigate = useNavigate()

  return (
    <div data-aos="zoom-in" className="bg-cyan-50/80 flex justify-center flex-col items-center shadow-lg shadow-cyan-800/40 rounded-lg overflow-hidden pb-10">
      <div className="bg-cyan-500/70 h-[120px] w-full"></div>
      <div className="rounded-full overflow-hidden w-[130px] h-[130px] border-2 border-cyan-500 mb-4 relative -my-16">
        <img src={data.picture.large} alt="User Img" className="w-full" />
      </div>
      <h2 className="font-roboto font-semibold text-xl mb-1">Hello! I'm</h2>
      <h2 className="font-roboto font-bold text-3xl text-cyan-500 mb-2">
        {data.name.first} {data.name.last}
      </h2>
      <p className="text-gray-900/70 mb-1 font-roboto">{data.email}</p>
      <p className="font-roboto font-semibold text-gray-800 flex items-center mb-3">
        <ReactCountryFlag countryCode={data.nat} svg className="mx-2 text-xl" />
        &#x2022; <span className="mx-1">{data.phone}</span>
      </p>
      <button className="hover:bg-cyan-500 hover:text-white w-1/2 py-2 bg-white text-cyan-500 font-roboto rounded-full cursor-pointer border-2 border-cyan-500 transition-all duration-100 shadow-lg" onClick={()=>navigate(`/user/${data.id.value}`)}>
        View Deatils
      </button>
    </div>
  );
};

export default UserCard;
