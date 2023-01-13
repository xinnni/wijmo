import React from "react";
import Button from "../../components/Button/Button";
import Testimonial from "../../components/Testimonial/Testimonial";
import Title from "../../components/Title/Title";
import notebook from "../../assets/DrawKit Vector Illustration Project Manager (17).png";
import "./Testers.scss";

export const Testers = () => {
  return (
    <div className="testers-container" id="testimonial">
      <div className="container">
        <div
          className="title-container"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
        >
          <Title title="Testimonials" lineCenter={true} color="clblock" />
          <p>See What our clients are saying about us!</p>
        </div>
        <div className="testimonails" data-aos="fade-left">
          <Testimonial
            content={
              "Wijmo의 유연한 확장성 덕분에, Microsoft Dynamics 팀은 최신 제품에 쉽고 빠르게 Wijmo의 컨트롤들을 적용할 수 있었습니다."
            }
            name={"Param Kahlon"}
            rank={"Microsoft Dynamics CRM 엔지니어링 총괄부장"}
          />

          <Testimonial
            content={
              "HTML5과 JQuery 기반으로 만들어진 Wijmo 제품은 다양한 시각화 컨트롤을 필요로 하는 웹 개발자에게 꼭 필요한 제품이라고 생각합니다. 특별한 코딩 없이도 서버에 있는 데이터를 바인딩하는 것으로 차트나 그리드와 같은 다양한 방법으로 표현할 수 있습니다. Script 단에서 시각화 컨트롤로써는 최고인 것 같습니다."
            }
            name={"Lee"}
            rank={"에이스게이트"}
          />

          <Testimonial
            content={
              "우리팀은 Wijmo의 멋진 UI, 탁월한 설계, 개발문서, 그리고 변하지 않는 지속적인 노력에 감명받아 Wijmo를 사용하고 있습니다."
            }
            name={"BJ Jeong"}
            rank={"Cisco"}
          />
        </div>
      </div>
      <div className="free-container">
        <div className="title-container" data-aos="fade-up-right">
          <Title title="Free Download" color="clblock" />
          <p>Try the trial version!</p>
          <Button content={"Download"} />
        </div>
        <div className="free-image" data-aos="fade-up-left">
          <img src={notebook}></img>
        </div>
      </div>
    </div>
  );
};
