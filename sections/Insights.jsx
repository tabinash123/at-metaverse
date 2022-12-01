'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer,  } from "../utils/motion";
import { TitleText, TypingText,InsightCard } from "../components";
import { insights } from "../constants";


const Insights = () => (
<section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col mb-[50px] `}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText
        title={
          <>
            Insight about metaverse
          </>
        }
        textStyles="text-center"
      />
    
    </motion.div>
    {insights.map((context, index) => (
      <InsightCard key={index} context={context} />
    ))}
  </section>
);

export default Insights;
