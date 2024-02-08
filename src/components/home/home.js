import React, { useEffect, useState } from "react";
import NavBar from "../Header/header";
import { Card } from "react-bootstrap";
import { Button } from "@mui/material";
import ComplaintForm from "./complaintsForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PiHandshakeDuotone, PiMapPinFill } from "react-icons/pi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { useTranslation } from "react-i18next";

import {
  FaUniversity,
  FaMale,
  FaLaptop,
  FaTrophy,
  FaPlane,
} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BiPaperPlane } from "react-icons/bi";
import AccordionComponent from "./accordionfaq";
import { TypeAnimation } from "react-type-animation";

import Footer from "../footer/footer";
import ContactusNow from "./contactusNow";
import FindYourCaseDetails from "../findYourCaseDetails";
import ContactDetails from "../contactDetails";

export default function HomeChi() {
  const { t } = useTranslation();
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setShowLoader(false);
  }, []);
  return (
    <div className="HomeComponent ">
      {/* <div className="video-background">
        <video  autoPlay loop muted>
          <source src="/shutterstock_1101445101.mov" type="video/mp4" />
        </video> 
       </div> */}

      {showLoader && (
        <div className="preloader">
          <div className="cssload-dots">
            <div className="cssload-dot"></div>
            <div className="cssload-dot"></div>
            <div className="cssload-dot"></div>
            <div className="cssload-dot"></div>
            <div className="cssload-dot"></div>
          </div>
        </div>
      )}
      <NavBar />
      <div className="container flex justify-center !mt-[150px] !mb-[50px]">
        <div className="row !flex items-start ">
          <div className="headingSection col-md-6 text-left ">
            <h2 className="text-white font-bold">
              {t("What_we_can_do")}&nbsp;
              <span id="text-to-toggle !text-lg">
                <TypeAnimation
                  className="!text-4xl !text-red-600"
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    " Divorce",
                    3000, // wait 1s before replacing "Mice" with "Hamsters"
                    " penceraian",
                    3000,
                    " Defamation",
                    3000,
                    " Fitnah",
                    3000,
                    " Injury",
                    3000,
                    " Kecederaan",
                    3000,
                    " Accident",
                    3000,
                    " Kemalangan",
                    3000,
                    " Corporate Advocate",
                    3000,
                    " Peguambela Korporat",
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </span>
            </h2>
            <h1 className="text-white font-bold">{t("Welcome_to")} Legal</h1>
            <h1 className="text-white font-bold">Moto!</h1>
            <p className="text-white">{t("title_desc")}</p>
            <Button className="!bg-red-600 !border-transparent text-white !text-xl !font-bold mb-3 w-fit p-3">
              {t("get_started")}
            </Button>
          </div>
          <div className="formSection col-md-6">
            <ComplaintForm />
          </div>
        </div>
      </div>
      {/* welcome to legalmoto container */}
      <div className="relative !bg-white ">
        <div className="row ">
          {/* <div className="col-md-6 mt-5 pl-0 sm:!pl-[150px] pr-0 sm:!pr-[150px]">
            <img src={"/images/legalmoto-advocate.jpg"} height={"100%"} width={"100%"} alt="advocate_image" />
          </div>
          <div className="col-md-6 text-left mt-5 pl-0 sm:!pl-[150px] pr-0 sm:!pr-[150px]">
            <h1 className="text-red-600">
              <b className="!text-black">WELCOME TO</b> LEGAL
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
            <p>
              Our associates are legal professionals with qualifications
              obtained from various international jurisdictions. Their training
              and experience enable them to provide high levels of legal advice
              and expertise in each case.
            </p>
            <ul className="howlist">
              <li>
                <div className="howbox">
                  <div className="iconcircle !flex justify-center items-center">
                    <FaUniversity className="!flex justify-center items-center text-4xl text-red-600" />
                  </div>
                  <h4>Protect Your Rights</h4>
                  <p>
                    Learn more here about what your rights are, how to exercise
                    them and what to do when your rights are violated
                  </p>
                </div>
              </li>

              <li>
                <div className="howbox">
                  <div className="iconcircle !flex justify-center items-center">
                    <PiHandshakeDuotone className="!flex justify-center items-center text-4xl text-red-600" />
                  </div>
                  <h4>Medical Treatment</h4>
                  <p>
                    Discover how health policies are developed, adopted and
                    implemented, as well as the factors that influence this
                    process.
                  </p>
                </div>
              </li>

              <li>
                <div className="howbox">
                  <div className="iconcircle !flex justify-center items-center">
                    <FaMale className="!flex justify-center items-center text-4xl text-red-600" />
                  </div>
                  <h4>We Fight for Justice</h4>
                  <p>
                    Fairness and inclusivity by tackling systemic discrimination
                    through the power of strategic legal action, education and
                    advocacy
                  </p>
                </div>
              </li>
            </ul>
          </div> */}
          <div className="howitwrap !mt-[50px] " id="about">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  {" "}
                  <img src={"/images/legalmoto-advocate.jpg"} alt="" />{" "}
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
        </div>
        <div className=" container !flex !justify-center !mt-[50px] ">
          <div className="row flex justify-center">
            <h1 className="col-md-12 text-center text-red-600">
              <b className="!text-black font-bold"> {t("PRACTICE")}</b>{" "}
              {t("AREAS")}
            </h1>
            <div className="!flex !justify-center">
              <hr
                className="!text-red-600 border-4 !border-red-600"
                style={{
                  borderTop: "3px solid darkred",
                  width: "10%",
                  fontWeight: "bold",
                }}
              />
            </div>

            <p className="">{t("PRACTICE_AREAS_desc")}</p>

            <div className="row flex justify-center !mt-[50px] ">
              <div className="col-md-3 col-sm-12 mt-2">
                <Card className="!h-full">
                  <div className="!overflow-hidden">
                    <Card.Img
                      src="/images/legalmoto-divorce.jpg"
                      alt="Image"
                      className="card-image "
                    />
                  </div>

                  <Card.Body>
                    <Card.Title className="!text-red-600 text-bold">
                      {t("Divorce_Law")}
                    </Card.Title>
                    <p className="card-text">{t("Divorce_Law_desc")}</p>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 col-sm-12 mt-2">
                <Card className="!h-full">
                  <div className="!overflow-hidden">
                    <Card.Img
                      src="/images/legalmoto-litigation.jpg"
                      alt="Image"
                      className="card-image "
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="!text-red-600 text-bold">
                      {t("Litigation")}
                    </Card.Title>

                    <p className="card-text">{t("Litigation_desc")}</p>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 col-sm-12 mt-2">
                <Card className="!h-full">
                  <div className="!overflow-hidden">
                    <Card.Img
                      src="/images/legalmoto-accident.jpg"
                      alt="Image"
                      className="card-image "
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="!text-red-600 font-bold">
                      {t("Accident_Law")}
                    </Card.Title>
                    <p className="card-text">{t("Accident_Law_desc")}</p>
                  </Card.Body>
                </Card>
              </div>

              {/* Repeat the above Card component for other cards */}
            </div>
            <div className="row flex justify-center !mt-[50px] ">
              <div className="col-md-3 col-sm-12 mt-2">
                <Card className="!h-full">
                  <div className="!overflow-hidden">
                    <Card.Img
                      src="/images/legalmoto-drug.jpg"
                      alt="Image"
                      className="card-image "
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="text-red-600 font-bold">
                      {t("Drug_Law")}
                    </Card.Title>
                    <p className="card-text">{t("Drug_Law_desc")}</p>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 col-sm-12 mt-2">
                <Card className="!h-full">
                  <div className="!overflow-hidden">
                    <Card.Img
                      src="/images/legalmoto-personal.jpg"
                      alt="Image"
                      className="card-image "
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="text-red-600 font-bold">
                      {t("Personal_Law")}
                    </Card.Title>
                    <p className="card-text">{t("Personal_Law_desc")}</p>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 col-sm-12 mt-2">
                <Card className="!h-full">
                  <div className="!overflow-hidden">
                    <Card.Img
                      src="/images/legalmoto-criminal.jpg"
                      alt="Image"
                      className="card-image "
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="text-red-600 font-bold">
                      {t("Criminal_Law")}
                    </Card.Title>
                    <p className="card-text">{t("Criminal_Law_desc")}</p>
                  </Card.Body>
                </Card>
              </div>

              {/* Repeat the above Card component for other cards */}
            </div>
          </div>
        </div>
        <div className="row !flex !justify-center !mt-[50px] personalContainer">
          <div className="col-md-4 !flex !items-end ">
            <img
              src="/images/legalmoto-personalInjury.png"
              alt="personalInjury Representative"
              height={"100%"}
              width={"100%"}
              className="!h-[100%]"
            />
          </div>
          <div className="col-md-6 text-left !pl-[3rem] sm:!pl-0 !pr-[2rem] sm:!pr-0  !mt-10 sm:!mt-[50px] text-white">
            <h1>{t("PERSONAL_INJURY_LAWYERS")}</h1>
            <hr className="!w-[10%]"></hr>
            <p>{t("PERSONAL_INJURY_LAWYERS_desc")}</p>
            <Button className="!bg-red-600 text-white !border-red-600 w-fit p-3">
              {t("read_more")} -&gt;
            </Button>
          </div>
        </div>
        <div className="container !flex !justify-center !mt-[50px]">
          <div className="row flex justify-center">
            <h1 className="text-red-600">
              <b className="font-bold text-black">{t("our")}</b> {t("GALLERY")}
            </h1>
            <div className="!flex !justify-center">
              <hr
                className="!text-red-600 border-4 !border-red-600"
                style={{
                  borderTop: "3px solid darkred",
                  width: "10%",
                  fontWeight: "bold",
                }}
              />
            </div>
            <p>{t("our_gallery_desc")}</p>
            <div className="row !flex !justify-center">
              <div className="col-lg-4 col-sm-6">
                <Card>
                  <Card.Body>
                    <div className="overflow-hidden">
                      <img
                        src="/images/legalmoto-galery1.jpg"
                        className="galleryAnimate"
                        alt="law image"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-sm-6">
                <Card>
                  <Card.Body>
                    <div className="overflow-hidden">
                      <img
                        src="/images/legalmoto-galary2.jpg"
                        className="galleryAnimate"
                        alt="law image 2"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-sm-6">
                <Card>
                  <Card.Body>
                    <div className="overflow-hidden">
                      <img
                        src="/images/legalmoto-galary3.jpg"
                        className="galleryAnimate"
                        alt="law image3"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>
              {/* </div> */}
              {/* <div className="row !flex !justify-center"> */}
              <div className="col-md-4 col-sm-6">
                <Card>
                  <Card.Body>
                    <div className="overflow-hidden">
                      <img
                        src="/images/legalmoto-galary8.jpg"
                        className="galleryAnimate"
                        alt="law image 4"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-sm-6">
                <Card>
                  <Card.Body>
                    <div className="overflow-hidden">
                      <img
                        src="/images/legalmoto-galary9.jpg"
                        className="galleryAnimate"
                        alt="law image 5"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-sm-6">
                <Card>
                  <Card.Body>
                    <div className="overflow-hidden">
                      <img
                        src="/images/legalmoto-galary6.jpg"
                        className="galleryAnimate"
                        alt="law imag6"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>
              {/* </div> */}
              {/* <div className="row !flex !justify-center"> */}
              <div className="col-md-4 col-sm-6">
                <Card>
                  <Card.Body>
                    <div className="overflow-hidden">
                      <img
                        src="/images/quality-ofdocumentation.jpg"
                        className="galleryAnimate"
                        alt="law imag7"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-sm-6">
                <Card>
                  <Card.Body>
                    <div className="overflow-hidden">
                      <img
                        src="/images/fit-for-your-case.jpg"
                        className="galleryAnimate"
                        alt="law image8"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-sm-6">
                <Card>
                  <Card.Body>
                    <div className="overflow-hidden">
                      <img
                        src="/images/attention-details.jpg"
                        className="galleryAnimate"
                        alt="law imag9"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <ContactusNow />
        <div className="container  !mt-[50px]">
          <div className="row">
            <div className="col-md-6">
              {/* <AccordionComponent/> */}
              <AccordionComponent />
            </div>
            <div className="col-md-6">
              <img src="/images/legalmoto-consulltant.png" />
            </div>
          </div>
        </div>
        <div className="row statistics !mt-[50px]">
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
        <div className="container !flex !justify-center !mt-[50px]">
          <div className="row">
            <h1 className="text-red-600">
              <b className="!text-black font-bold">{t("LATEST_FROM")}</b>{" "}
              {t("blog")}
            </h1>
            <div className="!flex !justify-center">
              <hr
                className="!text-red-600 border-4 !border-red-600"
                style={{
                  borderTop: "3px solid darkred",
                  width: "10%",
                  fontWeight: "bold",
                }}
              />
            </div>
            <p>{t("LATEST_FROM_BLOG_desc")}</p>
            <div className="col-md-7 col-sm-12 relative !mb-3">
              <img
                className="w-full h-100 !mb-3 relative lg:absolute"
                src="/images/legalmoto-blog1.jpg"
                alt="blog1 img"
              />
              <div className=" absolute bottom-[10px] w-[90%]  text-white text-left ml-5">
                <Button className="!bg-red-600 !border-red-600 font-bold text-white ">
                  10 APR 2022
                </Button>
                <h1 className="text-left text-xl font-bold text-white">
                  The Federal Law No. 4 of 1979 on Combating Commercial Malaysia
                  Trademark Law.
                </h1>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 ml-0  md:ml-4 relative">
              <div className="relative">
                <img
                  className="mb-4 w-full "
                  src="/images/legalmoto-blog2.jpg"
                  alt="blog 2 img"
                />
                <div className=" absolute bottom-[0px] w-[80%]  text-white text-left ml-5">
                  <Button className="!bg-red-600 !border-red-600 font-bold text-white">
                    10 APR 2022
                  </Button>
                  <p className="text-left text-lg font-bold text-white">
                    Federal Decree Law No. 7 of 2017 on Excise Tax.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img
                  className="mb-4 w-full "
                  src="/images/legalmoto-blog3.jpg"
                  alt="blog 3 img"
                />
                <div className=" absolute bottom-[0px] w-[90%]  text-white text-left ml-5">
                  <Button className="!bg-red-600 !border-red-600 font-bold text-white">
                    10 APR 2022
                  </Button>
                  <p className="text-left text-lg font-bold text-white">
                    Malaysia Federal Law No. 2 of 2015 on Commercial Companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FindYourCaseDetails />
        <ContactDetails />
      </div>
      <Footer />
    </div>
  );
}
