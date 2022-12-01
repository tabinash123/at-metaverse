'use client';


import styles from './../styles/index';
import { TitleText, TypingText } from './CustomTexts';
import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';
 

const Footer = () => (
  <footer
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient " />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <TitleText title="Enter the Metaverse" />
        <div
          className="p-[2px] items-center w-[246px]
         h-[64px] bg-[#25618B] rounded-[32px] flex 
         gap-[2px]"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-1/3 h-1/3 object-contain"
          />
          <TypingText
            title="Enter Metaverse"
            textStyles="text-[16px] text-[FFFFFF]"
          />
        </div>
      </div>
      <div
        style={{
          borderTop: "2px solid #fff ",
          backgroundColor: "FFFFFF",
          opacity: 0.3,
        }}
      />
      <div className=" flex lg:flex-wrap flex-col justify-between items-center mt-[30px] gap=-[4px]">
        <TypingText title="METAVERSE" textStyles="font-bold text-white" />

        <TypingText
          title="Copyright © 2021 - 2022 Metaversus. All rights reserved to Abinash Tiwari."
          textStyles="text-[14px] sm:mt-[4px]"
        />

        <div className="flex justify-between gap-[25px] sm:mt-[4px]">
          <div className="w-[22px] h-[22px] flex items-center corsor-pointer">
            <img
              src="/twitter.svg"
              alt="social media"
              className="w-[90%] h-[90%] "
            />
          </div>
          <div className="w-[22px] h-[22px] flex items-center">
            <img src="/instagram.svg" alt="social media" />
          </div>
          <div className="w-[22px] h-[22px] flex items-center">
            <img src="/linkedin.svg" alt="social media" />
          </div>
          <div className="w-[22px] h-[22px] flex items-center">
            <img src="/facebook.svg" alt="social media" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
