import React, { useState, useEffect } from "react";
import NavBar from "../Header/header";
import { PiMapPinFill } from "react-icons/pi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { Button } from "@mui/material";
import { BiPaperPlane } from "react-icons/bi";
import Footer from "../footer/footer";
import FindYourCaseDetails from "../findYourCaseDetails";
import ContactDetails from "../contactDetails";
export default function Refund() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setShowLoader(false);
  }, []);
  return (
    <>
      {showLoader && (
        <div class="preloader">
          <div class="cssload-dots">
            <div class="cssload-dot"></div>
            <div class="cssload-dot"></div>
            <div class="cssload-dot"></div>
            <div class="cssload-dot"></div>
            <div class="cssload-dot"></div>
          </div>
        </div>
      )}
      <div className="aboutComponent w-full relative">
        <NavBar />

        <div className="container h-[50vh] flex justify-center items-center">
          <h1 className="text-white text-6xl ">Refund Policy</h1>
        </div>
      </div>

      <div class="howitwrap" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="ters-text">
                <p>
                  We agree to make immediate, good faith efforts to resolve any
                  complaint about our services. We will make our best efforts to
                  issue an opinion letter no later than midnight on the business
                  day following the business day on which complete and accurate
                  information and documents are received by us. If the client
                  requests a refund before substantial services are provided, we
                  will promptly refund any advance fee that was paid. If any
                  opinion letter contains any errors that are our
                  responsibility, we will issue a revised opinion at no
                  additional charge. Our firm is entitled to rely upon the
                  accuracy of information provided by seller and its broker. If
                  errors in the opinion are the result of inaccurate information
                  provided by the broker or the client, the cost of revising the
                  opinion will be the responsibility of the client.
                </p>

                <p>
                  This Privacy Policy is an electronic record in the form of an
                  electronic contract formed under the Computer Crimes Act, 1997
                  and the rules made their under and the amended provisions
                  pertaining to electronic documents / records in various
                  statutes as amended by the Computer Crimes Act, 1997. This
                  Privacy Policy does not require any physical, electronic or
                  digital signature. This Privacy Policy is a legally binding
                  document between you and Legal Moto (Global Future Wide SDN.
                  BHD.). The terms of this Privacy Policy will be effective upon
                  your acceptance of the same (directly or indirectly in
                  electronic form, by clicking on the I accept tab or by use of
                  the website or by any other means) and will govern the
                  relationship between you and Legal Moto (Global Future Wide
                  SDN. BHD.) for your use of the website “Website” (defined
                  below).
                </p>

                <h4>FORCE MAJEURE</h4>

                <p>
                  Neither party will be liable to the other for any delay in or
                  failure to perform or comply with its obligations (except
                  those relating to payment) under the Contract as a result of
                  Force Majeure. The party concerned shall promptly inform the
                  other party of the beginning and end of a case of force
                  majeure. If an event of force majeure persists for more than
                  90 days, either party is entitled to terminate the contract
                  immediately by written notice and without liability in the
                  event of termination.
                  <br />
                  All orders for Products and Services placed prior to the date
                  of termination will be deemed to have been cancelled and the
                  Purchaser shall pay Fourm for all Products and Services
                  already supplied, work-in-progress, and the cost of materials
                  reasonably ordered by Fourm in expectation of completing the
                  Contract.
                </p>

                <h4>Limitation of Liabilities</h4>

                <p>
                  Under no circumstances, including but not limited to
                  negligence, shall Top Advocate and its subsidiaries,
                  affiliates, officers, agents and employees be liable for any
                  direct, indirect, special, incidental, punitive or
                  consequential damages of any kind, or any damages whatsoever,
                  including, but not limited to, damages for loss of profits,
                  goodwill, data or other intangible losses, resulting from the
                  use or the results of the use of the services or content
                  offered on the website and forums, from statements or conduct
                  of any third party using the website and forums, or from
                  failure of performance, error, mistake, omission,
                  interruption, deletion, defect, delay in operation or
                  transmission, computer virus, mistakes, inaccuracies or
                  typographical errors, acts of god/acts of nature/acts of
                  terrorism, communication line failure, theft or destruction or
                  unauthorized access to, alteration of, or use of this website
                  and forums, or any other matter relating to the website and
                  forums, whether for breach of contract, tortuous behavior,
                  antitrust, negligence, or under any other cause of action or
                  theory of liability.
                  <br />
                  Neither party shall be liable to the other for any indirect,
                  special or consequential loss howsoever arising, including
                  without prejudice to the generality of the foregoing loss of
                  profit, loss or corruption of data, loss of income, loss of
                  goodwill, loss of business or loss of anticipatory savings.
                </p>

                <h4>Indemnification</h4>

                <p>
                  You agree to defend, indemnify and hold harmless Top Advocate
                  Forum, its employees, directors, officers, affiliated
                  companies, agents, vendors or suppliers from and against any
                  and all claims, damages, costs and expenses, including
                  reasonable attorneys’ fees, arising from or related to your
                  use or misuse of the site, including, without limitation, your
                  violation of these Terms and Conditions, the infringement by
                  you, or any other subscriber or user of your account, of any
                  intellectual property right or other right of any person or
                  entity.
                </p>

                <h4>Miscellaneous</h4>

                <p>
                  These Terms of Use will be governed by and interpreted in
                  accordance with the laws of Malaysia without giving effect to
                  any of its conflict of laws provisions.
                  <br />
                  You agree that any cause of action relating to your use of the
                  Sites may be brought before the courts in Malaysia.
                  <br />
                  The Legal Moto (Global Future Wide SDN. BHD.) Legal Forum can
                  transfer its rights and obligations under the Terms of Use at
                  any time without notice.
                  <br />
                  Any failure of the Legal Moto (Global Future Wide SDN. BHD.)
                  Legal Forum to enforce or exercise any provision of these
                  Terms of Use shall not constitute a waiver of that right or
                  provision. In the event of termination of these Terms of Use
                  for any reason, the provisions entitled Disclaimers,
                  Liability, Indemnification, and other provisions for which
                  survival is equitable or appropriate, shall survive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FindYourCaseDetails />
      <ContactDetails />
      <Footer />
    </>
  );
}
