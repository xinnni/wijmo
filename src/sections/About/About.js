import React, { useEffect } from "react";
import AOS from "aos";
import Title from "../../components/Title/Title";

import "./About.scss";
import Card from "../../components/Card/Card";
import logoimg from "../../assets/skills1.png";
import logoimg2 from "../../assets/skills3.png";
import logoimg3 from "../../assets/skills4.png";
import logoimg4 from "../../assets/skills7.png";
import logoimg5 from "../../assets/skills5.png";
import logoimg6 from "../../assets/skills2.png";

const About = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="about-container" id="services">
      <div className="container">
        <div className="details">
          <div
            className="details-content"
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
          >
            <Title title="OUR services" color="clgreen" />
            <p></p>
            {/* <p>
              Wijmo를 통해 강력한 퍼포먼스를 자랑하는 HTML5/JavaScript 앱을
              구현해보세요.
            </p> */}
          </div>
        </div>
        <div
          className="cards"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-out"
        >
          <Card
            title={"fast and light"}
            title2={"빠르고 가벼운 컴포넌트"}
            logo={logoimg}
            color="riblock"
          />
          <Card
            title={"flexible"}
            title2={"확장 가능한 API"}
            logo={logoimg2}
            color="riblock"
          />
          <Card
            title={"support"}
            title2={"React  Vue  Angular"}
            logo={logoimg3}
            color="riblock"
          />
          <Card
            title={"security"}
            title2={"최고의 보안 수준"}
            logo={logoimg4}
            color="riblock"
          />
          <Card
            title={"accessibility"}
            title2={"터치 우선의 UI"}
            logo={logoimg5}
            color="riblock"
          />
          <Card
            title={"IntelliSense"}
            title2={"True JS component"}
            logo={logoimg6}
            color="riblock"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
