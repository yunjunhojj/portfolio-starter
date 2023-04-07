import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
        {/* img */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          animate={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 bg-about bg-contain bg-no-repeat lg:h-[520px] h-[640px] mix-blend-lighten bg-top"
        ></motion.div>
        {/* text */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          animate={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1"
        >
          <h2 className="h2 px-4  text-accent">About me.</h2>
          <h3 className="h3 px-4 mb-4"> 안녕하세요 윤준호 입니다. </h3>
          <p className="mb-6 px-4 text-s">
            저는 안테나 연구원으로 3년간 일하고, 현재는 프론트엔드 개발자를
            준비하고 있습니다. Next.js 와 React를 사용하여 웹사이트를 만들고
            있습니다.
          </p>
          <p className="mb-6 px-4 text-s">
            지속적인 성장을 위해, 매일 새로운 것을 배우고, 새로운 기술을
            적용하기 위해 노력하고 있습니다. 이를 위해 지속적으로 블로그 글을
            작성하고 있습니다.
          </p>
          <p className="mb-20 px-4 text-s">
            앞으로는, 다른 사람에게 잘 기술과 경험을 전달할 수 있는 개발자가
            되고 싶습니다.
          </p>
          {/* stats */}
          <div className="flex gap-x-6 lg:gap-x-10 mb-12">
            <div>
              <div className="text-[40px] font-tertiary text-gradient"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
