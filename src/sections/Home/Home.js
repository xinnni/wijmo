import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.scss";
import mainimg from "../../assets/DrawKit Vector Illustration Project Manager (7).png";
// import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="main-container" id="home">
      <Navbar />
      <div className="container">
        <div className="content">
          <div
            className="place"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-offset="300"
          >
            <h2>HI, I'M</h2>
            <h1 data-shadow="WIJMO">WIJMO</h1>
            <p>Experience powerful UI controls.</p>
            {/* <div className="button-container">
              <Button content={"WITH ME!"} />
            </div> */}
          </div>
        </div>
        <div
          className="image"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-offset="300"
        >
          <img src={mainimg}></img>
          {/* <Mainimg width="55rem" height="55rem" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
