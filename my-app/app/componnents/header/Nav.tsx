"use client";
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Contact us', href: '/Contact' }
];

export default function Nav() {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        setIsHidden(true); // Hide on scroll down
        setIsScrollingUp(false);
      } else {
        setIsHidden(false); // Show on scroll up
        setIsScrollingUp(true);
      }
      lastYRef.current = y;
    }

    // Check if we are at the very top
    if (y <= 0) {
      setIsScrollingUp(false); // Set background to transparent at the top
      
    }
  });
  
  return (
    <motion.div
      className="w-full py-8 fixed z-50 "
      style={{
        backgroundColor: isScrollingUp ? 'rgba(228, 228, 228, 1)' : 'rgba(228, 228, 228, 1))', // Black when scrolling up, transparent at the top
      }}
      animate={isHidden ? "hidden" : "visible"}
      variants={{
        hidden: { y: "-100%" },
        visible: { y: "0%" },
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="max-w-[100rem] mx-auto text-blue-700 font-semibold">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl">World Dentist</h1>
          </div>
          <div className="flex gap-12">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <span className="text-xl">{link.name}</span>
              </Link>
            ))}
          </div>
          <div className="flex gap-4">
            <Link
              href={"/booking"}
              className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                <div className="relative z-10 flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    Book Appointment
                  </span>
                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </span>
            </Link>
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-10 block px-6 py-3 rounded-xl bg-green-900">
                <div className="relative z-10 flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    +45 99 99 99 99
                  </span>
                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
