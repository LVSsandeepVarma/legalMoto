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

export default function Terms() {
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
          <h1 className="text-white text-6xl ">Terms and Conditions</h1>
        </div>
      </div>
      <div class="howitwrap" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="ters-text text-gray-700 subpixel-antialiased">
                <p>
                  Legal Moto (Global Future Wide SDN. BHD.), Level-6 &amp; 6M,
                  Menara The Stride, Bukit Bintang City Center, No.2, Jalan Hang
                  Tuah, 55100, Kuala Lumpur, Malaysia. For more information
                  visit our website and understand the information, resources,
                  services, products, and tools we provide and agree to accept
                  and adhere to the following terms and conditions as stated in
                  this policy (hereafter referred to as ‘End User Agreement’),
                  along with the terms and conditions as stated in our Privacy
                  (on our website)
                </p>

                <p>
                  We reserve the right to change this End User Agreement (EUA)
                  from time to time without notice as you have acknowledged and
                  agree that it is your responsibility to review this End User
                  Agreement periodically to be familiar yourself with any
                  modifications. Your continued use of this site after such
                  modifications will constitute acknowledgment and agreement of
                  the modified terms and conditions.
                </p>

                <h4>USE AND CONDUCT</h4>

                <p>
                  For further services &amp; proceedings, you may be required to
                  provide certain information about yourself (such as
                  identification, email, phone number, contact details, etc.) as
                  part of the registration process. You agree that any
                  information you provide will always be accurate, correct, and
                  up to date. (Any False statements provided will attract legal
                  Suits/Legal Penalties)
                </p>

                <p>
                  You are responsible for maintaining the confidentiality of any
                  login information associated with any account you use to
                  access our Services and Resources. Accordingly, you are
                  responsible for all activities that occur under your accounts.
                </p>

                <p>
                  Accessing (or attempting to access) any of our
                  Resources/Accounts by any mode other than the mode we provide,
                  is strictly prohibited. You specifically agree not to access
                  (or attempt to access) any of our Resources/Accounts through
                  any automated, unethical or unconventional means. Engaging in
                  any activity that disrupts or interferes with our
                  Resources/Accounts, including the servers and/or networks to
                  which our Resources/Accounts are located or connected, is
                  strictly prohibited. (Any such actions will attract legal
                  Suits/Legal Penalties)
                </p>

                <p>
                  You are solely responsible for any consequences, losses, or
                  damages that we may directly or indirectly incur or suffer due
                  to any unauthorized activities conducted by you, as explained
                  above, and may incur criminal or civil liability.
                </p>

                <p>
                  We may provide various open communication tools on our
                  website, such as product ratings and reviews, various social
                  media services, etc. You understand that generally we do not
                  pre-screen or monitor the content posted by End users of these
                  various communication tools, which means that if you choose to
                  use these tools to submit any type of content to our website,
                  then it is your personal responsibility to use these tools in
                  a responsible and ethical manner. By posting information or
                  otherwise using any open communication tools as mentioned, you
                  agree that you will not upload, post, share, or otherwise
                  distribute any content that:
                </p>

                <p>
                  1) Is illegal, threatening, defamatory, abusive, harassing,
                  degrading, intimidating, fraudulent, deceptive, invasive,
                  racist, or contains any type of suggestive, inappropriate, or
                  explicit language;
                </p>

                <p>
                  2) Infringes on any trademark, patent, trade secret,
                  copyright, or other proprietary right of any party;
                </p>

                <p>
                  3) Contains any type of unauthorized or unsolicited
                  advertising;
                </p>

                <p>
                  We have the right at our sole discretion to remove any content
                  that, we feel in our judgment does not comply with this End
                  User Agreement, along with any content that we feel is
                  otherwise objectionable, offensive, inaccurate, harmful, or
                  violates any 3rd party copyrights or trademarks. We are not
                  responsible for any delay or failure in removing such content.
                  If you post content that we choose to remove, you hereby
                  consent to such removal, and consent to waive any claim
                  against us.
                </p>

                <p>
                  We do not assume any liability for any content posted by End
                  User or any other 3rd party users of our website. However, any
                  content posted by End User/3rd party using any open
                  communication tools on our website, provided that it doesn’t
                  violate or infringe on any 3rd party copyrights or trademarks,
                  becomes the property of Legal Moto (Global Future Wide SDN.
                  BHD.)., and as such, gives us a perpetual, irrevocable,
                  worldwide, royalty-free, exclusive license to reproduce,
                  modify, adapt, translate, publish, publicly display and/or
                  distribute as we see fit. This only refers and applies to
                  content posted via open communication tools as described, and
                  does not refer to information that is provided as part of the
                  registration process, necessary in order to use our Resources.
                  All information provided as part of our registration process
                  is covered by our Privacy Policy.
                </p>

                <p>
                  You agree to indemnify and hold harmless to{" "}
                  <a
                    className="text-red-600"
                    href="mailto:complaint@thelegalmoto.com"
                  >
                    complaint@thelegalmoto.com
                  </a>
                  , a digital property of Legal Moto (Global Future Wide SDN.
                  BHD.) and its parent company and affiliates, and their
                  directors, officers, managers, employees, donors, agents, and
                  licensors, from and against all losses, expenses, damages and
                  costs, including reasonable attorneys’ fees, resulting from
                  any violation of this User Agreement or the failure to fulfill
                  any obligations relating to your account incurred by you or
                  any other person using your account. We reserve the right to
                  take over the exclusive defense of any claim for which we are
                  entitled to indemnification under this End User Agreement. In
                  such event, you shall provide us with such cooperation as is
                  reasonably requested by us.
                </p>

                <h4>PRIVACY</h4>

                <p>
                  Your privacy is very important to us, which is why we’ve
                  created a separate Privacy Policy in order to explain in
                  detail how we collect, manage, process, secure, and store your
                  private information. Our privacy policy is included under the
                  scope of this User Agreement.
                </p>

                <h4>LIMITATION OF WARRANTIES</h4>

                <p>
                  By using our website, you understand and agree that all
                  Resources/Accounts we provide are “as is” and “as available”.
                  This means that we do not represent or warrant to you that:
                </p>

                <h4>LIMITATION OF LIABILITY</h4>

                <p>
                  In conjunction with the Limitation of Warranties as explained
                  above, you expressly understand and agree that any claim
                  against us shall be limited to the amount you paid, if any,
                  for use of products and/or services{" "}
                  <a
                    className="text-red-600"
                    href="mailto:complaint@thelegalmoto.com"
                  >
                    complaint@thelegalmoto.com
                  </a>{" "}
                  will not be liable for any direct, indirect, incidental,
                  consequential or exemplary loss or damages which may be
                  incurred by you as a result of using our Resources, or as a
                  result of any changes, data loss or corruption, cancellation,
                  loss of access, or downtime to the full extent that applicable
                  limitation of liability laws apply.
                </p>

                <h4>COPYRIGHTS / TRADEMARKS</h4>

                <p>
                  All content and materials available on{" "}
                  <a
                    className="text-red-600"
                    href="mailto:complaint@thelegalmoto.com"
                  >
                    complaint@thelegalmoto.com
                  </a>
                  , including but not limited to text, graphics, website name,
                  code, images and logos are the intellectual property Of Legal
                  Moto (Global Future Wide SDN. BHD.), and are protected by
                  applicable copyright and trademark law. Any inappropriate use,
                  including but not limited to the reproduction, distribution,
                  display or transmission of any content on this site is
                  strictly prohibited, unless specifically authorized Legal Moto
                  (Global Future Wide SDN. BHD.).
                </p>

                <h4>SERVICES</h4>

                <p>
                  1) We provide Individual Case Managers, to listen to your
                  Grievances without any rush.
                </p>

                <p>
                  2) Assigned Advocates ( Lawyers in case of demands on
                  particular circumstances by Clients)
                </p>

                <p>3) We follow first come first serve model.</p>

                <p>
                  4) In case of Urgent Requirement we provide our services
                  accordingly.
                </p>

                <p>5) 1 Notice/Complaint and Verbal Follow-ups till 30days.</p>

                <p>6) Offline Case handlings if required.</p>

                <h4>TERMINATION OF USE</h4>

                <p>
                  You agree that we may, at our sole discretion, suspend or
                  terminate your access to all or part of our website and
                  Resources with or without notice and for any reason,
                  including, without limitation, breach of this End User
                  Agreement. Any suspected illegal, fraudulent or abusive
                  activity may be grounds for terminating your relationship and
                  may be referred to appropriate law enforcement authorities.
                  Upon suspension or termination, your right to use the
                  resources we provide will immediately cease, and we reserve
                  the right to remove or delete any information that you may
                  have on file with us, including any account or login
                  information.
                </p>

                <h4>GOVERNING LAW</h4>

                <p>
                  This website is controlled by Legal Moto (Global Future Wide
                  SDN. BHD.) from our office located in Malaysia. It can be
                  accessed by most countries around the world. As each country
                  has laws that may differ from those of Malaysia by accessing
                  our website, you agree that the statutes and laws of, Malaysia
                  without regard to the conflict of laws and the United Nations
                  Convention on the International Sales of Goods, will apply to
                  all matters relating to the use of this website and the
                  purchase of any products or services through this site.
                </p>

                <p>
                  Furthermore, any action to enforce this End User Agreement
                  shall be brought in Malaysia. You hereby agree to personal
                  jurisdiction by such courts, and waive any jurisdictional,
                  venue, or inconvenient forum objections to such courts.
                </p>

                <p>
                  Priority Service: If you have any urgency then you can take
                  our priority service by paying only RM 150.00 with the service
                  fee. Our average respond time of priority service is only 10
                  Minutes to 24 business hours.
                </p>

                <h4>CONSUMER COMPLAINT SERVICE</h4>

                <p>
                  No one can give 100% guarantee that the complaint will be
                  resolved as it depends on the situation of the company but we
                  will try our level best to solve the matter to the last
                  extent. In maximum cases we have resolved but in some
                  conditions we cannot provide the guarantee to the consumer.
                  But most of the companies try to solve the issues. If the
                  company still on that note does not look into the issue then
                  in that case we will give you the prepared draft of the
                  complaint and you can approach to the nearest consumer forum
                  for filing of the complaint.
                </p>

                <h4>CANCELLATION AND REFUND</h4>

                <p>
                  Cancellation of order is not possible once the payment has
                  been made. No refunds will be given except in the event of
                  cancellation or non-performance of service by Legal Moto
                  (Global Future Wide SDN. BHD.). For further information, refer
                  to the Cancellation and Refund Policy.
                </p>

                <h4>GUARANTEE</h4>

                <p>
                  Unless otherwise expressed{" "}
                  <a
                    className="text-red-600"
                    href="mailto:complaint@thelegalmoto.com"
                  >
                    complaint@thelegalmoto.com
                  </a>{" "}
                  expressly disclaims all warranties and conditions of any kind,
                  whether express or implied, including, but not limited to the
                  implied warranties and conditions of merchantability, fitness
                  for a particular purpose and non-infringement.
                </p>

                <h4>DECLARATION</h4>

                <p>
                  We are not a Govt. body or portal; however, we provide legal
                  services &amp; filing, Consumer Complaint.
                </p>

                <h4>CONTACT INFORMATION</h4>

                <p>
                  If you have any questions or comments about these our Terms of
                  Service as outlined above, you can contact us:
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
