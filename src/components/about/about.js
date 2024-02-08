import React, { useState, useEffect } from "react";
import NavBar from "../Header/header";
import { PiHandshakeDuotone, PiMapPinFill } from "react-icons/pi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { Button } from "@mui/material";
import { BiPaperPlane } from "react-icons/bi";
import { Translation, useTranslation } from "react-i18next";

import {
  FaUniversity,
  FaMale,
  FaLaptop,
  FaTrophy,
  FaPlane,
} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import Footer from "../footer/footer";
import FindYourCaseDetails from "../findYourCaseDetails";
import ContactusNow from "../home/contactusNow";
import ContactDetails from "../contactDetails";

export default function About() {
  const { t } = useTranslation();
  const [showLoader, setShowLoader] = useState(true);
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
          <h1 className="text-white text-6xl ">{t("About_us")}</h1>
        </div>
      </div>
      <div className=" relative">
        <div class="howitwrap bg-white !mt-[10px] " id="about">
          <div class="container">
            <div className="row pt-10">
              <div className="col-md-5">
                {" "}
                <img src="images/legalmoto-advocate.jpg" alt="" />{" "}
              </div>
              <div className="col-md-7">
                <div className="stcontent">
                  <h1 className="text-red-600">
                    <b className="!text-black">{t("Welcome_to")}</b> LEGAL
                  </h1>
                  <h1 className="text-red-600">MOTO</h1>
                  <hr
                    className="!text-red-600 border-4 !border-red-600"
                    style={{
                      borderTop: "3px solid darkred",
                      width: "10%",
                      fontWeight: "bold",
                    }}
                  />
                  <p>{t("about_desc")}</p>
                  <ul className="howlist">
                    <li>
                      <div className="howbox">
                        <div className="iconcircle !flex justify-center items-center">
                          <FaUniversity className="!flex justify-center items-center text-4xl text-red-600" />
                        </div>
                        <h4>{t("Protect_Your_Rights")}</h4>
                        <p>{t("Protect_Your_Rights_desc")}</p>
                      </div>
                    </li>

                    <li>
                      <div className="howbox">
                        <div className="iconcircle !flex justify-center items-center">
                          <PiHandshakeDuotone className="!flex justify-center items-center text-4xl text-red-600" />
                        </div>
                        <h4>{t("Medical_Treatment")}</h4>
                        <p>{t("Medical_Treatment_desc")}</p>
                      </div>
                    </li>

                    <li>
                      <div className="howbox">
                        <div className="iconcircle !flex justify-center items-center">
                          <FaMale className="!flex justify-center items-center text-4xl text-red-600" />
                        </div>
                        <h4>{t("We_Fight_for_Justice")}</h4>
                        <p>{t("We_Fight_for_Justice_desc")}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" statistics !mt-[50px]">
          <div className="flex justify-center">
            <div className="card bg-transparent ml-5 mr-5">
              <div className="row">
                <div className="card-body text-center text-white border-1 mt-5 mb-5 !w-[15rem] mr-2  col-md-3 !bg-[rgba(255,255,255,0.4)] countdownCards">
                  <h1 className="card-title flex justify-center">
                    <IoIosPeople className="card-icon" size={75} />
                  </h1>
                  <h1 className="text-red-600">999</h1>
                  <p className="card-text">{t("Trusted_Client")}</p>
                </div>
                <div className="card-body text-center text-white border-1 mt-5 mb-5 !w-[15rem] mr-2 col-md-3 !bg-[rgba(255,255,255,0.4)] countdownCards">
                  <h1 className="card-title flex justify-center">
                    <FaUniversity className="card-icon" size={75} />
                  </h1>
                  <h1 className="text-red-600">1512</h1>
                  <p className="card-text">{t("Success_Cases")}</p>
                </div>
                <div className="card-body text-center text-white border-1 mt-5 mb-5 !w-[15rem] mr-2 col-md-3 !bg-[rgba(255,255,255,0.4)] countdownCards">
                  <h1 className="card-title flex justify-center">
                    <FaLaptop className="card-icon" size={75} />
                  </h1>
                  <h1 className="text-red-600">1756</h1>
                  <p className="card-text">{t("Case_Study")}</p>
                </div>
                <div className="card-body text-center text-white border-1 mt-5 mb-5 !w-[15rem] mr-2 col-md-3 !bg-[rgba(255,255,255,0.4)] countdownCards">
                  <h1 className="card-title flex justify-center">
                    <FaTrophy className="card-icon" size={75} />
                  </h1>
                  <h1 className="text-red-600">101</h1>
                  <p className="card-text">{t("Awards")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactusNow />
        <FindYourCaseDetails />
        <ContactDetails />
        <Footer />
      </div>
    </>
  );
}
