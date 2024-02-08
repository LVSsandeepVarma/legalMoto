import React, { useState, useEffect } from "react";
import NavBar from "../Header/header";
import { PiMapPinFill } from "react-icons/pi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import {
  Button,
  FormHelperText,
  InputAdornment,
  TextField,
} from "@mui/material";
import { BiPaperPlane } from "react-icons/bi";
import Footer from "../footer/footer";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FindYourCaseDetails from "../findYourCaseDetails";
import ContactDetails from "../contactDetails";
import { useTranslation } from "react-i18next";
export default function Contactus() {
  const { t } = useTranslation();
  const [showLoader, setShowLoader] = useState(true);
  // const[name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [country, setCountry] = useState("India");
  // const [message, setMessage] = useState("")
  const [countryData, setCountryData] = useState([]);
  const [phoneCode, setPhonecode] = useState("91");
  const [successMessage, setSuccessMessage] = useState("");
  const [failedMessage, setFailedMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    name: "",
    phone: "",
    country: "India",
    message: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string().required(t("name_is_required")),
    phone: Yup.number().required(t("Phone_is_required")).min(8),
    email: Yup.string()
      .email(t("Invalid_email_address"))
      .required(t("Email_is_required")),
    country: Yup.string().required(t("Country_is_required")),
    message: Yup.string().required(t("Message_is_required")),
  });

  useEffect(() => {
    setShowLoader(true);
    const getCountryCodes = async () => {
      try {
        const response = await axios.get(
          "https://admin.thelegalmoto.com/api/client/countries?x-api-secret=XrKylwnTF3GpBbmgiCbVxYcCMkNvv8NHYdh9v5am"
        );
        const data = [response?.data?.data];
        data?.map((val, ind) => {
          console.log(val);
        });
        setCountryData([...response?.data?.data]);
      } catch (err) {
        console.log(err, "error");
      }
    };
    getCountryCodes();
    setShowLoader(false);
  }, []);

  // const validateForm = () => {
  //   let valid = true;
  //   const newErrors = {
  //     name: '',
  //     email: '',
  //     phone: '',
  //     country: '',
  //     message: '',
  //   };

  //   if (!name.trim()) {
  //     newErrors.name = 'Name is required';
  //     valid = false;
  //   }

  //   if (!email.trim()) {
  //     newErrors.email = 'Email is required';
  //     valid = false;
  //   } else if (!isValidEmail(email)) {
  //     newErrors.email = 'Invalid email address';
  //     valid = false;
  //   }

  //   if (!phone.trim()) {
  //     newErrors.phone = 'Phone is required';
  //     valid = false;
  //   } else if (!isValidPhone(phone)) {
  //     newErrors.phone = 'Invalid phone number';
  //     valid = false;
  //   }
  //   if(!country.trim()){
  //     newErrors.country = 'Country is required'
  //     valid=false;
  //   }

  //   if (!message) {
  //     newErrors.message = 'Complaint is required';
  //     valid = false;
  //   }

  //   setErrors(newErrors);
  //   return valid;
  // };

  const handleSubmit = async (values) => {
    setSuccessMessage("");
    setFailedMessage("");
    setShowLoader(true);
    console.log(values);
    try {
      const response = await axios.post(
        "https://admin.thelegalmoto.com/api/client/contact-us",
        {
          name: values?.name,
          email: values?.email,
          phone: values?.phone,
          country: values?.country,
          message: values?.message,
        },
        {
          headers: {
            "x-api-secret": "XrKylwnTF3GpBbmgiCbVxYcCMkNvv8NHYdh9v5am",
          },
        }
      );
      if (response?.data?.status) {
        setSuccessMessage("Your Enquiry has been forwarded to our team.");
        setShowLoader(false);
      } else {
        setFailedMessage("submission failed");
        setShowLoader(false);
      }

      // setIsSubmitted(true)
      setShowLoader(false);
    } catch (err) {
      setSuccessMessage("");
      console.log("error", err);
      setShowLoader(false);
    }
  };

  // const handleSubmit = async(event) => {
  //   setShowLoader(true);
  //   setSuccessMessage("")
  //   setFailedMessage("")

  //   event.preventDefault();
  //   if (validateForm()) {
  //     // Handle form submission logic here

  //     try{
  //       const response= await axios.post("https://admin.thelegalmoto.com/api/client/contact-us", {name: name, email:email,phone:phone,country:country,message:message},{
  //       headers:{
  //         "x-api-secret":"XrKylwnTF3GpBbmgiCbVxYcCMkNvv8NHYdh9v5am"
  //       }

  //     })
  //     if(response?.data?.status){
  //       setSuccessMessage("submitted successfully")
  //     }else{
  //       setFailedMessage("submission failed")
  //     }

  //     // setIsSubmitted(true)
  //     setShowLoader(false)
  //   }catch(err){
  //     setSuccessMessage("")
  //     console.log("error", err)
  //     const errorObj = err?.response?.data?.errors;
  //     const erObj = errors
  //     for(let errres in errorObj){
  //       if(errres === "firstname"){
  //         erObj.name = errorObj[errres]
  //       }
  //       if(errres === "email"){
  //         erObj.email = errorObj[errres]
  //       }
  //       if(errres === "phone"){
  //         erObj.phone = errorObj[errres]
  //       }
  //       if(errres === "country"){
  //         erObj.country = errorObj[errres]
  //       }
  //       if(errres === "message"){
  //         erObj.message = errorObj[errres]
  //       }
  //     }
  //     setErrors(erObj)

  //     setShowLoader(false)
  //   }
  //   }else{
  //     setShowLoader(false)
  //   }
  // };

  // const isValidEmail = (email) => {
  //   // Simple email validation, you can use a library or more complex logic here
  //   const emailRegex = /^\S+@\S+\.\S+$/;
  //   return emailRegex.test(email);
  // };

  // const isValidPhone = (phone) => {
  //   // Simple phone number validation, you can use a library or more complex logic here
  //   const phoneRegex = /^\d{10}$/;
  //   return phoneRegex.test(phone);
  // };

  // const handleCountrychange = (value) =>{
  //   setCountry(value);
  //   const data = countryData?.find((country) => country?.name === value)
  //   setPhonecode(data?.phonecode)
  // }

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
      <div className="aboutComponent w-full relative">
        <NavBar />

        <div className="container h-[50vh] flex justify-center items-center ">
          <h1 className="text-white text-6xl ">{t("Contact_Us")}</h1>
        </div>
      </div>
      <div className="container relative">
        <div className="row !flex !justify-center w-full text-center section-title ">
          <h3 className="font-bold mt-5">{t("GET_FREE_QUOTE")}</h3>
          <p className="container !max-w-[800px] text-center text-lg">
            {t("Contact_Us_desc")}
          </p>
          <div className="">
            <div id="contact" className="parallax-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="contact-now">
                      <div className="contact">
                        {" "}
                        <span>
                          <i className="fa fa-home"></i>
                        </span>
                        <div className="information">
                          {" "}
                          <strong>Address:</strong>
                          <p>
                            No 3FC, 401, East of NGEF BDA L/O, Vijinapura RM
                            Nagar, Bengaluru (Bangalore) Urban, Karnataka,
                            560016
                          </p>
                        </div>
                      </div>
                      <div className="contact">
                        {" "}
                        <span>
                          <i className="fa fa-envelope"></i>
                        </span>
                        <div className="information">
                          {" "}
                          <strong>Email Address:</strong>
                          <p>
                            <a href="mailto: info@thelegalmoto.com">
                              info@thelegalmoto.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="contact">
                        {" "}
                        <span>
                          <i className="fa fa-phone"></i>
                        </span>
                        <div className="information">
                          {" "}
                          <strong>Phone No:</strong>
                          <p>
                            <a href="tel:+917094000011">+91 7094000011</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 flex items-center w-full">
                    {successMessage.length || failedMessage.length ? (
                      <div className="w-full">
                        {successMessage.length > 0 && (
                          <Alert variant="success">{successMessage}</Alert>
                        )}
                        {failedMessage.length > 0 && (
                          <Alert variant="danger">{failedMessage}</Alert>
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                    {successMessage.length || failedMessage.length ? (
                      ""
                    ) : (
                      <div className="contact-form ">
                        <Formik
                          initialValues={{
                            name: "",
                            phone: "",
                            email: "",
                            country: "India",
                            message: "",
                          }}
                          validationSchema={validationSchema}
                          onSubmit={handleSubmit}
                        >
                          <Form className="">
                            <div className="row">
                              <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
                                <Field
                                  type="text"
                                  id="name"
                                  name="name"
                                  placeholder="Full Name"
                                  className="p-2.5 w-full !bg-white"
                                />
                                <ErrorMessage
                                  name="name"
                                  component="div"
                                  className="error text-red-600"
                                />
                              </div>

                              <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
                                <Field
                                  type="email"
                                  name="email"
                                  placeholder="Email Id"
                                  className="p-2.5 w-full"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className="error text-red-600"
                                />
                              </div>

                              <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
                                <Field
                                  type="number"
                                  id="phone"
                                  placeholder="Phone Number"
                                  name="phone"
                                  className="p-2.5 w-full"
                                />
                                <ErrorMessage
                                  name="phone"
                                  component="div"
                                  className="error text-red-600"
                                />
                              </div>

                              <div className="col-lg-6 col-md-12 col-sm-12 items-center flex mt-3">
                                <Field
                                  as="select"
                                  id="country"
                                  name="country"
                                  placeholder="Your Country"
                                  className="p-2 w-full"
                                >
                                  {countryData?.map((val, ind) => {
                                    return val?.name == "India" ? (
                                      <option value={val?.name} selected={true}>
                                        {val?.name}
                                      </option>
                                    ) : (
                                      <option value={val?.name}>
                                        {val?.name}
                                      </option>
                                    );
                                  })}
                                </Field>
                                <ErrorMessage
                                  name="country"
                                  component="div"
                                  className="error text-red-600"
                                />{" "}
                              </div>
                            </div>

                            <div className="row ">
                              <div className="col-lg-12 col-md-12 col-sm-12 mt-3 h-[100%]">
                                <Field
                                  as="textarea"
                                  id="message"
                                  placeholder="Message"
                                  name="message"
                                  className="p-2 w-full h-[20vh]"
                                />
                                <ErrorMessage
                                  name="message"
                                  component="div"
                                  className="error text-red-600"
                                />{" "}
                              </div>

                              <div className="col-md-12">
                                {/* <input type="hidden" name="recaptcha_response" id="recaptchaResponse" value="03AAYGu2RW9vxM3P4a_dcaP04AOLcOagW30Z2YKkX3t4iRtib0A65RQP1nAYb-e7x5kM3MuuBGuGjC-V8ajm4KOV8N7hT4I7HZMh9pbgI-k6yUCt_VcRm8Pzys3l05B5p1dbQzJKKe0y7nj10PqEqJV4xcqpCYeZ9q9hMdiJQWWPTB6FCgjhaQl5-NgkFEBIY78xxEA4Rl5ygoEf4UsD7wRu9b0MBNiRDgtn4RZKO4p3u1RzuIMWw9AOpUoflw5ogrV7DUrVTa8olYG-AHuegEhKHP_iFl59k4rl9aWNGiK7Jw3IMHfhJVV3XMYASm3ZwniOp61mWD8dXGyudOAvN_ZTs4BaGVxGDWuOQvw8iJZuQ_242w0f3ZhuRQMqL96EDh6SYDDIyYeGsJlDy5vgycSoveLSp6dUeOgFlvbBxjvQAUeXQNIg21-DMhH3Jv-PHD7fX5XMqcaYcEDU53l5BV1L-OpiBGzRMF3nrr-F3-guFq9gC_1S49p_dtD29s8cvCibw4u04OSNkOz6SMfPGXZSz0NTTnNZtdUe5BTgoWQynO_n8gRx1mfBA" /> */}
                                <button
                                  id="submit"
                                  type="submit"
                                  className="form-control"
                                >
                                  Send Message
                                </button>
                                <div
                                  style={{ margin: "15px auto 0px auto" }}
                                ></div>
                              </div>
                            </div>
                          </Form>
                        </Formik>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d995.9577415656784!2d101.70817027560383!3d3.1393003383860325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMDgnMjEuNSJOIDEwMcKwNDInMzMuOCJF!5e0!3m2!1sen!2sin!4v1688542498527!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}
          </div>
        </div>
      </div>
      <FindYourCaseDetails />
      <ContactDetails />
      <Footer />
    </>
  );
}
