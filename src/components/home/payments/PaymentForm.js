import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Button, Spinner, Alert, Card } from "react-bootstrap";
import { FaGooglePay } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiPaytm } from "react-icons/si";

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(false);
    } else {
      setPaymentError(null);
      setPaymentSuccess(true);
      // Send the paymentMethod.id to your server for further processing
    }

    setLoading(false);
  };

  return (
    <>
      <div className="container cursor-default m-0 p-0 ">
        <div className="row bg-white w-full m-0 p-0">
          <p className="text-gray-600 flex items-center justify-center  font-bold pt-3 pb-3 mb-1">
            We have received your inquiry, our advocate's are here to help you
            on that.
          </p>
          <div className="border-1 row m-0 ">
            <div></div>
            <div className="col-md-12 col-sm-12 !pr-0 mb-4">
              <Card className="!border-1 !border-r-0">
                <Card.Title>Your Information</Card.Title>
                <Card.Body>
                  <label className="text-sm">Name:</label>
                  <p className="font-bold mb-1"> Sandeep Varma</p>
                  <label className="text-sm">Email:</label>
                  <p className="font-bold mb-1">dev@gmail.com</p>
                  <label className="text-sm">Mobile:</label>
                  <p className="font-bold mb-0">7901003266</p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-12 col-sm-12 !pr-0">
              <Card className="!border-1  !h-[100%]">
                <Card.Title>Application</Card.Title>
                <Card.Body>
                  <div className="!flex w-[100%]">
                    <p className=" col-md-6 mb-0">
                      Application no: <b>56er2t4</b>
                    </p>
                    <p className=" col-md-6 mb-0 text-right">
                      Date: <b>{new Date().toLocaleDateString("en-GB")}</b>
                    </p>
                  </div>
                  {/* <p>Complaint Type : <b>Accident</b> </p> */}
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-12 mt-4">
              {/* <Card className='!border-1 '> */}
              <p className="font-bold mb-1 text-black !text-lg ">
                Kindly choose the mode of payment then proceed to checkout page.
              </p>
              {/* <div> */}
              <div className="flex  pb-3 text-black">
                <div className="col-md-6 col-sm-6 col-6 h-[10vh] border-1 border-red-900 mr-2 !bg-[rgba(250,0,0,0.5)] hover:bg-gradient-to-br from-red-900 to-transparent hover:text-white hover:font-bold !m-0 cursor-pointer">
                  <p className="font-bold pl-2">Offline mode</p>
                  <small className="flex pl-2">
                    <TfiHeadphoneAlt className="mr-2" size={25} /> Talk to our
                    Reprasentative
                  </small>
                </div>
                <div className=" col-md-6 col-sm-6 col-6 h-[10vh] border-1 border-green-900 bg-[rgba(0,250,0,0.5)] hover:bg-gradient-to-br from-green-900 to-transparent hover:text-white  !pb-5 cursor-pointer">
                  <p className="font-bold pl-2 !pb-0 mb-0">Online mode</p>
                  <div className="flex justify-around items-center">
                    <img
                      src={"/images/upi.svg"}
                      className="!w-[35px] lg:!w-[50px]"
                      width={"55rem"}
                      height={"40px !important"}
                      alt="upi"
                    />
                    <img
                      src={"/images/banktransfer.png"}
                      className="!w-[35px] lg:!w-[50px]"
                      width={"50rem"}
                      height={"40px !important"}
                      alt="bank tranksfer"
                    />
                    {/* <AiFillBank size={25}/> */}
                    <img
                      src={"/images/mastercard-2.svg"}
                      className="!w-[35px] lg:!w-[50px]"
                      width={"50rem"}
                      height={"40px !important"}
                      alt="card"
                    />
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* </Card> */}
            </div>
          </div>
        </div>
      </div>
      {/* <form className='pl-4 bg-[rgba(250,250,250,0.5)] text-black ' onSubmit={handleSubmit}>
            {paymentError && <Alert variant="danger">{paymentError}</Alert>}
            {paymentSuccess && <Alert variant="success">Payment successful!</Alert>}
            <h4 className=' text-center text-'> Moving farward towards your problem </h4>
            <p className=' text-lg'>Application number : <b>564er2t</b></p>
            <p className=' text-lg'>Date : <b>{new Date().toLocaleDateString('en-GB')}</b></p>
            <div className='flex'>
                <p className=' text-lg justify-left'>Total Amount :</p>
                <p className='font-bold text-lg justify-right'>$500</p>
            </div>
            <div>
                <p className='text-lg'>Kindly choose mode of payment</p>
                <div className='flex justify-center !pb-3'>
                    <div className='pl-3 col-md-5 col-sm-5 col-5 border-1 border-red-900 mr-2 bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(250,0,0,0.5)]'>
                        <p className='font-bold pl-2'>Offline mode</p>
                        <small className='flex'><TfiHeadphoneAlt className='mr-2' size={25} /> Talk to Reprasentative</small>
                    </div>
                    <div className=' pl-3 pr-3 col-md-5 col-sm-5 col-5 border-1 border-green-900 ml-2 bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,250,0,0.5)]'>
                        <p className='font-bold pl-2'>Online mode</p>
                        <div className='flex justify-around'>
                        <FaGooglePay size={30}/>
                        <AiFillBank size={25}/>
                        <BsFillCreditCard2BackFill size={20}/>
                        </div>
                        
                    </div>
                </div>
            </div>
            {loading && <Button type="submit" disabled={loading}>  
                <Spinner animation="border" size="sm" className="mr-2" />
                Processing...
            
            </Button>
}
        </form> */}
    </>
  );
};

export default CheckoutForm;
