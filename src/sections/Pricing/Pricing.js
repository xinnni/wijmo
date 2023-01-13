import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Pricing.scss";
import Title from "../../components/Title/Title";
import Buy from "../../components/Buy/Buy";
import buy1 from "../../assets/Buy1.png";
import buy2 from "../../assets/Buy2.png";
import buy3 from "../../assets/Buy3.png";

const Pricing = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="pricing-container" id="pricing">
      <div className="pricing__container">
        <div
          className="title-container"
          data-aos="zoom-out-up"
          data-aos-easing="ease-in-out"
        >
          <Title title={"pricing"} lineCenter={true} color="clblock" />
          <p className="p-1">
            Wijmo UI 컨트롤을 활용하여 JavaScript 기반 웹 솔루션을 만들고자
            하시는 경우,
          </p>
          <p className="p-2">
            개발자 라이선스와 배포 라이선스를 모두 구매하셔야 합니다.
          </p>
        </div>
        <div className="pricings" data-aos="fade-up">
          <div className="pricings1">
            <Buy
              image={buy1}
              money={"₩1,494,000"}
              content={"buy now"}
              title={"개발자 라이선스"}
              subTitle={
                "Wijmo 정식 자바스크립트 라이브러리를 사용하기 위해 필요한 라이선스입니다."
              }
            />
          </div>
          <div className="pricings2">
            <Buy
              image={buy2}
              money={"₩800,000"}
              content={"buy now"}
              title={"배포 라이선스"}
              subTitle={
                "최종적으로 서비스하는 도메인 주소 또는 IP 주소 각각에 대해서 구매가 필요합니다."
              }
            />
          </div>
          <div className="pricings3">
            <Buy
              image={buy3}
              title={"FAQ"}
              content={"ask more"}
              money={"문의할 것이 생겼나요?"}
              subTitle={
                "샘플 실행 방법이나 라이선싱 등록 방법에 대해 설명 드리겠습니다."
              }
            />
          </div>
        </div>

        {/* <div className="button-container">
          <Button content={"Buy it"} />
        </div> */}
      </div>
    </div>
  );
};

export default Pricing;
