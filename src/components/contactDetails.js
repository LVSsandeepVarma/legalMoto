import React from "react";
import { useTranslation } from "react-i18next";
import { PiHandshakeDuotone, PiMapPinFill } from "react-icons/pi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

export default function ContactDetails() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container !mt-[50px]">
        <div className="row">
          <div className="col-md-4 ">
            <div className="flex justify-center intems-center">
              <div className="!bg-red-600 rounded-full h-auto w-auto p-5">
                <PiMapPinFill className="!text-white" size={45} />
              </div>
            </div>
            <h2 className="font-bold text-center mt-2">{t("ADDRESS")}</h2>
            <p className="text-center !text-[#545454] font-bold">
              Level-6 & 6M, Menara The Stride, Bukit Bintang City Center, No.2,
              Jalan Hang Tuah, 55100, Kuala Lumpur, Malaysia
            </p>
          </div>
          <div className="col-md-4 ">
            <div className="flex justify-center intems-center">
              <div className="!bg-red-600 rounded-full h-auto w-auto p-5">
                <BsFillTelephoneFill className="!text-white" size={45} />
              </div>
            </div>
            <h2 className="font-bold text-center mt-2">{t("PHONE")}</h2>
            <p className="text-center !text-[#545454] font-bold">
              +60 194260687
            </p>
          </div>
          <div className="col-md-4 ">
            <div className="flex justify-center intems-center">
              <div className="!bg-red-600 rounded-full h-auto w-auto p-5">
                <AiFillMail className="!text-white" size={45} />
              </div>
            </div>
            <h2 className="font-bold text-center mt-2">{t("EMAIL")}</h2>

            <a href="mailto:file@thelegalmoto.com">
              <p className="text-center !text-[#545454] font-bold">
                file@thelegalmoto.com
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
