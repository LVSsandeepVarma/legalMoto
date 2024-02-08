import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { BiPaperPlane } from "react-icons/bi";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function FindYourCaseDetails() {
  const [showLoader, setShowLoader] = useState(false);
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const [show, setShow] = useState(false);
  const [emailErr, setEmailErr] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    if (email?.length > 0) {
      const response = await validEmail(email);
      if (response) {
        setEmailErr("");
        setEmail("");
        handleShow();
      } else {
        setEmailErr("Please enter a valid email");
      }
    } else {
      setEmailErr("Email is required");
    }
  };

  function validEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+$/;

    return emailRegex.test(email);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validationSchema = Yup.object({
    complaintID: Yup.string().required("complaint id required"),
  });

  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="!text-center w-full">
            {t("Your_Case_Details")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="">{t("Your_Case_Details_desc")}</Modal.Body>
        <Modal.Footer className="!flex !justify-center">
          <Button
            className="!bg-[#009688] !border-[#009688] text-white w-fit p-2 mr-1 !rounded-none"
            onClick={handleClose}
          >
            Close
          </Button>
          {/* Additional footer buttons can be added here */}
        </Modal.Footer>
      </Modal>
      <div className=" !mt-[150px]">
        <div class="newsletter bg-black pt-[20px] pb-[20px]">
          <div class="container">
            <div class="row">
              <div class="col-md-4 flex items-center">
                <h3 className="text-white font-bold">
                  {t("Find_Your_Case_Details")}
                </h3>
              </div>
              <div class="col-md-8">
                <div class="flex">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    required=""
                    value={email}
                    className=" !pl-4 pr-2 pt-2 pb-2 w-[50%] "
                    onChange={handleEmailChange}
                  />
                  <div className="flex border-0 ">
                    <Button
                      className="!flex text-white !rounded-none !bg-red-600 !border-red-600 text-xl "
                      onClick={handleSubmit}
                    >
                      Track <BiPaperPlane className="ml-2" size={20} />
                    </Button>
                  </div>
                  <div className="flex border-0 !items-center ml-2">
                    {emailErr.length > 0 ? (
                      <p className="text-red-600 font-bold !m-0 ">{emailErr}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div>
                  {/* {emailErr.length > 0 ? (
                    <p className="text-red-600 font-bold !p-0 ">{emailErr}</p>
                  ) : (
                    ""
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
