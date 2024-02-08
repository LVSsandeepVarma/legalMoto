import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Alert,
  ModalTitle,
  ModalBody,
  ModalFooter,
  Modal,
} from "react-bootstrap";
import { MdLocationPin, MdPayment, MdWork } from "react-icons/md";
import { BiLogoZoom } from "react-icons/bi";
import CheckoutForm from "./PaymentForm";
import PaymentCheckoutForm from "./checkoutForm";
import { SiGooglemeet } from "react-icons/si";
import { RiLiveLine } from "react-icons/ri";
import ScrollingImages from "./ScrollingImages";
import VerticalCarousel from "./ScrollingImages";
import Marquee from "react-fast-marquee";
import { FaCreditCard, FaCalendarAlt, FaLock, FaClock } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "../../languageDetector";
import { useTranslation } from "react-i18next";

export default function Checkout() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("DebitCard");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCVV] = useState("");
  const [name, setName] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [expiryError, setExpiryError] = useState("");
  const [cvvError, setCVVError] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [zipErr, setZipErr] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [complaint, setComplaint] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressOneError, setAddressOneError] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [addressTwoError, setAddressTwoError] = useState("");
  const [addOneErr, setAddOneErr] = useState("");
  const [addTwoErr, setAddTwoErr] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cityErr, setCityErr] = useState("");
  const [stateErr, setStateErr] = useState("");
  const [amount, setAmount] = useState("32.28");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState("");
  const [showErrModal, setShowErrModal] = useState(false);
  const [token, setToken] = useState("");
  const [clientCurrentCountry, setClientCurrentCountry] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [rmAmount, setRmAmount] = useState("150");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    function successCallback(position) {
      console.log(position);
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
          );
          const data = await response.json();
          const client_country = extractCountry(data);
          setClientCurrentCountry(client_country);
        } catch (error) {
          console.error("Error fetching country:", error);
        }
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
    console.log(localStorage.getItem("twToken"));
    const lsToken = localStorage.getItem("twToken");
    const ssToken = sessionStorage.getItem("TwToken");
    if (lsToken == undefined || lsToken == null || lsToken?.length <= 10) {
      setToken(ssToken);
    } else {
      setToken(lsToken);
    }

    const fetchGeolocation = async () => {
      const response = await fetch("http://ip-api.com/json");
      const data = await response.json();
      console.log(data, "data");

      if (data && data.country) {
        const countryName = data.country;
        setClientCurrentCountry(countryName);
        console.log(countryName, ""); // Display or use the country name as needed
      }
    };

    // fetchGeolocation();
    setCurrentDate(
      new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    );

    if (performance.navigation.type === 2) {
      window.location.href = `/`;
    }
    const clientName = sessionStorage.getItem("name");
    const clientEamil = sessionStorage.getItem("email");
    const clientPhone = sessionStorage.getItem("phone");
    const clientCountry = sessionStorage.getItem("country");
    const clientComplaint = sessionStorage.getItem("complaint");
    const plan = sessionStorage?.getItem("plan");
    if (plan === "Basic") {
      setAmount("43.03");
      setRmAmount("200");
    } else if (plan === "Corporate") {
      setAmount("75.31");
      setRmAmount("350");
    } else if (plan === "Premium") {
      setAmount("118.34");
      setRmAmount("550");
    }
    setName(clientName);
    setEmail(clientEamil);
    setPhoneNum(clientPhone);
    setComplaint(clientComplaint);
    setCountry(clientCountry);
  }, []);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const renderComponent = () => {
    if (selectedOption === "DebitCard") {
      return (
        <div className="bg-[rgba(250,250,250,0.4)]">
          <PaymentCheckoutForm />
        </div>
      );
    } else if (selectedOption === "CreditCard") {
      return <div>Component 2</div>;
    }
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://admin.thelegalmoto.com/api/client/make/payment",
          {
            card_number: cardNumber,
            cvc: cvv,
            name_on_card: nameOnCard,
            amount: amount,
            currency: "usd",
            city: city,
            state: state,
            address_1: addressOne,
            address_2: addressTwo,
            exp_month_year: expiry,
            zipcode: zipcode,
          },
          {
            headers: {
              "access-token": token,
              "x-api-secret": "XrKylwnTF3GpBbmgiCbVxYcCMkNvv8NHYdh9v5am",
            },
          }
        );
        console.log(response?.data);
        // setSuccessMessage("Form submitted successfully!");
        if (response?.data?.status) {
          setShowLoader(true);
          sessionStorage.removeItem("name");
          sessionStorage.removeItem("email");
          sessionStorage.removeItem("phone");
          sessionStorage.removeItem("country");
          sessionStorage.removeItem("complaint");
          sessionStorage.setItem("twToken", token);
          window.location.replace(response?.data?.data?.redirect_url);
        } else {
          setShowErrModal(true);
          setError(response?.data?.message);
          setLoading(false);
        }
        // console.log(name, email, cardNumber, expiry, cvv, zipcode)
      } catch (err) {
        console.log(err, "err");
        setShowErrModal(true);
        setError(err?.response?.data?.message);
        setLoading(false);
      }
      // Perform additional actions like sending form data to the server
    } else {
      setLoading(false);
    }
  };
  const validateForm = () => {
    let isValid = true;
    if (email?.length > 0) {
      if (!validateEmail(email)) {
        setEmailError(t("req_email_err"));
        isValid = false;
      } else {
        setEmailError("");
      }
    } else {
      setEmailError(t("Email_is_required"));
      isValid = false;
    }

    if (cardNumber?.length > 0) {
      if (!validateCardNumber(cardNumber)) {
        setCardNumberError(t(""));
        isValid = false;
      } else {
        setCardNumberError("card_no_req");
      }
    } else {
      setCardNumberError(t("req_card_no_req"));
      isValid = false;
    }
    if (expiry?.length > 0) {
      if (!validateExpiry(expiry)) {
        setExpiryError(t("expiry_err"));
        isValid = false;
      } else {
        setExpiryError("");
      }
    } else {
      setExpiryError(t("req_expiry_err"));
      isValid = false;
    }

    if (cvv?.length > 0) {
      if (!validateCVV(cvv)) {
        setCVVError("Please enter a valid CVV.");
        isValid = false;
      } else {
        setCVVError("");
      }
    } else {
      setCVVError(t("cvv_err"));
      isValid = false;
    }
    if (nameOnCard?.length == "") {
      setNameErr(t("req_name_err"));
      isValid = false;
    } else {
      setNameErr("");
    }
    if (addressOne?.length == "") {
      setAddOneErr(t("add1_err"));
      isValid = false;
    } else {
      setAddOneErr("");
    }
    if (city?.length == "") {
      setCityErr(t("city_err"));
      isValid = false;
    } else {
      setCityErr("");
    }
    if (state?.length == "") {
      setStateErr(t("state_err"));
      isValid = false;
    } else {
      setStateErr("");
    }
    if (zipcode?.length == "") {
      setZipErr(t("zip_err"));
      isValid = false;
    } else {
      if (zipcode?.length < 4 || zipcode?.length >= 15) {
        setZipErr(t("invalid_zip"));
        isValid = false;
      } else {
        setZipErr("");
      }
    }

    return isValid;
  };

  const handleAddressOneChange = (e) => {
    const addOne = e.target.value;
    setAddressOne(addOne);
    if (addOne?.length == 0) {
      setAddOneErr(t("add1_err"));
    } else {
      setAddOneErr("");
    }
  };

  const handleAddressTwoChange = (e) => {
    const addtwo = e.target.value;
    setAddressTwo(addtwo);
    if (addtwo?.length == 0) {
      setAddTwoErr(t("add2_err"));
    } else {
      setAddTwoErr("");
    }
  };

  const handleCityChange = (e) => {
    const addCity = e.target.value;
    setCity(addCity);
    if (addCity?.length == 0) {
      setCityErr(t("city_err"));
    } else {
      setCityErr("");
    }
  };

  const handleStateChange = (e) => {
    const addState = e.target.value;
    setState(addState);
    if (addState?.length == 0) {
      setStateErr(t("state_err"));
    } else {
      setStateErr("");
    }
  };

  const handleZipChange = (e) => {
    const addZip = e.target.value;
    setZipcode(addZip);
    if (addZip?.length == 0) {
      setZipErr(t("zip_err"));
    } else {
      if (zipcode?.length < 4 || zipcode?.length >= 15) {
        setZipErr(t("invalid_zip"));
      } else {
        setZipErr("");
      }
    }
  };

  const handleCvvChange = (e) => {
    const addCvv = e.target.value;
    setCVV(addCvv);
    if (addCvv?.length < 3) {
      setCVVError(t("cvv_err"));
    } else if (addCvv?.length > 3) {
      setCVVError(t("invalid_cvv"));
    } else {
      setCVVError("");
    }
  };

  const handleNameChage = (e) => {
    const addName = e.target.value;
    setNameOnCard(addName);
    if (addName?.length == 0) {
      setNameErr(t("req_name_err"));
    } else {
      setNameErr("");
    }
  };

  const validateEmail = (value) => {
    // Implement your email validation logic here
    // Return true if the email is valid, otherwise false
    // You can use a regular expression or any other validation method
    return value !== "" && /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(value);
  };

  const formatCardNumber = (value) => {
    // Remove any non-digit characters from the input value
    const cardNumberDigits = value.replace(/\D/g, "");
    // Split the card number into groups of 4 digits
    const cardNumberGroups = cardNumberDigits.match(/.{1,4}/g);
    // Join the groups with a space between them
    return cardNumberGroups ? cardNumberGroups.join(" ") : cardNumberDigits;
  };

  const formatExpiry = (value) => {
    // Remove any non-digit characters from the input value
    const expiryDigits = value.replace(/\D/g, "");
    // Split the expiry value into month and year
    const month = expiryDigits.slice(0, 2);
    const year = expiryDigits.slice(2, 4);
    // Format the expiry value as MM/YY
    return `${month}/${year}`;
  };

  const validateName = (value) => {
    return value?.length != "";
  };
  const validateCardNumber = (value) => {
    // Implement your card number validation logic here
    // For example, you can use a library like 'card-validator'
    // Return true if the card number is valid, otherwise false
    return value?.length >= 18 && value?.length <= 19;
  };

  const validateExpiry = (value) => {
    // Implement your expiry date validation logic here
    // For example, you can check if the expiry date is in the future and in the valid format
    // Return true if the expiry date is valid, otherwise false
    return value.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/);
  };

  const handleCardChange = (value) => {
    handleCardNumberChange(value);
    validateCardNumber(value);
  };

  const validateCVV = (value) => {
    // Implement your CVV validation logic here
    // For example, you can check if the CVV is a 3 or 4 digit number
    // Return true if the CVV is valid, otherwise false
    return value?.length === 3 || value?.length === 4;
  };
  const validateZipcode = (value) => {
    return value?.length >= 3;
  };

  const handleCardNumberChange = (event) => {
    const formattedValue = formatCardNumber(event.target.value);
    if (validateCardNumber(formattedValue)) {
      setCardNumberError("");
    } else {
      setCardNumberError(t("req_card_no_req"));
    }
    setCardNumber(formattedValue);
  };

  const handleExpiryChange = (event) => {
    const formattedValue = formatExpiry(event.target.value);
    if (validateExpiry(formattedValue)) {
      setExpiryError("");
    } else {
      setExpiryError(t("req_expiry_err"));
    }
    setExpiry(formattedValue);
  };

  return (
    <>
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
      {showErrModal && (
        <Modal centered className="" show={showErrModal}>
          <Modal.Title className="bg-white text-center pt-2 !text-red-600">
            {t("alert")} <hr className="mt-0 mb-0" />
          </Modal.Title>
          <Modal.Body className="bg-white">
            <p className="font-bold text-gray-500 text-sm text-center">
              {t("alert_err")}
            </p>
            <p className="font-bold text-gray-500 text-sm text-center pl-3 pr-3">
              {error}
            </p>
            <div className="flex justify-center !w-full">
              <Button
                className="!bg-[#009688] !rounded-none !border-[#009688] w-fit p-2 mr-1"
                onClick={() => {
                  window.location.reload();
                }}
              >
                {t("retry")}
              </Button>
              <Button
                className="!bg-black !rounded-none !border-black w-fit p-2 ml-1"
                onClick={() => {
                  setShowErrModal(false);
                }}
              >
                {t("cancel")}
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      )}
      <div className="container bg-muted checkout">
        <div className="row">
          <div className="col-sm-12 pt-2 shadow-sm">
            <div className="d-flex align-items-center justify-content-between">
              <img
                src="/images/brandlogo.png"
                onClick={() => navigate("/")}
                width="100px"
              />

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
        <hr />
        <div className="row mt-3">
          <div className="col-lg-9 mx-auto">
            <h4 className="text-muted text-center">
              {t("complete_your_payment")}
            </h4>
            <p className="text-muted fs-14 text-center">
              {t("complete_your_payment_desc")}
            </p>
            <div className="checkout-card mx-auto">
              <div className="row">
                <div className="col-xl-6 border-right">
                  <div className="title">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="row">
                          <div className="col-md-6">
                            <img
                              src="https://gtechwebservice.com/legalmoto/assets/img/GIF-Logo.gif"
                              width="100px"
                            />
                          </div>
                          <div className="col-md-6">
                            <p className="!text-right p-0 text-muted !text-sm">
                              {currentDate}
                            </p>
                          </div>
                        </div>
                        <hr />
                      </div>
                      <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="input-field">
                          <label for="Full Name" className="lbl-orange">
                            {t("full_name")}
                          </label>
                          <p className="mb-0 p-0 text-left text-muted fs-16 !text-left">
                            {name}
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="input-field">
                          <label for="Phone Number" className="lbl-orange">
                            {t("phone_number")}
                          </label>
                          <p className="mb-0 p-0 text-left text-muted fs-16 !text-left">
                            {phoneNum}
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="input-field">
                          <label for="Email" className="lbl-orange">
                            {t("Complaint")}
                          </label>
                          <p className="mb-0 p-0 text-left text-muted fs-14 !text-left">
                            {complaint}
                          </p>
                        </div>
                      </div>
                      {/* <!-- <div className="col-xl-12">
                             <div className="info d-flex justify-content-between">
                                <h2>₹5,000.00</h2>
                             </div>
                           </div> --> */}
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <img
                          src="https://support.moqups.com/hc/article_attachments/115010765209/02._Your_Account_-_Logos_.jpg"
                          width="175px"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="detail-info">
                    <div className="info d-flex justify-content-between">
                      <h3>{t("Total_Billed")}</h3>
                      <h3>RM {rmAmount}.00</h3>
                      {/* <!-- <small>Enter your credit card detail to complete subscription</small> --> */}
                    </div>
                    <div
                      className="form-control d-flex mb-2"
                      style={{ width: "fitContent" }}
                    >
                      <input type="radio" defaultChecked name="" value="" />
                      <label className="mb-0 ml-2" for="">
                        <i className="fa-solid fa-credit-card text-primary"></i>{" "}
                        Pay With Card
                      </label>
                    </div>
                    {successMessage && (
                      <Alert className="!rounded-none" variant="success">
                        {successMessage}
                      </Alert>
                    )}
                    {errorMessage && (
                      <Alert className="!rounded-none" variant="danger">
                        {errorMessage}
                      </Alert>
                    )}
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="email">
                        <Form.Label className="font-bold !text-sm m-0">
                          {t("email")}
                        </Form.Label>
                        <Form.Control
                          type="email"
                          className="p-1 !text-sm !rounded-none "
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          // // required
                          readOnly
                        />
                        {emailError ? (
                          <p className="text-red-600 font-bold !text-sm mt-0">
                            {emailError}
                          </p>
                        ) : (
                          ""
                        )}
                      </Form.Group>
                      <Form.Group controlId="addressOne">
                        <Form.Label className="font-bold !text-sm m-0">
                          {t("Address1")}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="p-1 !text-sm !rounded-none !bg-[#f3f3f3] "
                          placeholder="Enter your address"
                          value={addressOne}
                          onChange={handleAddressOneChange}
                          // // required
                        />
                        {addOneErr ? (
                          <p className="text-red-600 font-bold !text-sm !m-0 !p-0 !text-left">
                            {addOneErr}
                          </p>
                        ) : (
                          ""
                        )}
                      </Form.Group>
                      <Form.Group controlId="addressTwo">
                        <Form.Label className="font-bold !text-sm m-0">
                          {t("Address2")}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="p-1 !text-sm !rounded-none !bg-[#f3f3f3]"
                          placeholder="Enter your address"
                          value={addressTwo}
                          onChange={handleAddressTwoChange}
                        />
                      </Form.Group>
                      <div className="row">
                        <Form.Group className="col-md-6" controlId="city">
                          <Form.Label className="font-bold !text-sm m-0">
                            {t("city")}{" "}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            className="p-1 !text-sm !rounded-none !bg-[#f3f3f3]"
                            placeholder="Enter your address"
                            value={city}
                            onChange={handleCityChange}
                            // // required
                          />
                          {cityErr ? (
                            <p className="text-red-600 font-bold !text-sm !m-0 !p-0 !text-left">
                              {cityErr}
                            </p>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group className="col-md-6" controlId="state">
                          <Form.Label className="font-bold !text-sm m-0">
                            {t("State")}{" "}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            className="p-1 !text-sm !rounded-none !bg-[#f3f3f3]"
                            placeholder="Enter your address"
                            value={state}
                            onChange={handleStateChange}
                            // // required
                          />
                          {stateErr ? (
                            <p className="text-red-600 font-bold !text-sm !m-0 !p-0 !text-left">
                              {stateErr}
                            </p>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                      </div>
                      <div className="row">
                        <Form.Group controlId="ipcode" className="col-md-6">
                          <Form.Label className="font-bold !text-sm mt-3 m-0">
                            {t("Zipcode")}
                          </Form.Label>
                          <div className="relative">
                            <Form.Control
                              className="p-1 !text-sm !rounded-none !bg-[#f3f3f3]"
                              type="number"
                              //   placeholder="Enter account holder name"
                              value={zipcode}
                              onChange={handleZipChange}
                              isInvalid={zipcode && !validateZipcode(zipcode)}
                            />
                            <div className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-400">
                              <MdLocationPin size={20} />
                            </div>
                          </div>
                          {zipErr ? (
                            <p className="text-red-600 font-bold !text-sm !text-left !m-0 !p-0">
                              {zipErr}
                            </p>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group controlId="country" className="col-md-6">
                          <Form.Label className="font-bold !text-sm mt-3 m-0">
                            {t("Country")}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            className="p-1 !text-sm !rounded-none !bg-[#fff8e5] "
                            placeholder="Enter country"
                            value={country}
                            readOnly
                            // onChange={(e) => setEmail(e.target.value)}
                            // // required
                          />
                          {/* {emailError ? (
                <p className="text-red-600 font-bold !text-sm mt-0">{emailError}</p>
              ) : (
                ""
              )} */}
                        </Form.Group>
                      </div>
                      <hr className="" />
                      <Form.Group controlId="cardNumber">
                        <Form.Label className="font-bold !text-sm mt-3 m-0">
                          {t("Card_Number")}
                        </Form.Label>
                        <div className="relative">
                          <Form.Control
                            maxLength={19}
                            type="text"
                            className="p-1 !text-sm !rounded-none !bg-[#f3f3f3]"
                            placeholder="Enter card number"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            // required
                            isInvalid={
                              cardNumber && !validateCardNumber(cardNumber)
                            }
                          />
                          <div className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-400">
                            <FaCreditCard size={15} />
                          </div>
                        </div>
                        {cardNumberError ? (
                          <p className="text-red-600 font-bold !text-sm !m-0 !p-0 !text-left">
                            {cardNumberError}
                          </p>
                        ) : (
                          ""
                        )}
                      </Form.Group>
                      <div className="row">
                        <Form.Group controlId="expiry" className="col-md-6 ">
                          <Form.Label className="font-bold !text-sm mt-3 m-0">
                            {t("Expiry_date")}
                          </Form.Label>
                          <div className="relative">
                            <Form.Control
                              type="text"
                              className="p-1 !text-sm !rounded-none !bg-[#f3f3f3]"
                              placeholder="MM/YY"
                              value={expiry}
                              onChange={handleExpiryChange}
                              // required
                              maxLength={5}
                              isInvalid={expiry && !validateExpiry(expiry)}
                            />
                            <div className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-400">
                              <FaCalendarAlt size={15} />
                            </div>
                          </div>
                          {expiryError ? (
                            <p className="text-red-600 font-bold !text-left !text-sm !m-0 !p-0">
                              {expiryError}
                            </p>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group controlId="cvv" className="col-md-6">
                          <Form.Label className="font-bold !text-sm mt-3 m-0">
                            {t("cvv")}
                          </Form.Label>
                          <div className="relative">
                            <Form.Control
                              type="password"
                              className="p-1 !text-sm !rounded-none !bg-[#f3f3f3]"
                              placeholder="Enter CVV"
                              value={cvv}
                              onChange={handleCvvChange}
                              // required
                              maxLength={3}
                              isInvalid={cvv && !validateCVV(cvv)}
                            />
                            <div className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-400">
                              <FaLock size={15} />
                            </div>
                          </div>
                          {cvvError ? (
                            <p className="text-red-600 font-bold !text-sm !text-left !m-0 !p-0">
                              {cvvError}
                            </p>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group controlId="name" className="col-md-8">
                          <Form.Label className="font-bold !text-sm mt-3 m-0">
                            {t("Name_On_Card")}
                          </Form.Label>
                          <div className="relative">
                            <Form.Control
                              className="p-1 !text-sm !rounded-none !bg-[#f3f3f3]"
                              type="text"
                              //   placeholder="Enter account holder name"
                              value={nameOnCard}
                              onChange={handleNameChage}
                              isInvalid={nameOnCard && !validateName(name)}
                            />
                            <div className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-400">
                              <MdOutlineAccountCircle size={20} />
                            </div>
                          </div>
                          {nameErr ? (
                            <p className="text-red-600 font-bold !text-sm !text-left !m-0 !p-0">
                              {nameErr}
                            </p>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                      </div>
                      <div className="!flex !justify-start items-center">
                        <img src="/images/stripe.png" width={45}></img>
                        <p className="w-fit text-sm">{t("payment_secure")} </p>
                        <FaLock size={10} className="ml-1" />
                      </div>
                      <button
                        className="btn !bg-[#009688] text-white pay-button !rounded-none"
                        disabled={loading ? true : false}
                      >
                        {!loading ? (
                          "Pay RM 150.00"
                        ) : (
                          <span
                            class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        )}
                        {loading && "Loading..."}
                      </button>
                    </Form>
                  </div>
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
          Copyright <span className="lbl-orange">©{new Date().getFullYear()}</span>, All Rights
          Reserved by <span className="lbl-orange">Legal Moto</span>.
        </p>
      </footer>
    </>
  );
}
