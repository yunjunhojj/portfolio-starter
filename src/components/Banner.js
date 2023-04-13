import React from "react";

import Image from "../assets/junho_pic1.jpg";

import { FaBlog, FaGithub } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center justify-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:item-center lg:gap-x-12">
          {/*text */}
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              junho <span>yun</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] mt-4  flex flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-4"
            >
              <span className="text-white mr-4 text-[24px] lg:text-[60px]">
                I am a
              </span>
              <TypeAnimation
                sequence={["Developer", 2000, "Frontend", 2000, "Korean", 2000]}
                speed={50}
                className="text-accent text-[24px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 gap-6 flex flex-col text-[16px] lg:text-[20px]"
            >
              <span>이 페이지는 저를 소개하는 웹사이트 입니다.</span>
              <span>편한 마음으로 구경해주세요.</span>
              <span>사용된 기술스택은 다음과 같습니다.</span>
              <span>
                React, Framer Motion, Tailwind CSS, React Type Animation
              </span>
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a
                href="https://amethyst-sodalite-bbf.notion.site/98090a2692e64e9ab55266ca6aa4befc"
                className="text-gradient text-2xl btn-link"
              >
                노션 이력서 보러가기
              </a>
              <a href="https://github.com/yunjunhojj">
                <FaGithub />
              </a>
              <a href="https://velog.io/@yunjunhojj">
                <FaBlog />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] max-h-[500px] lg:max-w-[382px] lg:max-h-[440px] overflow-hidden  rounded-full  "
          >
            <img src={Image} alt="avatar"></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
