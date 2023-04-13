import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const services = [
  {
    title: "Codefolio",
    description: "자신의 포트폴리오를 관리할 수 있도록 만든 사이트 .",
    position: "Auth, 프로젝트 상세페이지, 댓글 CRUD, 무한스크롤 등",
    team: "프론트엔드 5명 + 디자이너 1명",
    stack: "Next.js, styled-components, react-query, recoil",
    gitLink: "https://github.com/yunjunhojj/Codefolio",
    deployLink: "https://codefolio.vercel.app/",
  },
  {
    title: "PetGram",
    description: "펫을 키우는 사람들이 자신의 펫을 공유할 수 있는 사이트 .",
    position: "개인프로젝트로 프로젝트의 모든 부분을 담당했습니다.",
    team: "개인프로젝트",
    stack: "Next.js, styled-components, swr, node.js, express",
    gitLink: "https://github.com/yunjunhojj/pet-sns",
    deployLink: "https://code-folio.vercel.app/",
  },
  {
    title: "tennis-Partner",
    description: "테니스 동호회를 운영할 수 있는 사이트 .",
    position: "디자인부터 프론트엔드 모든 부분을 담당했습니다.",
    team: "프론트엔드 1명 + 벡엔드 2명",
    stack: "React, styled-components, justand",
    gitLink: "https://github.com/TennisPartner/TennisPartner",
    deployLink: "https://codefolio.vercel.app/",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 "
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3  max-w-[455px] mb-16">
              I build things for the web.
            </h3>
            {/* <button className="btn btn-sm"> See my work</button> */}
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const {
                  title,
                  description,
                  team,
                  position,
                  stack,
                  deployLink,
                  gitLink,
                } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[166px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="w-[476px] flex flex-col gap-2">
                      <h4 className="text-[20px] tracking-wider font-primary">
                        Project : {title}
                      </h4>
                      <p className="font-secondary leading-tight  ">
                        설명: {description}
                      </p>
                      <p className="font-secondary leading-tight ">
                        역할: {position}
                      </p>
                      <p className="font-secondary leading-tight hidden lg:flex">
                        팀구성: {team}
                      </p>
                      <p className="font-secondary leading-tight hidden lg:flex">
                        stack: {stack}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 justify-center items-center ">
                      <a
                        href={deployLink}
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href={gitLink} className="text-gradient text-sm">
                        go to github
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
