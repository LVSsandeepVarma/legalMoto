import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="bg-red-600">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="footer-copyright text-white">
                <p>
                  Copyright ©
                  <script
                    type="text/javascript"
                    async=""
                    src="https://www.gstatic.com/recaptcha/releases/IqA9DpBOUJevxkykws9RiIBs/recaptcha__en.js"
                    crossorigin="anonymous"
                    integrity="sha384-L+Rcy9bX7LEQlg9NZzTFP87t1GDtEWMzMJ2j0byDOg2ufQxSr7RATNzXeXug08jg"
                  ></script>
                  
                  { new Date().getFullYear()}, All Rights Reserved by{" "}
                  <strong>
                    <i>Legal Moto</i>
                  </strong>
                  .
                </p>
              </div>
            </div>

            <div class="col-md-12 col-sm-12 ">
              <div class="footer-copyright">
                <p className="!text-white flex justify-center ml-3 mr-2">
                  <a href="/terms">
                    <p className=" ml-3 mr-2 !text-white">
                      Terms and Conditions
                    </p>
                  </a>{" "}
                  |{" "}
                  <a href="/privacy-policy">
                    <p className=" ml-3 mr-2 !text-white">Privacy Policy</p>
                  </a>{" "}
                  |{" "}
                  <a href="/refund-policy">
                    <p className=" ml-3 mr-2 !text-white">Refund Policy</p>
                  </a>{" "}
                  |{" "}
                  <a href="/agreement-contract">
                    <p className=" ml-3 mr-2 !text-white">Agreement Contract</p>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

{
  /* <div class="socialLinks">
            {" "}
            <a href="#">
              {/* <i class="fa fa-facebook" aria-hidden="true"></i> */
}
// <FaFacebook/>
// </a>{" "}
// <a href="#">
{
  /* <i class="fa fa-twitter" aria-hidden="true"></i> */
}
// <FaTwitter/>
// </a>{" "}
// <a href="#">
{
  /* <i class="fa fa-linkedin" aria-hidden="true"></i> */
}
// <FaLinkedin/>
// </a>{" "}
// <a href="#">
// <i class="fa fa-google-plus" aria-hidden="true"></i>
// <FaGoogle/>
// </a>{" "}
// <a href="#">
{
  /* <i class="fa fa-behance" aria-hidden="true"></i> */
}
// <FaBehance/>
// </a>{" "}
// </div> */}
