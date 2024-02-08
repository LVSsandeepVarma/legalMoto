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
export default function Agreement() {
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
          <h1 className="text-white text-6xl ">Agreement Contract</h1>
        </div>
      </div>

      <div class="howitwrap" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="ters-text">
                <h4>Agreement Contract for Legal Services</h4>

                <p>
                  Its on {new Date().toLocaleDateString("en-GB")} this agreement
                  has been made between:
                </p>

                <div class="row">
                  <div class="col-lg-6 col-md-12 col-sm-12">
                    <p>
                      <strong>First:</strong>
                      <br />
                      M/s.Legal consultants represented by advocate referred to
                      hereinafter as "First party".
                    </p>
                  </div>

                  <div class="col-lg-6 col-md-12 col-sm-12">
                    <p>
                      <strong>Second:</strong>
                      <br />
                      M/s Represented by Mr.
                      <br />
                      Referred to hereinafter as "Second Party"
                    </p>
                  </div>
                </div>

                <h4>Preamble:</h4>
                <p>
                  Whereas the First party works in the field of advocates and
                  legal consultants in Malaysia.
                </p>
                <p>
                  And whereas the Second Party desires to have the legal
                  services of the First party in Malaysia, and the balance of
                  Malaysia if the Second Party so desires.
                </p>
                <p>
                  Accordingly both parties in their full legal capacity agreed
                  to issue this agreement as per the following conditions:
                </p>

                <h4>First Article:</h4>
                <p>
                  The introduction and preamble shall be considered as an
                  integral part of this agreement and to be read with it.
                </p>

                <h4>Second Article:</h4>
                <p>
                  Pursuant to this agreement the First party has undertaken to
                  the Second Party as follows;
                </p>

                <ul>
                  <li>
                    To provide legal consultancy to the Second party for an
                    amount of Dhs Per case provided to be deducted from the case
                    charges in case of referring to court.
                  </li>
                  <li>
                    To represent the Second Party before all civil, penal,
                    Sharia and commercial Courts, rents committee and
                    arbitrating committees in Malaysia if the first party
                    desires so, of different categories of first instance,
                    appeal and cassation with regard to any cases presented by
                    the Second party to the First party in written.
                  </li>
                  <li>
                    To register the warning and send the same to the debtors who
                    delayed the payment payable to the Second party as an
                    initial step before filing the case and as per the request
                    and approval of the second party, provided charges of dhs
                    shall be fixed per each warning, and the same shall be
                    deducted from the agreed charges if the case has been
                    refereed to the court.
                  </li>
                  <li>
                    To register the complaints of the bounced cheques of the
                    customers before police of public prosecution and to follow
                    the case if the subject is referred to the court.
                  </li>
                  <li>
                    To follow the cases held before the courts at present and
                    which is still available with other advocates as agreed and
                    ordered by Second party.
                  </li>
                  <li>
                    To represent the Second party in all cases held against
                    them, as defendant, and to follow the same until the last
                    step of judicial procedures.
                  </li>
                  <li>
                    To represent the Second party in the counter cases which
                    held by or against the Second party along with the original
                    case.
                  </li>
                  <li>
                    To represent the Second party in the cases of rents whether
                    held by or against the Second party as lesser or lessee.
                  </li>
                </ul>

                <h4>Third Article:</h4>
                <p>
                  The Second Party shall pay to the First party for the legal
                  consultancy advocate charges and all other legal services as
                  follows:
                </p>
                <ul>
                  <li>
                    % of the value of any new case registered by the First party
                    on behalf of the Second party for demanding for
                    indebtedness:
                    <br />- Up to maximum limit of dhs.
                    <br />- And with minimum limit of dhs
                  </li>
                  <li>
                    To pay an amount equal to % the case value which held
                    against the Second party if the value is fixed, otherwise
                    and as mentioned in article (a), such charges shall be
                    determined on that date.
                  </li>
                  <li>
                    The charges mentioned in article (a) of article 3rd shall be
                    paid as follows:
                    <br />- Half of the total case charges in time of case
                    registration.
                    <br />- Half of the total case charges in time of the
                    judgment issuance.
                  </li>
                  <li>
                    An amount equal to half of the amounts mentioned in paras a
                    &amp; b of third article of this agreement shall be paid in
                    case of reaching to amicable settlement through negotiations
                    out of the court and before the registration of the cases.
                    The rights of the First party mentioned herein shall be paid
                    in time of settlement.
                    <br />- if the debtor violated its obligations and refused
                    to pay the debt then the case will be referred to court, the
                    charges received by the First party shall be considered as
                    part of the charges mentioned in paras a &amp; b of this
                    agreement then the balance of the charges shall be paid as
                    mentioned in para C of this agreement.
                  </li>
                  <li>
                    An amount equal to half of the charges mentioned in par (a)
                    of article 3rd shall be paid if the bounced cheque case was
                    finalized before the police and not referred to the court.
                  </li>
                  <li>
                    The charges and fees paid by the First party for serving the
                    cases of the Second party shall be borne by the latter.
                  </li>
                  <li>
                    An amount of dhs. Shall be paid annually in advance in time
                    of signing the contract and after six months.
                  </li>
                </ul>

                <h4>Fourth Article:</h4>
                <p>
                  First party undertakes to take all legal actions with due care
                  for defending the interests of the Second party and attend the
                  trial sessions through the legal principles and to register
                  within their legal dates.
                </p>

                <h4>Fifth Article:</h4>
                <p>
                  First party shall not accept any power of attorney against the
                  Second party before all the courts of AUE from the date of
                  executing this contract, except the cases in which the First
                  party representing parties against the Second party before the
                  signature of this contract.
                </p>

                <h4>Sixth Article:</h4>
                <p>
                  Duration of this agreement shall be one year starting from its
                  signature and automatically renewable unless either of the
                  parties informed the other to terminate the same on month at
                  least before the expiry date of the original or renewed
                  period.
                </p>

                <h4>Seventh Article:</h4>
                <p>
                  If this agreement has been terminated for any reason, the
                  parties shall agree to follow the available cases as follows:
                </p>

                <ul>
                  <li>
                    Whether to follow the same by the First party until the
                    issuance of a final judgment and receiving the amounts
                    subject of judgment.
                  </li>
                  <li>
                    Or to refund the same by the Second party and change the
                    First party as per the stage of the case and the provision
                    of article 3rd of this agreement
                  </li>
                </ul>

                <h4>Eighth Article:</h4>
                <p>
                  First party undertakes to provide the Second party with memos
                  and letters showing the procedures of the sessions and copies
                  of all evidences and documents presented to the court whether
                  by hand or fax or courier.
                </p>

                <h4>Ninth Article:</h4>
                <p>
                  The correspondences between the parties shall be in English
                  whenever it is required.
                </p>

                <h4>Tenth Article:</h4>
                <p>
                  Each party should notify the other party for any changes into
                  its address and as soon as possible.
                </p>

                <h4>Eleventh Article:</h4>
                <p>
                  If any dispute raised between the parties, Malaysia court of
                  first instance shall be the competent authority to settle the
                  same.
                </p>

                <h4>Twelfth Article:</h4>
                <p>
                  This contract is issued in duplicate, and both parties
                  understood and confirmed its contents then undertook to
                  execute it in good willing and accordingly they signed
                  hereunder.
                </p>

                <div class="row">
                  <div class="col-lg-6 col-md-12 col-sm-12">
                    <p style={{ float: "left" }}>
                      First Party
                      <br />
                      Signatures
                    </p>
                  </div>

                  <div class="col-lg-6 col-md-12 col-sm-12">
                    <p style={{ float: "right" }}>
                      Second Party
                      <br />
                      Signatures
                    </p>
                  </div>
                </div>
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
