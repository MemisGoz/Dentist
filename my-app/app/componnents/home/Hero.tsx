"use client";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./style.css";

export default function Hero() {
  // Define the type for container ref
  const container = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <div ref={container} className="h-screen overflow-hidden bg-gray-800 bg-opacity-70">
      <motion.div style={{ y }} className="relative h-full ">
        <div className='absolute h-screen w-screen bg-[#0E384C] opacity-70 z-10' />
        <Image
          src="https://demo.awaikenthemes.com/html-preview/dentaire/images/hero-bg.jpg"
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
}
