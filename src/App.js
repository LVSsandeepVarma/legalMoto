import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/home/home";
import About from "./components/about/about";
import Services from "./components/services/services";
import Checkout from "./components/home/payments/checkoutV2";
import Price from "./components/prices/price";
import Contactus from "./components/contactUs/contactus";
import Terms from "./components/termsandconditions/terms";
import Refund from "./components/refundPolicy/refund";
import Agreement from "./components/agreementContract/agreementContract";
import Privacy from "./components/privacy/privacy";
import "./i18n";
import PaymentStatus from "./components/home/payments/paymetnStatus/paymentStatus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Services />}></Route>
        <Route path="/prices" element={<Price />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/contact-us" element={<Contactus />}></Route>
        {/* <Route path='/checkout' element={<PaymentCheckoutForm/>}></Route> */}
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/privacy-policy" element={<Privacy />}></Route>
        <Route path="/refund-policy" element={<Refund />}></Route>
        <Route path="/agreement-contract" element={<Agreement />}></Route>
        <Route path="/payment-status/:id" element={<PaymentStatus />}></Route>
        {/* chinese */}
        <Route path="/chi/" element={<Home />}></Route>
        <Route path="/chi/about" element={<About />}></Route>
        <Route path="/chi/service" element={<Services />}></Route>
        <Route path="/chi/prices" element={<Price />}></Route>
        <Route path="/chi/terms" element={<Terms />}></Route>
        <Route path="/chi/contact-us" element={<Contactus />}></Route>
        {/* <Route path='/checkout' element={<PaymentCheckoutForm/>}></Route> */}
        <Route path="/chi/checkout" element={<Checkout />}></Route>
        <Route path="/chi/privacy-policy" element={<Privacy />}></Route>
        <Route path="/chi/refund-policy" element={<Refund />}></Route>
        <Route path="/chi/agreement-contract" element={<Agreement />}></Route>
        <Route path="/chi/payment-status/:id" element={<PaymentStatus />}></Route>
        {/* malay */}
        <Route path="/ms/" element={<Home />}></Route>
        <Route path="/ms/about" element={<About />}></Route>
        <Route path="/ms/service" element={<Services />}></Route>
        <Route path="/ms/prices" element={<Price />}></Route>
        <Route path="/ms/terms" element={<Terms />}></Route>
        <Route path="/ms/contact-us" element={<Contactus />}></Route>
        {/* <Route path='/checkout' element={<PaymentCheckoutForm/>}></Route> */}
        <Route path="/ms/checkout" element={<Checkout />}></Route>
        <Route path="/ms/privacy-policy" element={<Privacy />}></Route>
        <Route path="/ms/refund-policy" element={<Refund />}></Route>
        <Route path="/ms/agreement-contract" element={<Agreement />}></Route>
        <Route path="/ms/payment-status/:id" element={<PaymentStatus />}></Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Home/>
    // </div>
  );
}

export default App;
