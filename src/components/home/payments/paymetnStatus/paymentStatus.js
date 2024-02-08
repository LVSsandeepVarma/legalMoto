import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VerticalCarousel from "../ScrollingImages";
import { Modal } from "react-bootstrap";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../../languageDetector";

export default function PaymentStatus() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [paymentStatus, setPaymentstatus] = useState(true);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [phoneNum, setPhoneNum] = useState("");
  const [complaint, setComplaint] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [date, setDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [complaintNo, setComplaintNo] = useState("");
  const [error, setError] = useState(t("something_went_wrong"));
  const [infoModalTitle, setInfoModalHeading] = useState("Error");
  const scrollToRef = useRef();
  const [clientCurrentCountry, setClientCurrentCountry] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    setShowLoader(true);
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    function successCallback(position) {
      console.log(position);
      const fetchData = async () => {
        setShowLoader(true);
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
          );
          const data = await response.json();
          const client_country = extractCountry(data);
          setClientCurrentCountry(client_country);
          //  setShowLoader(false)
        } catch (error) {
          console.error("Error fetching country:", error);
          //  setShowLoader(false)
        }
        //   setShowLoader(false)
      };

      fetchData();

      const extractCountry = (data) => {
        const { address } = data;
        if (address && address.country) {
          return address.country;
        }
        return "Unknown";
      };
    }
    function errorCallback(error) {
      console.log("error", error);
    }
    const currentUrl = window.location.pathname;
    const pageViewCount = sessionStorage.getItem("pageViewCount");
    //   if(pageViewCount == 1){
    //    sessionStorage.removeItem("pageViewCount");
    //    window.location.href = "/"
    //    sessionStorage.removeItem("pageViewCount");        }
    //   else if(pageViewCount == 0){
    //    sessionStorage.setItem("pageViewCount",1)
    //   }else{
    //    sessionStorage.setItem("pageViewCount",0)
    //   }
    console.log(performance.navigation.type);
    if (performance.navigation.type === 2) {
      window.location.href = `https://versed.thelegalmoto.com/`;
    }
    const fetchGeolocation = async () => {
      const response = await fetch("http://ip-api.com/json");
      const data = await response.json();

      if (data && data.country) {
        const countryName = data.country;
        setClientCurrentCountry(countryName);
        console.log(countryName); // Display or use the country name as needed
      }
    };

    //  fetchGeolocation();
    setCurrentDate(
      new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    );

    const clientName = sessionStorage.getItem("name");
    const clientPhone = sessionStorage.getItem("phone");
    const clientComplaint = sessionStorage.getItem("complaint");
    const clientEmail = sessionStorage.getItem("email");
    const clientCountry = sessionStorage.getItem("country");
    const token = sessionStorage.getItem("twToken");
    console.log(token, localStorage.getItem("twToken"));
    setName(clientName);
    setPhoneNum(clientPhone);
    setComplaint(clientComplaint);
    setEmail(clientEmail);
    setCountry(clientCountry);

    console.log(id);

    const verifyPayment = async () => {
      setShowLoader(true);
      try {
        if (token) {
          const response = await axios.post(
            "https://admin.thelegalmoto.com/api/client/verify/payment",
            { payment_id: id },
            {
              headers: {
                "access-token": token,
              },
            }
          );
          console.log(
            response?.data,
            response?.data?.data?.payment,
            response?.data?.data?.payment?.transaction_id,
            response?.data?.data?.client?.firstname,
            response?.data?.data?.complaint,
            response?.data?.data?.complaint?.description
          );
          // setAddressOne(response?.data?.data?.client?.)
          // setAddressTwo(response?.data?.data?.client?.);
          console.log(response?.data?.data?.payment?.date);
          setName(response?.data?.data?.client?.firstname);
          setComplaint(response?.data?.data?.complaint?.description);
          setEmail(response?.data?.data?.client?.email);
          setPhoneNum(response?.data?.data?.client?.phone);
          setCountry(response?.data?.data?.address?.country);
          setCity(response?.data?.data?.address?.city);
          setState(response?.data?.data?.address?.state);
          setZipcode(response?.data?.data?.address?.zipcode);
          setTransactionId(response?.data?.data?.payment?.transaction_id);
          setTransactionDate(response?.data?.data?.payment?.date);
          setAddressOne(response?.data?.data?.address?.address_1);
          setAddressTwo(response?.data?.data?.address?.address_2);
          setTransactionDate(
            new Date(response?.data?.data?.payment?.date).toLocaleDateString(
              "en-GB",
              { day: "2-digit", month: "long", year: "numeric" }
            )
          );
          setComplaintNo(response?.data?.data?.complaint?.complaint_no);
          if (response?.data?.status) {
            // setShowLoader(false)
            setTransactionId(response?.data?.data?.payment?.transaction_id);
            if (response?.data?.code === "SUCCESS") {
              // setShowLoader(false)
              setPaymentstatus(true);
            } else if (response?.data?.code === "EXISTS") {
              // setShowLoader(false)
              setPaymentstatus(true);
              setError(`Payment Completed for order number ${id}`);
              setShowModal(true);
              setInfoModalHeading("Success");
            } else {
              setPaymentstatus(true);
              //   setShowLoader(false)
            }
          } else {
            setTransactionId(id);
            if (response?.data?.code === "ACTION_REQ") {
              window.location.replace(response?.data?.url);
            } else if (response?.data?.code === "FAILED") {
              setPaymentstatus(false);
            } else {
              setPaymentstatus(false);
            }
            // setShowLoader(false)
          }
        } else {
          setShowLoader(true);

          const response = await axios.post(
            "https://admin.thelegalmoto.com/api/client/verify/payment",
            { payment_id: id },
            {
              headers: {
                "access-token": localStorage.getItem("twToken"),
              },
            }
          );
          console.log(
            response?.data,
            response?.data?.data?.payment,
            response?.data?.data?.payment?.transaction_id,
            response?.data?.data?.client?.firstname,
            response?.data?.data?.complaint,
            response?.data?.data?.complaint?.description
          );
          // setAddressOne(response?.data?.data?.client?.)
          // setAddressTwo(response?.data?.data?.client?.);
          console.log(response?.data?.data?.payment?.date);
          setName(response?.data?.data?.client?.firstname);
          setComplaint(response?.data?.data?.complaint?.description);
          setEmail(response?.data?.data?.client?.email);
          setPhoneNum(response?.data?.data?.client?.phone);
          setCountry(response?.data?.data?.address?.country);
          setCity(response?.data?.data?.address?.city);
          setState(response?.data?.data?.address?.state);
          setZipcode(response?.data?.data?.address?.zipcode);
          setTransactionId(response?.data?.data?.payment?.transaction_id);
          setTransactionDate(response?.data?.data?.payment?.date);
          setAddressOne(response?.data?.data?.address?.address_1);
          setAddressTwo(response?.data?.data?.address?.address_2);
          setTransactionDate(
            new Date(response?.data?.data?.payment?.date).toLocaleDateString(
              "en-GB",
              { day: "2-digit", month: "long", year: "numeric" }
            )
          );
          setComplaintNo(response?.data?.data?.complaint?.complaint_no);
          if (response?.data?.status) {
            setTransactionId(response?.data?.data?.payment?.transaction_id);
            // setShowLoader(false)
            if (response?.data?.code === "SUCCESS") {
              setPaymentstatus(true);
            } else if (response?.data?.code === "EXISTS") {
              setPaymentstatus(true);
              setError(`Payment Completed for order number ${id}`);
              setShowModal(true);
              setInfoModalHeading("Success");
            } else {
              setPaymentstatus(true);
            }
          } else {
            setTransactionId(id);
            if (response?.data?.code === "ACTION_REQ") {
              window.location.replace(response?.data?.url);
            } else if (response?.data?.code === "FAILED") {
              setPaymentstatus(false);
            } else if (response?.data?.code === "TOKEN_EXPIRED") {
              setPaymentstatus(false);
              setError(t("cannot_do_the_transaction"));
              setShowModal(true);
              setInfoModalHeading("Error");
            } else {
              setPaymentstatus(false);
            }
            // setShowLoader(false)
          }
        }
      } catch (err) {
        console.log(err, "err");
        //   setShowLoader(false)
      }
    };
    verifyPayment();
    //  scrollToRef.current.scrollIntoView();
    //  const timeOut  =setTimeout(()=>{
    //    setShowLoader(false);
    // },3000)

    //  const handleBeforeUnload = (event) => {
    //    // Cancel the default behavior
    //    event.preventDefault();
    //    // Chrome requires the returnValue to be set
    //    event.returnValue = "";

    //    // Display the alert message
    //    alert("Please stay on this page.");

    //    // Redirect to the home page
    //    window.location.href = "/";
    //  };

    //  window.addEventListener("beforeunload", handleBeforeUnload);
    //  setShowLoader(false);
    //  return () => {
    //    // Cleanup: remove the event listener when the component is unmounted
    //    window.removeEventListener("beforeunload", handleBeforeUnload);
    //  };

    const timeOut = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    // clearTimeout(timeOut);
  }, [id]);
  window.addEventListener("beforeunload", function (event) {
    // Display the alert message
    event.preventDefault();
    event.returnValue = "";

    // Redirect to the home page
    window.location.href = "https://versed.thelegalmoto.com/";
  });

  const handleModalDecision = (shouldRefresh) => {
    window.location.href = "/";
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal centered className="" show={showModal}>
          <Modal.Title className="bg-white text-center pt-2">
            {infoModalTitle} <hr className="mt-0 mb-0" />
          </Modal.Title>
          <Modal.Body className="bg-white">
            <p className="font-bold text-gray-600 text-center">{error}</p>
            <div className="flex justify-center !w-full">
              <Button
                className="!bg-[#009688] !border-[#009688] !text-white w-fit p-2 mr-1 !rounded-none"
                onClick={() => handleModalDecision(true)}
              >
                Return to home
              </Button>
              {/* <Button className='!bg-black !border-black w-fit p-2 ml-1' onClick={() => handleModalDecision(false)}>Cancel</Button> */}
            </div>
          </Modal.Body>
        </Modal>
      )}
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
      <div className="container bg-muted checkout">
        <div className="row">
          <div className="col-sm-12 pt-2 shadow-sm">
            <div className="d-flex align-items-center justify-content-between">
              <img src="/images/brandlogo.png" width="100px" />
              <p className="mb-0 flex items-center">
                <i className="fa-solid fa-location-dot text-theme"></i>{" "}
                <span className="text-muted mr-5">{clientCurrentCountry}</span>
                <LanguageSelector />{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <h6 className="text-muted">{t("offer_to_client")}</h6>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
                <div className="top-cards dashed-border bg-danger-custom text-center">
                  <i
                    className="fa-regular fa-clock text-white pt-3"
                    style={{ fontSize: "48px" }}
                  ></i>
                  <h3 className="text-white pt-3"> {t("atc")}</h3>
                  <p className="text-white fs-14 px-3">{t("atc_desc")}</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
                <div className="top-cards dashed-border bg-light text-center">
                  <i
                    className="fa-solid fa-video pt-3"
                    style={{ fontSize: "48px" }}
                  ></i>
                  <h3 className="pt-3"> {t("qr")}</h3>
                  <p className="text-muted fs-14 px-3">{t("qr_desc")}</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
                <div className="top-cards dashed-border bg-light text-center">
                  <i
                    className="fa-solid fa-gavel pt-3"
                    style={{ fontSize: "48px" }}
                  ></i>
                  <h3 className="pt-3"> {t("sl")}</h3>
                  <p className="text-muted fs-14 px-3">{t("sl_desc")}</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
                <div className="top-cards dashed-border bg-light text-center">
                  <i
                    className="fa-solid fa-shield-halved pt-3"
                    style={{ fontSize: "48px" }}
                  ></i>
                  <h3 className="pt-3"> {t("pc")}</h3>
                  <p className="text-muted fs-14 px-3">{t("pc_desc")}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-3 !h-full">
            <VerticalCarousel />
          </div>
        </div>
        {/* <hr/> */}
        <div
          id="payment-status"
          ref={scrollToRef}
          className={`row mt-3 bg-white border-1 ${
            paymentStatus ? "border-green-600" : "!border-red-600"
          }`}
        >
          <div className="col-lg-9 mx-auto">
            <h4 className="text-muted text-center pt-3">
              {paymentStatus ? "Payment Successfull" : "Payment Failed"}{" "}
            </h4>
            {/* <p className="text-muted fs-14 text-center">We have received your inquiry, our advocate's are here to help you on that.</p> */}
            <div className="checkout-card mx-auto">
              <div className="row">
                <div className="col-xl-12 border-right">
                  <div className="title">
                    <div className="row">
                      <div className="col-xl-12  ">
                        <div className="flex w-full justify-center">
                          <img
                            src="https://gtechwebservice.com/legalmoto/assets/img/GIF-Logo.gif"
                            width="100px"
                          />
                        </div>
                        {/* <hr/> */}
                        <p className="!text-sm">
                          {paymentStatus
                            ? t("payment_success_msg")
                            : t("payment_failed_msg")}
                        </p>
                        <p className="!text-sm "></p>
                      </div>
                      <div className="row">
                        <div
                          className="col-lg-6"
                          style={{
                            borderRight: "1px solid rgb(222, 226, 230)",
                          }}
                        >
                          <div className="row">
                            <div className="col-12 col-md-6 col-lg-12 col-xl-12">
                              <div className="input-field">
                                <div className="row">
                                  <div className="col-md-6">
                                    <p className="font-bold !text-left !p-0">
                                      {t("client_details")}
                                    </p>
                                  </div>
                                  <div className="col-md-6">
                                    <p className="!text-right p-0 text-muted !text-sm">
                                      {currentDate}
                                    </p>
                                  </div>
                                </div>
                                <label for="Full Name" className="lbl-orange">
                                  {t("full_name")}
                                </label>
                                <p className="mb-0 p-0 text-left text-muted fs-16 !text-left">
                                  {name}
                                </p>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xl-12">
                              <div className="input-field">
                                <label
                                  for="Phone Number"
                                  className="lbl-orange"
                                >
                                  {t("email")}
                                </label>
                                <p className="mb-0 p-0 text-left text-muted fs-16 !text-left">
                                  {email}
                                </p>
                              </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                              <div className="input-field">
                                <label
                                  for="Phone Number"
                                  className="lbl-orange"
                                >
                                  {t("phone_number")}
                                </label>
                                <p className="mb-0 p-0 text-left text-muted fs-16 !text-left">
                                  {phoneNum}
                                </p>
                              </div>
                            </div>
                            <hr />
                            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                              <div className="input-field">
                                <label
                                  for="Phone Number"
                                  className="lbl-orange"
                                >
                                  {t("Address1")}
                                </label>
                                <p className="mb-0 p-0 text-left text-muted fs-16 !text-left">
                                  {addressOne}
                                </p>
                              </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                              <div className="input-field">
                                <label for="Email" className="lbl-orange">
                                  {t("Address2")}
                                </label>
                                <p className="mb-0 p-0 text-left text-muted fs-14 !text-left">
                                  {addressTwo}
                                </p>
                              </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-5 col-xl-6">
                              <div className="input-field">
                                <label
                                  for="Phone Number"
                                  className="lbl-orange"
                                >
                                  {t("city")}
                                </label>
                                <p className="mb-0 p-0 text-left text-muted fs-16 !text-left">
                                  {city}
                                </p>
                              </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-5 col-xl-6">
                              <div className="input-field">
                                <label for="Email" className="lbl-orange">
                                  {t("State")}
                                </label>
                                <p className="mb-0 p-0 text-left text-muted fs-14 !text-left">
                                  {state}
                                </p>
                              </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                              <div className="input-field">
                                <label
                                  for="Phone Number"
                                  className="lbl-orange"
                                >
                                  {t("Country")}
                                </label>
                                <p className="mb-0 p-0 text-left text-muted fs-16 !text-left">
                                  {country}
                                </p>
                              </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                              <div className="input-field">
                                <label for="Email" className="lbl-orange">
                                  {t("Zipcode")}
                                </label>
                                <p className="mb-0 p-0 text-left text-muted fs-14 !text-left">
                                  {zipcode}
                                </p>
                              </div>
                            </div>
                            <hr />
                            <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                              <div className="input-field">
                                <label for="Email" className="lbl-orange">
                                  {t("Complaint")}
                                </label>
                                <p
                                  className="mb-0 p-0 text-left text-muted fs-14 !text-left"
                                  style={{ wordBreak: "break-all" }}
                                >
                                  {complaint}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div class="container">
                            <div class="printer-top"></div>

                            <div class="paper-container">
                              <div class="printer-bottom"></div>

                              <div class="paper">
                                <div class="main-contents">
                                  <div
                                    class={`${
                                      paymentStatus
                                        ? "success-icon "
                                        : "fail-icon"
                                    }`}
                                  >
                                    <i
                                      class={`${
                                        paymentStatus
                                          ? "fa fa-check "
                                          : "fa fa-times"
                                      }`}
                                    ></i>
                                  </div>
                                  <div class="success-title">
                                    {paymentStatus
                                      ? t("payment_successful")
                                      : t("payment_failure")}
                                  </div>
                                  <div class="success-description">
                                    {paymentStatus
                                      ? `Thank you for your payment made on ${transactionDate}, your complaint number is ${complaintNo}`
                                      : `There was some internal issue with the payment on ${transactionDate}`}
                                  </div>
                                  <div class="order-details">
                                    <div class="order-number-label">
                                      {t("transaction_no")}
                                    </div>
                                    <div
                                      class="order-number"
                                      style={{ wordBreak: "break-all" }}
                                    >
                                      {transactionId}
                                    </div>
                                  </div>
                                  {paymentStatus ? (
                                    <div class="order-footer">
                                      {t("thank_you")}
                                    </div>
                                  ) : (
                                    <div class="order-footer">
                                      <Button
                                        variant="contained"
                                        onClick={() => navigate("/")}
                                        type="button"
                                        className="!bg-[#009688] !border-[#009688] text-white w-[50%] p-2 mr-1 !rounded-none"
                                      >
                                        {t("retry")}
                                      </Button>
                                    </div>
                                  )}
                                </div>
                                <div class="jagged-edge"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- <div className="col-xl-12">
                             <div className="info d-flex justify-content-between">
                                <h2>₹5,000.00</h2>
                             </div>
                           </div> --> */}
                    </div>
                    {/* <div className="row">
                          <div className="col-xl-12">
                            <img src="https://support.moqups.com/hc/article_attachments/115010765209/02._Your_Account_-_Logos_.jpg" width="175px" alt=""/>
                          </div>
                        </div> */}
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="detail-info">{/* payment status info */}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="row mt-3 pb-3 pt-0 p-2 border-bottom">
          <div className="col-lg-12">
            <h6 className="text-muted">{t("HLMW")}</h6>
          </div>
          <div
            className="col-xl-3 border-right"
            style={{ borderRight: "1px solid #dee2e6" }}
          >
            <div className="">
              <h3 className="mb-2 lbl-orange">Step 1</h3>
              <h5 className="mb-2">{t("res_pay")}</h5>
              <p className="mb-0 text-muted fs-14">{t("res_pay_desc")}</p>
            </div>
          </div>
          <div
            className="col-xl-6 video-consultation border-right"
            style={{ borderRight: "1px solid #dee2e6" }}
          >
            <h3 className="mb-2 lbl-orange">Step 2</h3>
            <h5 className="mb-0">{t("vid_consult")}</h5>
            <small>{t("vid_consult_desc")}</small>
            <div className="row">
              <div className="col-3 col-md-3 col-xl-3">
                <div className="pt-2 text-center">
                  <div className="flex justify-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2875/2875438.png"
                      width="35px"
                      alt=""
                    />
                  </div>
                  <h6 className="mb-2 mt-2">Google Meet</h6>
                  <p className="mb-0 text-muted fs-14">200+</p>
                </div>
              </div>
              <div className="col-3 col-md-3 col-xl-3">
                <div className="pt-2">
                  <div className="flex justify-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3670/3670246.png"
                      width="35px"
                      alt=""
                    />
                  </div>
                  <h6 className="mb-2 mt-2">Skype</h6>
                  <p className="mb-0 text-muted fs-14">180+</p>
                </div>
              </div>
              <div className="col-3 col-md-3 col-xl-3">
                <div className="pt-2">
                  <div className="flex justify-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4401/4401470.png"
                      width="35px"
                      alt=""
                    />
                  </div>
                  <h6 className="mb-2 mt-2">Zoom</h6>
                  <p className="mb-0 text-muted fs-14">120+</p>
                </div>
              </div>
              <div className="col-3 col-md-3 col-xl-3">
                <div className="pt-2">
                  <div className="flex justify-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3824/3824371.png"
                      width="35px"
                      alt=""
                    />
                  </div>
                  <h6 className="mb-2 mt-2">Others</h6>
                  <p className="mb-0 text-muted fs-14">300+</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="">
              <h3 className="mb-2 lbl-orange">Step 3</h3>
              <h5 className="mb-2">{t("slp")}</h5>
              <p className="mb-0 text-muted fs-14">{t("slp_desc")}</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="pt-0 pb-0">
        <p className="mb-0 text-center fs-14 text-muted py-3">
          Copyright <span className="lbl-orange">©2023</span>, All Rights
          Reserved by <span className="lbl-orange">Legal Moto</span>.
        </p>
      </footer>
    </>
  );
}
