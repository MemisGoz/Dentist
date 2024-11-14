'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface FeatureSectionProps {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  features: string[];
}

const Feature1: React.FC<FeatureSectionProps> = ({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
  features,
}) => {
  return (
    <section className="md:py-28 py-12 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Animated Image */}
          <motion.img
            src={imageSrc}
            alt="placeholder"
            className="max-h-96 w-full rounded-lg object-cover md:max-h-[500px] md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          />

          {/* Animated Text Block */}
          <motion.div
            className="lg:p-10"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-balance text-3xl font-medium md:text-5xl text-slate-900">
              {title}
            </h2>
            <p className="mt-1 text-muted-foreground md:mt-6 text-slate-800">
              {description}
            </p>

            <div className="flex items-center mt-[30px]">
            <Link 
            href={linkHref}
            className="flex justify-center text-slate-700 gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
          >
           {linkText}
            <svg
              className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
          </Link>
            </div>

            <ul className="mt-10 flex-wrap items-center gap-6 space-y-6 md:flex md:space-y-0 text-black">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="black"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
