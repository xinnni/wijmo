import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../../components/Title/Title";
import whyimg from "../../assets/DrawKit Vector Illustration Project Manager (6).png";
import "./Why.scss";

const Why = () => {
  useEffect(() => {
    AOS.init({});
  });

  return (
    <div className="why-container" id="about">
      <div className="container">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="bottom-bottom"
          className="why-top"
        >
          <Title title="ABOUT ME" lineCenter={true} color="clblock" />
          <div className="why-subtitle">
            <p className="p1">
              최신 Front-End 개발 기술을 모두 반영한 유일하고 완벽한 JavaScript
              컨트롤 Wijmo
            </p>
            <p className="p2">
              웹부터 모바일에 이르기까지 성능에 타협하지 않는 완벽한 웹 솔루션을
              개발할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
      <div className="contents">
        <div className="">
          <div
            className="why-image"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-center"
          >
            <img src={whyimg}></img>
          </div>
        </div>
        {/* <div className="why-reasons">
          <ul>
            <li>빠르고 가벼운 JavaScript 컴포넌트</li>
            <li>유연하고 확장 가능한 API</li>
            <li>최고의 프레임워크 지원</li>
            <li>보안 수준</li>
            <li>친숙하고 접근성이 뛰어난 터치 우선 UI</li>
            <li>True JavaScript 컴포넌트</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Why;
