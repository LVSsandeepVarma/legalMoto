import React, { useEffect, useState } from "react";
import i18n from "../i18n";
import { useLocation, useNavigate } from "react-router-dom";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const location = useLocation();
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(false);

  const handleLanguageChange = (event) => {
    setShowLoader(true);
    setSelectedLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
    const currentPath = location.pathname;
    console.log(currentPath);
    // if(!currentPath.startsWith("/ch") || !currentPath.startsWith("/mal")){
    const lang = event.target.value;
    console.log(lang);
    const newPath = currentPath.replace(/^\/(chi|ms)/, ``);
    console.log(newPath, `/${lang}`);
    if (lang !== "en") {
      console.log(currentPath);
      if (lang == "ch") {
        window.location.href = `/chi${newPath}`;
      } else {
        window.location.href = `/${event.target.value}${newPath}`;
      }
    } else {
      window.location.href = newPath;
    }
    // setShowLoader(false)

    // }else{
    // const newPath = `/${event.target.value}${currentPath.replace(/^\/(ch|mal)/, ``) }`
    // console.log(newPath)
    // window.location.href=newPath
    // }
  };

  useEffect(() => {
    const savedLang = localStorage?.getItem("i18nextLng");

    setSelectedLanguage(savedLang);
    console.log("eee", savedLang);
  });

  return (
    <>
      {showLoader && (
        <div className="preloader paymentStatus-preloader">
          <div className="cssload-dots">
            <div className="cssload-dot"></div>
            <div className="cssload-dot"></div>
            <div className="cssload-dot"></div>
            <div className="cssload-dot"></div>
            <div className="cssload-dot"></div>
          </div>
        </div>
      )}
      <div
        className=" !bg-transparent text-orange-600 langSelector   !top-0  "
        style={{ overflowX: "hidden" }}
      >
        <select
          id="language"
          value={selectedLanguage}
          className="!bg-transparent  w-[10vw]  pl-2 font-bold border-1 border-orange-600"
          onChange={handleLanguageChange}
          style={{ overflowX: "hidden !important" }}
        >
          <option
            className="!appearance-none !text-white !bg-[#0288d1]"
            value="en"
          >
            English
          </option>
          <option
            className="!appearance-none !text-white !bg-[#0288d1]"
            value="ms"
          >
            Malay
          </option>
          <option
            className="!appearance-none !text-white !bg-[#0288d1]"
            value="ch"
          >
            Chinese
          </option>
        </select>
      </div>
    </>
  );
};

export default LanguageSelector;
