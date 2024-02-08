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
export default function Privacy() {
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
          <h1 className="text-white text-6xl ">Privacy Policy</h1>
        </div>
      </div>

      <div class="howitwrap" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="ters-text">
                <p>
                  This Privacy Policy governs the manner in which Legal Moto
                  collects, uses, maintains and discloses information collected
                  from users (each, a “User”) of the{" "}
                  <strong>www.thelegalmoto.com</strong> website (“Site”). This
                  privacy policy applies to the Site and all products and
                  services offered by Legal Moto.
                </p>

                <h4>Personal identification information</h4>
                <p>
                  We may collect personal identification information from Users
                  in a variety of ways, including, but not limited to, when
                  Users visit our site, respond to a survey, fill out a form,
                  and in connection with other activities, services, features or
                  resources we make available on our Site. Users may be asked
                  for, as appropriate, name, email address, phone number. Users
                  may, however, visit our Site anonymously. We will collect
                  personal identification information from Users only if they
                  voluntarily submit such information to us. Users can always
                  refuse to supply personally identification information, except
                  that it may prevent them from engaging in certain Site related
                  activities.
                </p>

                <h4>Non-personal identification information</h4>
                <p>
                  We may collect non-personal identification information about
                  Users whenever they interact with our Site. Non-personal
                  identification information may include the browser name, the
                  type of computer and technical information about Users means
                  of connection to our Site, such as the operating system and
                  the Internet service providers utilized and other similar
                  information.
                </p>

                <h4>Web browser cookies</h4>
                <p>
                  Our Site may use “cookies” to enhance User experience. User’s
                  web browser places cookies on their hard drive for
                  record-keeping purposes and sometimes to track information
                  about them. User may choose to set their web browser to refuse
                  cookies, or to alert you when cookies are being sent. If they
                  do so, note that some parts of the Site may not function
                  properly.
                </p>

                <h4>How we use collected information</h4>
                <p>
                  Legal Moto may collect and use Users personal information for
                  the following purposes:
                </p>

                <h4>To improve customer service</h4>
                <p>
                  Information you provide helps us respond to your customer
                  service requests and support needs more efficiently.
                </p>

                <h4>To improve our site</h4>
                <p>
                  We may use feedback you provide to improve our products and
                  services.
                </p>

                <h4>To process payments</h4>
                <p>
                  We may use the information Users provide about themselves when
                  placing an order only to provide service to that order. We do
                  not share this information with outside parties except to the
                  extent necessary to provide the service.
                </p>
                <p>
                  To run a promotion, contest, survey or other Site feature.
                </p>
                <p>
                  To send Users information they agreed to receive about topics
                  we think will be of interest to them.
                </p>

                <h4>To send periodic emails</h4>
                <p>
                  We may use the email address to send User information and
                  updates pertaining to their order. It may also be used to
                  respond to their inquiries, questions, and/or other requests.
                  If User decides to opt-in to our mailing list, they will
                  receive emails that may include company news, updates, related
                  product or service information, etc. If at any time the User
                  would like to unsubscribe from receiving future emails, we
                  include detailed unsubscribe instructions at the bottom of
                  each email or User may contact us via our Site.
                </p>

                <h4>How we protect your information</h4>
                <p>
                  We adopt appropriate data collection, storage and processing
                  practices and security measures to protect against
                  unauthorized access, alteration, disclosure or destruction of
                  your personal information, username, password, transaction
                  information and data stored on our Site.
                </p>
                <p>
                  Our Site is in compliance with PCI vulnerability standards in
                  order to create as secure of an environment as possible for
                  Users.
                </p>

                <h4>Sharing your personal information</h4>
                <p>
                  We do not sell, trade, or rent Users personal identification
                  information to others. We may share generic aggregated
                  demographic information not linked to any personal
                  identification information regarding visitors and users with
                  our business partners, trusted affiliates and advertisers for
                  the purposes outlined above. We may use third party service
                  providers to help us operate our business and the Site or
                  administer activities on our behalf, such as sending out
                  newsletters or surveys. We may share your information with
                  these third parties for those limited purposes provided that
                  you have given us your permission.
                </p>

                <h4>Third party websites</h4>
                <p>
                  Users may find advertising or other content on our Site that
                  link to the sites and services of our partners, suppliers,
                  advertisers, sponsors, licensors and other third parties. We
                  do not control the content or links that appear on these sites
                  and are not responsible for the practices employed by websites
                  linked to or from our Site. In addition, these sites or
                  services, including their content and links, may be constantly
                  changing. These sites and services may have their own privacy
                  policies and customer service policies. Browsing and
                  interaction on any other website, including websites which
                  have a link to our Site, is subject to that website’s own
                  terms and policies.
                </p>

                <h4>Changes to this privacy policy</h4>
                <p>
                  Legal Moto has the discretion to update this privacy policy at
                  any time. When we do, we will post a notification on the main
                  page of our Site, revise the updated date at the bottom of
                  this page. We encourage Users to frequently check this page
                  for any changes to stay informed about how we are helping to
                  protect the personal information we collect. You acknowledge
                  and agree that it is your responsibility to review this
                  privacy policy periodically and become aware of modifications.
                </p>

                <h4>Your acceptance of these terms</h4>
                <p>
                  By using this Site, you signify your acceptance of this
                  policy. If you do not agree to this policy, please do not use
                  our Site. Your continued use of the Site following the posting
                  of changes to this policy will be deemed your acceptance of
                  those changes.
                </p>

                <h4>Contacting us</h4>
                <p>
                  If you have any questions about this Privacy Policy, the
                  practices of this site, or your dealings with this site,
                  please contact us at:
                  <br />
                  <strong>
                    No 3FC, 401, East of NGEF BDA L/O, Vijinapura RM Nagar,
                    Bengaluru (Bangalore) Urban, Karnataka, 560016
                  </strong>
                </p>

                <p>This document was last updated on January, {new Date().getFullYear()}</p>

                <p>Privacy policy created by Generate Privacy Policy</p>
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
