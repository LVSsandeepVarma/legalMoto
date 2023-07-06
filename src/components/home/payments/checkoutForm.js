import { Button } from "@mui/material";
import React, { useState } from "react";
import { Form, Container, Row, Col, Alert } from "react-bootstrap";
import { FaCreditCard, FaCalendarAlt, FaLock } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import "tailwindcss/tailwind.css";
import "./checkoutpay.css";

const PaymentCheckoutForm = () => {
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCVV] = useState("");
  const [name, setName] = useState("");
  const [nameOnCard, setNameOnCard] = useState();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [expiryError, setExpiryError] = useState("");
  const [cvvError, setCVVError] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const handleSubmit = (event) => {
    setShowLoader(true);
    event.preventDefault();
    if (validateForm()) {
      setSuccessMessage("Form submitted successfully!");
      // Perform additional actions like sending form data to the server
    } else {
      setShowLoader(false);
    }
  };
  const validateForm = () => {
    let isValid = true;
    if (email.length > 0) {
      if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address.");
        isValid = false;
      } else {
        setEmailError("");
      }
    } else {
      setEmailError("email is required");
      isValid = false;
    }

    if (cardNumber.length > 0) {
      if (!validateCardNumber(cardNumber)) {
        setCardNumberError("Please enter a valid card number.");
        isValid = false;
      } else {
        setCardNumberError("");
      }
    } else {
      setCardNumberError("card number is required");
      isValid = false;
    }
    if (expiry.length > 0) {
      if (!validateExpiry(expiry)) {
        setExpiryError("Please enter a valid expiry date (MM/YY).");
        isValid = false;
      } else {
        setExpiryError("");
      }
    } else {
      setExpiryError("expiry field required");
      isValid = false;
    }

    if (cvv.length > 0) {
      if (!validateCVV(cvv)) {
        setCVVError("Please enter a valid CVV.");
        isValid = false;
      } else {
        setCVVError("");
      }
    } else {
      setCVVError("cvv required");
      isValid = false;
    }
    if (nameOnCard.length == "") {
      setNameErr("Name on card is required");
      isValid = false;
    } else {
      setNameErr("");
    }

    return isValid;
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
    return value.length != "";
  };
  const validateCardNumber = (value) => {
    // Implement your card number validation logic here
    // For example, you can use a library like 'card-validator'
    // Return true if the card number is valid, otherwise false
    return value.length === 19;
  };

  const validateExpiry = (value) => {
    // Implement your expiry date validation logic here
    // For example, you can check if the expiry date is in the future and in the valid format
    // Return true if the expiry date is valid, otherwise false
    return value.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/);
  };

  const validateCVV = (value) => {
    // Implement your CVV validation logic here
    // For example, you can check if the CVV is a 3 or 4 digit number
    // Return true if the CVV is valid, otherwise false
    return value.length === 3 || value.length === 4;
  };

  const handleCardNumberChange = (event) => {
    const formattedValue = formatCardNumber(event.target.value);
    setCardNumber(formattedValue);
  };

  const handleExpiryChange = (event) => {
    const formattedValue = formatExpiry(event.target.value);
    setExpiry(formattedValue);
  };

  return (
    <Container className="py-2 pb-0">
      <Row className="justify-content-center">
        <Col md={6}>
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label className="font-bold ">Email</Form.Label>
              <Form.Control
                type="email"
                className="p-3"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError ? (
                <p className="text-red-600 font-bold">{emailError}</p>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group controlId="cardNumber">
              <Form.Label className="font-bold ">Card Number</Form.Label>
              <div className="relative">
                <Form.Control
                  maxLength={19}
                  type="text"
                  className="p-3"
                  placeholder="Enter card number"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  required
                  isInvalid={cardNumber && !validateCardNumber(cardNumber)}
                />
                <div className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-400">
                  <FaCreditCard size={24} />
                </div>
              </div>
              {cardNumberError ? (
                <p className="text-red-600 font-bold">{cardNumberError}</p>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group controlId="expiry">
              <Form.Label className="font-bold">Expiry Date</Form.Label>
              <div className="relative">
                <Form.Control
                  type="text"
                  className="p-3"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={handleExpiryChange}
                  required
                  maxLength={5}
                  isInvalid={expiry && !validateExpiry(expiry)}
                />
                <div className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-400">
                  <FaCalendarAlt size={24} />
                </div>
              </div>
              {expiryError ? (
                <p className="text-red-600 font-bold">{expiryError}</p>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group controlId="cvv">
              <Form.Label className="font-bold ">CVV</Form.Label>
              <div className="relative">
                <Form.Control
                  type="text"
                  className="p-3"
                  placeholder="Enter CVV"
                  value={cvv}
                  onChange={(e) => setCVV(e.target.value)}
                  required
                  maxLength={3}
                  isInvalid={cvv && !validateCVV(cvv)}
                />
                <div className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-400">
                  <FaLock size={24} />
                </div>
              </div>
              {cvvError ? (
                <p className="text-red-600 font-bold">{cvvError}</p>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label className="font-bold ">Name on Card</Form.Label>
              <div className="relative">
                <Form.Control
                  className="p-3"
                  type="text"
                  placeholder="Enter account holder name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  isInvalid={name && !validateName(name)}
                />
                <div className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-400">
                  <MdOutlineAccountCircle size={24} />
                </div>
              </div>
              {nameErr ? (
                <p className="text-red-600 font-bold">{nameErr}</p>
              ) : (
                ""
              )}
            </Form.Group>
            <div className="!flex !justify-center">
              <Button
                className=" !bg-indigo-800 font-bold mt-5 text-white text-lg p-3  w-[45%]  pay-button"
                type="submit"
              >
                <FaCreditCard className="button-icon" />
                pay
                <span className="pay-button-hover btn-anim"></span>
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentCheckoutForm;
