import React from "react";
import "./Footer.scss";
import Logo from "../../components/Logo/Logo.js";
import { AiOutlineSend } from "react-icons/ai";
import {
  IoCallOutline,
  IoAtSharp,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";

import {
  RiFacebookCircleFill,
  RiYoutubeFill,
  RiKakaoTalkFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main-container">
        <div className="footer-container">
          <div className="new-letter">
            <Logo isFooter={true} />
            <p>
              Join our newsletter to get updated with our offers & discount.
            </p>
            <div className="mail">
              <input type="email" placeholder="Please Enter Your Email." />
              <button>
                <AiOutlineSend />
              </button>
            </div>
          </div>
          <div className="product">
            <h3>Product</h3>
            <ul>
              <li>
                <a href="">Web developer component</a>
              </li>
              <li>
                <a href="">.NET developer component</a>
              </li>
              <li>
                <a href="">Enterprise solution</a>
              </li>
            </ul>
          </div>
          <div className="customer">
            <h3>Customer</h3>
            <ul>
              <li>
                <a href="">developer documentation</a>
              </li>
              <li>
                <a href="">developer forum</a>
              </li>
            </ul>
          </div>
          <div className="GrapeCity">
            <h3>GrapeCity</h3>
            <ul>
              <li>
                <a href="">What is Grape City</a>
              </li>
              <li>
                <a href="">employment</a>
              </li>
            </ul>
          </div>
          <div className="touch">
            <h3>Get In Touch</h3>
            <div className="touch-section">
              <div className="icon">
                <IoCallOutline />
              </div>
              <div className="details">
                <div className="detail-name">Phone</div>
                <div className="detail-content">
                  <a href="">1670-0583</a>
                </div>
              </div>
            </div>

            <div className="touch-section">
              <div className="icon">
                <IoAtSharp />
              </div>
              <div className="details">
                <div className="detail-name">Email</div>
                <div className="detail-content">
                  <a href="">sales-kor@grapecity.com</a>
                </div>
              </div>
            </div>

            <div className="touch-section">
              <div className="icon">
                <IoShieldCheckmarkOutline />
              </div>
              <div className="details">
                <div className="detail-name">Policy</div>
                <div className="detail-content">
                  <a href="">license agreement</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copy">
            <p>Copyright © 2023 GrapeCity inc.</p>
          </div>
          <div className="icons">
            <div className="icon">
              <a href="">
                <RiFacebookCircleFill />
              </a>
            </div>

            <div className="icon">
              <a href="">
                <RiYoutubeFill />
              </a>
            </div>

            <div className="icon">
              <a href="">
                <RiKakaoTalkFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
