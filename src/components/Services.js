import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const services = [
  {
    title: "Codefolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate, quod, quia, voluptates quae voluptatibus quibusdam voluptatum quidem quas quos nemo. Quisquam, quae. Quisquam, quae.",
    link: "Learn more",
  },
  {
    title: "PetGram",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate, quod, quia, voluptates quae voluptatibus quibusdam voluptatum quidem quas quos nemo. Quisquam, quae. Quisquam, quae.",
    link: "Learn more",
  },
  {
    title: "tennis-Partner",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate, quod, quia, voluptates quae voluptatibus quibusdam voluptatum quidem quas quos nemo. Quisquam, quae. Quisquam, quae.",
    link: "Learn more",
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
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 "
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3  max-w-[455px] mb-16">
              I build things for the web.
            </h3>
            <button className="btn btn-sm"> See my work</button>
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
                const { title, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary">
                        Project name : {title}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}{" "}
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
