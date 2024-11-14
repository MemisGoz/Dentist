"use client"
import React from 'react';
import tooth from '@/public/tooth.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
interface AboutItem {
  title: string;
  description: string;
  icon: JSX.Element;
}

const aboutItemsLeft: AboutItem[] = [
  {
    title: 'Emergency Services',
    description: 'The goal of our clinic is to provide friendly, caring dentistry and the.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#9bd1f3" viewBox="0 0 256 256"><path d="M171,71.42,149.54,80,171,88.57A8,8,0,1,1,165,103.42L128,88.61,91,103.42A8,8,0,1,1,85,88.57L106.46,80,85,71.42A8,8,0,1,1,91,56.57l37,14.81,37-14.81A8,8,0,1,1,171,71.42Zm53,8.33c0,42.72-8,75.4-14.69,95.28-8.73,25.8-20.63,45.49-32.65,54a15.69,15.69,0,0,1-15.95,1.41,16.09,16.09,0,0,1-9.18-13.36C150.68,205.58,146.48,168,128,168s-22.68,37.59-23.53,49.11a16.09,16.09,0,0,1-16,14.9,15.67,15.67,0,0,1-9.13-2.95c-12-8.53-23.92-28.22-32.65-54C40,155.15,32,122.47,32,79.75A56,56,0,0,1,88,24h80A56,56,0,0,1,224,79.75Zm-16,0A40,40,0,0,0,168,40H88A40,40,0,0,0,48,79.76c0,40.55,7.51,71.4,13.85,90.14,11.05,32.66,23,43.37,26.61,46C91.57,174.67,105.59,152,128,152s36.45,22.71,39.49,63.94h0c3.6-2.59,15.57-13.26,26.66-46C200.49,151.16,208,120.31,208,79.76Z"></path></svg>
  },
  {
    title: 'Positive Patient Reviews',
    description: 'The goal of our clinic is to provide friendly, caring dentistry and the.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#9bd1f3" viewBox="0 0 256 256"><path d="M171,71.42,149.54,80,171,88.57A8,8,0,1,1,165,103.42L128,88.61,91,103.42A8,8,0,1,1,85,88.57L106.46,80,85,71.42A8,8,0,1,1,91,56.57l37,14.81,37-14.81A8,8,0,1,1,171,71.42Zm53,8.33c0,42.72-8,75.4-14.69,95.28-8.73,25.8-20.63,45.49-32.65,54a15.69,15.69,0,0,1-15.95,1.41,16.09,16.09,0,0,1-9.18-13.36C150.68,205.58,146.48,168,128,168s-22.68,37.59-23.53,49.11a16.09,16.09,0,0,1-16,14.9,15.67,15.67,0,0,1-9.13-2.95c-12-8.53-23.92-28.22-32.65-54C40,155.15,32,122.47,32,79.75A56,56,0,0,1,88,24h80A56,56,0,0,1,224,79.75Zm-16,0A40,40,0,0,0,168,40H88A40,40,0,0,0,48,79.76c0,40.55,7.51,71.4,13.85,90.14,11.05,32.66,23,43.37,26.61,46C91.57,174.67,105.59,152,128,152s36.45,22.71,39.49,63.94h0c3.6-2.59,15.57-13.26,26.66-46C200.49,151.16,208,120.31,208,79.76Z"></path></svg>
  },
  {
    title: 'Latest Technology',
    description: 'The goal of our clinic is to provide friendly, caring dentistry and the.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#9bd1f3" viewBox="0 0 256 256"><path d="M171,71.42,149.54,80,171,88.57A8,8,0,1,1,165,103.42L128,88.61,91,103.42A8,8,0,1,1,85,88.57L106.46,80,85,71.42A8,8,0,1,1,91,56.57l37,14.81,37-14.81A8,8,0,1,1,171,71.42Zm53,8.33c0,42.72-8,75.4-14.69,95.28-8.73,25.8-20.63,45.49-32.65,54a15.69,15.69,0,0,1-15.95,1.41,16.09,16.09,0,0,1-9.18-13.36C150.68,205.58,146.48,168,128,168s-22.68,37.59-23.53,49.11a16.09,16.09,0,0,1-16,14.9,15.67,15.67,0,0,1-9.13-2.95c-12-8.53-23.92-28.22-32.65-54C40,155.15,32,122.47,32,79.75A56,56,0,0,1,88,24h80A56,56,0,0,1,224,79.75Zm-16,0A40,40,0,0,0,168,40H88A40,40,0,0,0,48,79.76c0,40.55,7.51,71.4,13.85,90.14,11.05,32.66,23,43.37,26.61,46C91.57,174.67,105.59,152,128,152s36.45,22.71,39.49,63.94h0c3.6-2.59,15.57-13.26,26.66-46C200.49,151.16,208,120.31,208,79.76Z"></path></svg>
  },
];

const aboutItemsRight: AboutItem[] = [
  {
    title: 'Experienced Doctor',
    description: 'The goal of our clinic is to provide friendly, caring dentistry and the.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#9bd1f3" viewBox="0 0 256 256"><path d="M171,71.42,149.54,80,171,88.57A8,8,0,1,1,165,103.42L128,88.61,91,103.42A8,8,0,1,1,85,88.57L106.46,80,85,71.42A8,8,0,1,1,91,56.57l37,14.81,37-14.81A8,8,0,1,1,171,71.42Zm53,8.33c0,42.72-8,75.4-14.69,95.28-8.73,25.8-20.63,45.49-32.65,54a15.69,15.69,0,0,1-15.95,1.41,16.09,16.09,0,0,1-9.18-13.36C150.68,205.58,146.48,168,128,168s-22.68,37.59-23.53,49.11a16.09,16.09,0,0,1-16,14.9,15.67,15.67,0,0,1-9.13-2.95c-12-8.53-23.92-28.22-32.65-54C40,155.15,32,122.47,32,79.75A56,56,0,0,1,88,24h80A56,56,0,0,1,224,79.75Zm-16,0A40,40,0,0,0,168,40H88A40,40,0,0,0,48,79.76c0,40.55,7.51,71.4,13.85,90.14,11.05,32.66,23,43.37,26.61,46C91.57,174.67,105.59,152,128,152s36.45,22.71,39.49,63.94h0c3.6-2.59,15.57-13.26,26.66-46C200.49,151.16,208,120.31,208,79.76Z"></path></svg>
  },
  {
    title: 'Personalized Care',
    description: 'The goal of our clinic is to provide friendly, caring dentistry and the.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#9bd1f3" viewBox="0 0 256 256"><path d="M171,71.42,149.54,80,171,88.57A8,8,0,1,1,165,103.42L128,88.61,91,103.42A8,8,0,1,1,85,88.57L106.46,80,85,71.42A8,8,0,1,1,91,56.57l37,14.81,37-14.81A8,8,0,1,1,171,71.42Zm53,8.33c0,42.72-8,75.4-14.69,95.28-8.73,25.8-20.63,45.49-32.65,54a15.69,15.69,0,0,1-15.95,1.41,16.09,16.09,0,0,1-9.18-13.36C150.68,205.58,146.48,168,128,168s-22.68,37.59-23.53,49.11a16.09,16.09,0,0,1-16,14.9,15.67,15.67,0,0,1-9.13-2.95c-12-8.53-23.92-28.22-32.65-54C40,155.15,32,122.47,32,79.75A56,56,0,0,1,88,24h80A56,56,0,0,1,224,79.75Zm-16,0A40,40,0,0,0,168,40H88A40,40,0,0,0,48,79.76c0,40.55,7.51,71.4,13.85,90.14,11.05,32.66,23,43.37,26.61,46C91.57,174.67,105.59,152,128,152s36.45,22.71,39.49,63.94h0c3.6-2.59,15.57-13.26,26.66-46C200.49,151.16,208,120.31,208,79.76Z"></path></svg>
  },
  {
    title: 'Flexible Payment Options',
    description: 'The goal of our clinic is to provide friendly, caring dentistry and the.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#9bd1f3" viewBox="0 0 256 256"><path d="M171,71.42,149.54,80,171,88.57A8,8,0,1,1,165,103.42L128,88.61,91,103.42A8,8,0,1,1,85,88.57L106.46,80,85,71.42A8,8,0,1,1,91,56.57l37,14.81,37-14.81A8,8,0,1,1,171,71.42Zm53,8.33c0,42.72-8,75.4-14.69,95.28-8.73,25.8-20.63,45.49-32.65,54a15.69,15.69,0,0,1-15.95,1.41,16.09,16.09,0,0,1-9.18-13.36C150.68,205.58,146.48,168,128,168s-22.68,37.59-23.53,49.11a16.09,16.09,0,0,1-16,14.9,15.67,15.67,0,0,1-9.13-2.95c-12-8.53-23.92-28.22-32.65-54C40,155.15,32,122.47,32,79.75A56,56,0,0,1,88,24h80A56,56,0,0,1,224,79.75Zm-16,0A40,40,0,0,0,168,40H88A40,40,0,0,0,48,79.76c0,40.55,7.51,71.4,13.85,90.14,11.05,32.66,23,43.37,26.61,46C91.57,174.67,105.59,152,128,152s36.45,22.71,39.49,63.94h0c3.6-2.59,15.57-13.26,26.66-46C200.49,151.16,208,120.31,208,79.76Z"></path></svg>
  },
];

export default function About() {
  return (
    <div className='max-w-7xl mx-auto md:py-28 py-12'>
      <div className='grid grid-cols-3 items-center'>

        {/* Left column items with slide-in from left animation */}
        <div className='flex flex-col gap-14 items-end mr-8'>
          {aboutItemsLeft.map((item, index) => (
            <motion.div
              key={index}
              className='text-end items-center flex gap-4'
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div>
                <h1 className='text-xl font-medium'>{item.title}</h1>
                <p>{item.description}</p>
              </div>
              <div>{item.icon}</div>
            </motion.div>
          ))}
        </div>

        {/* Center image with fade-in animation */}
        <motion.div
          className=''
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image src={tooth} width={500} height={500} alt="tooth" />
        </motion.div>

        {/* Right column items with slide-in from right animation */}
        <div className='flex flex-col gap-14 items-start ml-8'>
          {aboutItemsRight.map((item, index) => (
            <motion.div
              key={index}
              className='flex items-center flex-row-reverse gap-4'
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div>
                <h1 className='text-xl font-medium'>{item.title}</h1>
                <p>{item.description}</p>
              </div>
              <div>{item.icon}</div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
}