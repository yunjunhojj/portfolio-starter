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
          className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
        ></motion.div>
        {/* text */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          animate={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1"
        >
          <h2 className="h2 text-accent">About me.</h2>
          <h3 className="h3 mb-4"> asdffdfasdfasdfasd</h3>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quidem quas quos nemo. Quisquam, quae. Quisquam, quae.
          </p>
          {/* stats */}
          <div className="flex gap-x-6 lg:gap-x-10 mb-12">
            <div>
              <div className="text-[40px] font-tertiary text-gradient">
                {inView ? <CountUp start={0} end={13} duration={3} /> : null}
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                YEARS OF <br />
                EXPERIENCE
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
