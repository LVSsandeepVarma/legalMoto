import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { Card, Form, Modal } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import CheckoutForm from "./payments/PaymentForm";
import FormHelperText from "@mui/material/FormHelperText";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  green,
  grey,
  indigo,
  lightBlue,
  orange,
  pink,
  red,
  yellow,
} from "@mui/material/colors";
import { ImHammer2 } from "react-icons/im";
import axios from "axios";
import "./payments/payments.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import { Translation } from "react-i18next";

const theme = createTheme({
  palette: {
    primary: lightBlue,
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.5rem", // Increase the legend size here
          color: "linear-gradient(45deg, #ff1744 30%, #FF8E53 90%)",
          fontWeight: "bolder",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          border: "75px",
        },
      },
    },
  },
});

const ComplaintForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  const classes = "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("Malaysia");
  const [complaint, setComplaint] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [phoneCode, setPhonecode] = useState("60");
  const [showLoader, setShowLoader] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    complaint: "",
  });

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  useEffect(() => {
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
  }, []);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      country: "",
      complaint: "",
    };

    if (!name.trim()) {
      newErrors.name = t("name_is_required");
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = t("Email_is_required");
      valid = false;
    } else if (!isValidEmail(email)) {
      newErrors.email = t("Invalid_email_address");
      valid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = t("Phone_is_required");
      valid = false;
    } else if (!isValidPhone(phone)) {
      newErrors.phone = t("Invalid_phone_number");
      valid = false;
    }
    if (!country.trim()) {
      newErrors.country = t("Country_is_required");
      valid = false;
    }

    if (!complaint) {
      newErrors.complaint = t("Complaint_is_required");
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (event) => {
    setShowLoader(true);

    event.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
      try {
        const response = await axios.post(
          "https://admin.thelegalmoto.com/api/client/register",
          {
            firstname: name,
            email: email,
            phone: phone,
            country: country,
            complaint: complaint,
          },
          {
            headers: {
              "x-api-secret": "XrKylwnTF3GpBbmgiCbVxYcCMkNvv8NHYdh9v5am",
            },
          }
        );
        console.log(response.data);
        localStorage.setItem("twToken", response?.data?.token);
        sessionStorage.setItem("twToken", response?.data?.token);
        console.log("Form submitted:", {
          name,
          email,
          phone,
          country,
          complaint,
        });
        sessionStorage.setItem("name", response?.data?.data?.client?.firstname);
        sessionStorage.setItem("email", response?.data?.data?.client?.email);
        sessionStorage.setItem("phone", response?.data?.data?.client?.phone);
        sessionStorage.setItem(
          "country",
          response?.data?.data?.client?.country
        );
        sessionStorage.setItem(
          "complaint",
          response?.data?.data?.complaint?.description
        );
        sessionStorage?.removeItem("plan");
        navigate("/checkout");

        // setIsSubmitted(true)
        setShowLoader(false);
      } catch (err) {
        console.log("error", err);
        const errorObj = err?.response?.data?.errors;
        const erObj = errors;
        for (let errres in errorObj) {
          if (errres === "firstname") {
            erObj.name = errorObj[errres];
          }
          if (errres === "email") {
            erObj.email = errorObj[errres];
          }
          if (errres === "phone") {
            erObj.phone = errorObj[errres];
          }
          if (errres === "country") {
            erObj.country = errorObj[errres];
          }
          if (errres === "complaint") {
            erObj.complaint = errorObj[errres];
          }
        }
        setErrors(erObj);

        setShowLoader(false);
      }
    } else {
      setShowLoader(false);
    }
  };

  const handleEmailchange = async (e) => {
    setEmail(e.target.value);
    if (isValidEmail(e.target.value)) {
      try {
        const response = await axios.get(
          `https://admin.thelegalmoto.com/api/client/check-email?email=${e.target.value}`,
          {
            headers: {
              "x-api-secret": "XrKylwnTF3GpBbmgiCbVxYcCMkNvv8NHYdh9v5am",
            },
          }
        );
        if (response?.data?.status) {
          const errObj = errors;
          if (response?.data?.type === "client") {
            errObj.email = t("Email Already Registered");
            errObj.name = "";
            errObj.phone = "";
            errObj.complaint = "";
            errObj.country = "";
            setName("");
            setEmail("");
            setPhone("");
            setComplaint("");
            setCountry("Malaysia");
            setPhonecode("60");
            setErrors(errObj);
          } else if (response?.data?.type === "lead") {
            setShowLoader(true);
            localStorage.setItem("twToken", response?.data?.token);
            sessionStorage.setItem("twToken", response?.data?.token);
            sessionStorage.setItem(
              "name",
              response?.data?.data?.client?.firstname
            );
            sessionStorage.setItem(
              "email",
              response?.data?.data?.client?.email
            );
            sessionStorage.setItem(
              "phone",
              response?.data?.data?.client?.phone
            );
            sessionStorage.setItem(
              "country",
              response?.data?.data?.client?.country
            );
            sessionStorage.setItem(
              "complaint",
              response?.data?.data?.complaint?.description
            );
            sessionStorage.removeItem("plan");
            navigate("/checkout");
          }
        }
      } catch (err) {
        console.log("err", err);
      }
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation, you can use a library or more complex logic here
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    // Simple phone number validation, you can use a library or more complex logic here
    const phoneRegex = /^\d{8,15}$/;
    return phoneRegex.test(phone);
  };

  const handleCountrychange = (value) => {
    setCountry(value);
    const data = countryData?.find((country) => country?.name === value);
    setPhonecode(data?.phonecode);
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
      {isSubmitted ? (
        <ThemeProvider theme={theme}>
          <div className="bg-[rgba(0,0,0,0.1)] !text-white !h-[100%]  ">
            <h3
              className="text-center h-[7vh] mb-0 flex items-center justify-start pl-4"
              style={{ background: "linear-gradient(45deg, red, transparent)" }}
            >
              {!isSubmitted
                ? `${t("Online_Complaint_To_Advocate")}`
                : `Hello Sandeep,`}
            </h3>
            <CheckoutForm />
          </div>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <div className="bg-[rgba(0,0,0,0.2)] !text-white !h-[100%] ">
            <h3
              className="text-center h-[7vh] mb-0 flex items-center justify-center"
              style={{ background: "linear-gradient(45deg, red, transparent)" }}
            >
              {!isSubmitted
                ? `${t("Online_Complaint_To_Advocate")}`
                : "Hello User!!"}
            </h3>

            <form
              className="bg-[rgba(0,0,0,0.2)] !text-white"
              onSubmit={handleSubmit}
            >
              <div className="row flex justify-center">
                <div className="col-md-10">
                  <TextField
                    style={{
                      backgroundColor: "rgba(255,255,255,1)",
                      color: "#333",
                      // border: "1px solid black",
                      //borderRadius:"10px"
                    }}
                    className="!text-white"
                    // label="Full Name"
                    placeholder="Full Name (Nama Penuh)"
                    variant="outlined"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    fullWidth
                    margin="normal"
                    error={errors.name}
                  />
                  {errors.name && (
                    <div
                      className=" !pl-3  pt-1 pb-1 !rounded-none "
                      style={{
                        background: "rgba(250,0,0,0.4)",
                        fontSmooth: "always",
                      }}
                      role=""
                    >
                      <FormHelperText className="text-white font-bold" error>
                        {errors.name}
                      </FormHelperText>
                    </div>
                  )}
                </div>
                <div className=" col-md-10">
                  <TextField
                    style={{
                      backgroundColor: "rgba(255,255,255,1)",
                      color: "#333",
                      width: "100%",
                      // border: "1px solid black",
                      //borderRadius:"10px"
                    }}
                    // label="Email Id "
                    placeholder="Email Id (ID Emel)"
                    variant="outlined"
                    value={email}
                    onChange={(event) => handleEmailchange(event)}
                    fullWidth
                    margin="normal"
                    error={errors.email}
                  />

                  {errors.email && (
                    <div
                      className=" !pl-3  pt-1 pb-1 !rounded-none"
                      style={{ background: "rgba(250,0,0,0.4)" }}
                      role=""
                    >
                      <FormHelperText className="text-white font-bold" error>
                        {errors.email}
                      </FormHelperText>
                    </div>
                  )}
                </div>
                <div className=" col-md-10">
                  <select
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      color: "rgb(51, 51, 51)",
                      width: "100%",
                      padding: "8px",
                      marginTop: "16px",
                      // border: "1px solid black",
                      //borderRadius:"10px"
                    }}
                    //label="Your Country"
                    placeholder="Your Country (Negara Awak)"
                    variant="outlined"
                    value={country}
                    onChange={(event) =>
                      handleCountrychange(event.target.value)
                    }
                    fullWidth
                    margin="normal"
                    error={!errors.country}
                  >
                    {countryData?.map((val, ind) => {
                      return val?.name == "Malaysia" ? (
                        <option value={val?.name} selected={true}>
                          {val?.name}
                        </option>
                      ) : (
                        <option value={val?.name}>{val?.name}</option>
                      );
                    })}
                  </select>
                  {errors.country && (
                    <div
                      className=" !pl-3  pt-1 pb-1 !rounded-none"
                      style={{ background: "rgba(250,0,0,0.4)" }}
                      role=""
                    >
                      <FormHelperText className="text-white font-bold" error>
                        {errors.country}
                      </FormHelperText>
                    </div>
                  )}
                </div>
                <div className=" col-md-10">
                  <TextField
                    style={{
                      backgroundColor: "rgba(255,255,255,1)",
                      color: "#333",
                      // border: "1px solid black",
                      //borderRadius:"10px"
                    }}
                    //label="Phone Number"
                    placeholder="Phone (Nombor Telefon)"
                    variant="outlined"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    fullWidth
                    margin="normal"
                    error={!!errors.phone}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <span
                            className="font-bold pr-2"
                            style={{ borderRight: "1px solid #dee2e6" }}
                          >
                            {phoneCode}
                          </span>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.phone && (
                    <div
                      className=" !pl-3  pt-1 pb-1 !rounded-none"
                      style={{ background: "rgba(250,0,0,0.4)" }}
                      role=""
                    >
                      <FormHelperText className="text-white font-bold" error>
                        {errors.phone}
                      </FormHelperText>
                    </div>
                  )}
                </div>

                <div className="col-md-10">
                  <TextField
                    type="textarea"
                    style={{
                      backgroundColor: "rgba(255,255,255,1)",
                      color: "red",
                      // border: "1px solid black",
                      //borderRadius:"10px"
                    }}
                    // //label="Complaint Against"
                    placeholder="Complaint Against (Aduan Terhadap)"
                    variant="outlined"
                    value={complaint}
                    onChange={(event) => setComplaint(event.target.value)}
                    fullWidth
                    multiline
                    margin="normal"
                    error={!!errors.complaint}
                  />
                  {errors.complaint && (
                    <div
                      className=" !pl-3  pt-1 pb-1 !rounded-none"
                      style={{ background: "rgba(250,0,0,0.4)" }}
                      role=""
                    >
                      <FormHelperText className="text-white font-bold" error>
                        {errors.complaint}
                      </FormHelperText>
                    </div>
                  )}
                </div>
                <div className="col-md-5 flex items-center justify-center pb-10 mt-3">
                  <Button
                    className="btn btn-white btn-animated "
                    type="submit"
                    variant="contained"
                    size="4vw"
                    style={{
                      margin: theme.spacing(1),
                      fontWeight: "bold",
                      background:
                        "linear-gradient(45deg, #ff1744 30%, #FF8E53 90%) !important",
                      color: "white",
                      width: "60%",
                      height: "6vh",
                      fontSize: "larger",
                    }}
                  >
                    <ImHammer2 className="mr-2" />
                    {t("submit")}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </ThemeProvider>
      )}
    </>
  );
};

export default ComplaintForm;
