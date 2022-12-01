'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { StartSteps, TitleText, TypingText } from "../components";
import { newFeatures } from "../constants";
import NewFeatures from './../components/NewFeatures';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex=[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Whats new" />
        <TitleText
          title={
            <>
              What's new about <br /> Metaversus?
            </>
          }
        />
        <div className="mt-[48px] flex flex-wrap flex-row justify-between gap-[24px] ">
          {newFeatures.map((features, index) => (
            <NewFeatures key={index} text={features} />
          ))}
        </div>
      </motion.div>
      <div className={`${styles.flexCenter}`}>
        <img
          src="/whats-new.png"
          alt="get-started"
          className=" w-[90%] h-[90%] object-contained"
        />
      </div>
    </motion.div>
  </section>
);

export default WhatsNew;
