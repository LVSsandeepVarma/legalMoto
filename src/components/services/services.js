import React, { useState, useEffect } from "react";
import NavBar from "../Header/header";
import { PiHandshakeDuotone, PiMapPinFill, PiMotorcycle } from "react-icons/pi";
import { BsFillCloudFill, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { Button } from "@mui/material";
import { BiPaperPlane, BiSolidCar } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiCodeBracket } from "react-icons/hi2";
import { ImMan } from "react-icons/im";

import {
  FaUniversity,
  FaMale,
  FaLaptop,
  FaTrophy,
  FaPlane,
} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import Footer from "../footer/footer";
import { MdSecurity } from "react-icons/md";
import FindYourCaseDetails from "../findYourCaseDetails";
import ContactusNow from "../home/contactusNow";
import ContactDetails from "../contactDetails";
import { useTranslation } from "react-i18next";

export default function Services() {
  const [showLoader, setShowLoader] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    setShowLoader(false);
  }, []);
  return (
    <>
      {showLoader && (
        <div class="preloader">
          <div class="cssload-dots">
            <div class="cssload-dot"></div>
            <div class="cssload-dot"></div>
            <div class="cssload-dot"></div>
            <div class="cssload-dot"></div>
            <div class="cssload-dot"></div>
          </div>
        </div>
      )}
      <div className="aboutComponent w-full relative">
        <NavBar />

        <div className="container h-[50vh] flex justify-center items-center">
          <h1 className="text-white text-6xl ">{t("Services")}</h1>
        </div>
      </div>
      <div className="container relative">
        <div className="row !flex !justify-center w-full text-center section-title">
          <h3 className="font-bold">{t("Our_Services")}</h3>
          <p className="container !max-w-[800px] text-center text-lg">
            {t("Our_Services_desc")}
          </p>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className=" bg-white shadow-lg rounded-lg p-4 service-thumb ">
                <div className="flex items-center justify-center mb-4">
                  <div class="thumb-icon flex justify-center items-center">
                    <BiSolidCar size={35} />
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-2">{t("Accident_law")}</h2>
                <p className="text-gray-700 ">{t("Accident_law_desc")}</p>
              </div>
              <div className=" bg-white shadow-lg rounded-lg p-4 service-thumb">
                <div className="flex items-center justify-center mb-4">
                  <div class="thumb-icon flex justify-center items-center">
                    <MdSecurity size={35} />
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-2">{t("Security_law")}</h2>
                <p className="text-gray-700 ">{t("Security_law_desc")}</p>
              </div>
              <div className=" bg-white shadow-lg rounded-lg p-4 service-thumb">
                <div className="flex items-center justify-center mb-4">
                  <div class="thumb-icon flex justify-center items-center">
                    <HiCodeBracket size={35} />
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-2">
                  {t("Personal_Injury")}
                </h2>
                <p className="text-gray-700 ">{t("Personal_Injury_desc")}</p>
              </div>
              <div className=" bg-white shadow-lg rounded-lg p-4 service-thumb ">
                <div className="flex items-center justify-center mb-4">
                  <div class="thumb-icon flex justify-center items-center">
                    <ImMan size={35} />
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-2">
                  {t("Criminal_Defence")}
                </h2>
                <p className="text-gray-700 ">{t("Criminal_Defence_desc")}</p>
              </div>
              <div className=" bg-white shadow-lg rounded-lg p-4 service-thumb ">
                <div className="flex items-center justify-center mb-4">
                  <div class="thumb-icon flex justify-center items-center">
                    <BsFillCloudFill size={35} />
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-2">{t("Brain_Injury")}</h2>
                <p className="text-gray-700 ">{t("Brain_Injury_desc")}</p>
              </div>
              <div className=" bg-white shadow-lg rounded-lg p-4 service-thumb">
                <div className="flex items-center justify-center mb-4">
                  <div class="thumb-icon flex justify-center items-center">
                    <PiMotorcycle size={35} />
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-2">
                  {t("Motorcycle_Accident")}
                </h2>
                <p className="text-gray-700 ">
                  {t("Motorcycle_Accident_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm,-6"></div>
      </div>
      <ContactusNow />
      <FindYourCaseDetails />
      <ContactDetails />
      <Footer />
    </>
  );
}
