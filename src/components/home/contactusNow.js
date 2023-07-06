import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function ContactusNow() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/contact-us/#");
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <>
      <div className="row !bg-red-600 text-center text-white pt-[50px] pb-[50px] !mt-[50px]">
        <h2>{t("Call_Today_For_A_FREE_Consultation")}</h2>
        <h1 className="font-bold">+60 194260687</h1>
        <p>{t("Get_Help_with_All_of_Your_Legal_Needs")}</p>
        <div className="flex justify-center">
          <Button
            className="!bg-black text-white !border-transparent !text-xl !font-bold w-fit p-3"
            onClick={handleNavigation}
          >
            {t("CONTACT_US_NOW")}
          </Button>
        </div>
      </div>
    </>
  );
}
