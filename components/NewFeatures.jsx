import styles from "./../styles/index";
import { TitleText, TypingText } from './CustomTexts';

const NewFeatures = ({ text }) => (
  <div className={`flex-1 flex ms:mx-w-[250px] mini-w-[210px] flex-col`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <img src={text.imgUrl} alt="imgUrl" className="w-1/2 h-1/2" />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white " > {text.title} </h1>      
    <p className=" flex-1 flex-wrap mt-[16px] font-normal text-[18px] text-[#b0b0b0] 
    leading-[32px]" >{text.subtitle}</p>
  </div>
);

export default NewFeatures;
