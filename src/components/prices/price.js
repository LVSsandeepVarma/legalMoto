import React, { useState, useEffect } from "react";
import NavBar from "../Header/header";
import { PiMapPinFill } from "react-icons/pi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { Button } from "@mui/material";
import { BiPaperPlane } from "react-icons/bi";
import Footer from "../footer/footer";
import ComplaintModal from "./pricingFormModal";
import FindYourCaseDetails from "../findYourCaseDetails";
import ContactusNow from "../home/contactusNow";
import ContactDetails from "../contactDetails";
import { useTranslation } from "react-i18next";

export default function Price() {
  const [showLoader, setShowLoader] = useState(true);
  const [show, setShow] = useState(false);
  const [plan, setPlan] = useState("Basic");
  const { t } = useTranslation();
  useEffect(() => {
    setShowLoader(false);
  }, []);

  const handleBasicPlan = () => {
    setPlan("Basic");
    setShow(true);
  };

  const handleCorporatePlan = () => {
    setPlan("Corporate");
    setShow(true);
  };

  const handlePremiumPlan = () => {
    setPlan("Premium");
    setShow(true);
  };

  return (
    <>
      <ComplaintModal show={show} handleClose={setShow} plan={plan} />
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
          <h1 className="text-white text-6xl ">{t("Corporate_Advocate")}</h1>
        </div>
      </div>
      <div className="container relative">
        <div className="row !flex !justify-center w-full text-center section-title ">
          <h3 className="text-red-800">
            <b className="text-black font-bold">{t("our")}</b> {t("PACKAGES")}
          </h3>
          <p className="container !max-w-[800px] text-center text-lg">
            {t("OUR_PACKAGES_desc")}
          </p>
          <ul class="row packageList">
            <li class="col-md-4 col-sm-6">
              <div class="packbox">
                <h3>{t("Basic")}</h3>
                <div class="price">
                  <strong>RM 200</strong> <span>per year</span>
                </div>
                <p>{t("15_COURT")}</p>
                <p>{t("LEGAL_DOCUMENT_DRAFTING")}</p>
                <p>{t("SHIFT_TIMING_ADVOCATE")}</p>
                <p>{t("OFFICE_HOURS_SUPPORT")}</p>

                <div class="booknow">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={() => handleBasicPlan()}
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </li>

            <li class="col-md-4 col-sm-6">
              <div class="packbox">
                <h3>{t("Corporate")}</h3>
                <div class="price">
                  <strong>RM 350</strong> <span>per year</span>
                </div>
                <p>{t("25_COURT")}</p>
                <p>{t("LEGAL_DOCUMENT_DRAFTING")}</p>
                <p>{t("SHIFT_TIMING_ADVOCATE")} </p>
                <p>{t("OFFICE_HOURS_SUPPORT")}</p>

                <div class="booknow">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={() => handleCorporatePlan()}
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </li>

            <li class="col-md-4 col-sm-6">
              <div class="packbox">
                <h3>{t("Premium")}</h3>
                <div class="price">
                  <strong>RM 550</strong> <span>per year</span>
                </div>
                <p>{t("35_COURT")}</p>
                <p>{t("LEGAL_DOCUMENT_DRAFTING")}</p>
                <p>{t("DEDICATED_ADVOCATE")}</p>
                <p>{t("24/7_SUPPORT")}</p>

                <div class="booknow">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={() => handlePremiumPlan()}
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </li>
          </ul>
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
