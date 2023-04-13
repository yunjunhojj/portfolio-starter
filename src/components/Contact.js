import React from "react";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container mx-auto flex justify-center items-center flex-col h-[650px]">
        <div className="flex flex-col items-start gap-12">
          <h2 className="font-bold text-[24px] lg:text-[32px]  ">
            궁금하신 사항 있으면, 어떤 사항이라도 연락주세요.
          </h2>
          <div>
            현재 프론트엔트 개발자로 구직 중입니다. <br />
            <br />
            다른 구직 중이신 분들도 좋고, 채용담당자분들도 연락해주시면
            감사하겠습니다. <br />
            <br /> 아래 버튼을 눌러주시면 저의 카카오톡 오픈채팅방으로
            연결됩니다.
          </div>
        </div>
        <div className="btn h-[48px] w-[120px] flex justify-center items-center mt-8 ">
          <a href="https://open.kakao.com/o/sFHGTq2e" target="blank">
            카톡하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
