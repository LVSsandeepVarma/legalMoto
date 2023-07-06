import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const AccordionComponent = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div
          className={`accordion-header !w-[100%] !flex ${
            activeIndex === 0 ? "active !bg-red-600 text-white font-bold" : ""
          }`}
          onClick={() => handleAccordionToggle(0)}
        >
          <div className="!flex justify-start w-[100%]">
            {t("Request_Consultation")}
          </div>
          <div className="flex justify-end w-full">
            {activeIndex === 0 ? (
              <BsDash
                className="accordion-icon justify-right items-center"
                size={25}
              />
            ) : (
              <BsPlus
                className="accordion-icon text-red-600 stroke-1"
                size={25}
              />
            )}
          </div>
        </div>
        <div
          className={`accordion-content  ${activeIndex === 0 ? "show" : ""}`}
        >
          {t("Request_Consultation_desc")}
        </div>
      </div>
      <div className="accordion-item">
        <div
          className={`accordion-header !w-[100%] !flex ${
            activeIndex === 1 ? "active !bg-red-600 text-white font-bold" : ""
          }`}
          onClick={() => handleAccordionToggle(1)}
        >
          <div className="!flex justify-start w-[100%]">
            {t("Investigation")}
          </div>
          <div className="flex justify-end w-full">
            {activeIndex === 1 ? (
              <BsDash
                className="accordion-icon justify-right items-center"
                size={25}
              />
            ) : (
              <BsPlus
                className="accordion-icon text-red-600 stroke-1"
                size={25}
              />
            )}
          </div>
        </div>
        <div className={`accordion-content ${activeIndex === 1 ? "show" : ""}`}>
          {t("Investigation_desc")}
        </div>
      </div>
      <div className="accordion-item">
        <div
          className={`accordion-header !w-[100%] !flex ${
            activeIndex === 2 ? "active !bg-red-600 text-white font-bold" : ""
          }`}
          onClick={() => handleAccordionToggle(2)}
        >
          <div className="!flex justify-start w-[100%]">{t("Case_fight")}</div>
          <div className="flex justify-end w-full">
            {activeIndex === 2 ? (
              <BsDash
                className="accordion-icon justify-right items-center"
                size={25}
              />
            ) : (
              <BsPlus
                className="accordion-icon text-red-600 stroke-1"
                size={25}
              />
            )}
          </div>
        </div>
        <div className={`accordion-content ${activeIndex === 2 ? "show" : ""}`}>
          {t("case_fight_desc1")}

          {t("case_fight_desc2")}
        </div>
      </div>
      <div className="accordion-item">
        <div
          className={`accordion-header !w-[100%] !flex ${
            activeIndex === 3 ? "active !bg-red-600 text-white font-bold" : ""
          }`}
          onClick={() => handleAccordionToggle(3)}
        >
          <div className="!flex justify-start w-[100%]">
            {t("We_serve_the_Best_Service")}
          </div>
          <div className="flex justify-end w-full">
            {activeIndex === 3 ? (
              <BsDash
                className="accordion-icon justify-right items-center"
                size={25}
              />
            ) : (
              <BsPlus
                className="accordion-icon text-red-600 stroke-1"
                size={25}
              />
            )}
          </div>
        </div>
        <div
          className={`accordion-content  ${activeIndex === 3 ? "show" : ""}`}
        >
          {t("We_serve_the_Best_Service_desc")}{" "}
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
