'use client';
import styles from './../styles/index';
import { TitleText } from './CustomTexts';


const InsightCard = ({ context }) => (
  <div className="flex flex-row mb-[30px]">
    <div className="w-[270px] h-[250px]  ">
      <img
        src={context.imgUrl}
        alt="context.title"
        className="w-full h-full rounded-[32px]"
      />
    </div>
    <div className='mt-[24px] ml-[62px] flex-1 ' >
      <h1 className=" font-normal  text-[24px] leading-[30px] text-white ">
        {" "}
        {context.title}{" "}
      </h1>
      <p
        className=" flex-1 flex-wrap mt-[16px] font-normal text-[18px] text-[#b0b0b0] 
    leading-[32px]"
      >
        {context.subtitle}
      </p>
    </div>
    <div className='lg:flex hidden justify-center items-center w-[70px] h-[70px] rounded-full border-[2px] border-white'>
      <img src='/arrow.svg' alt='arrow' className=' w-[40%] h-[40%] object-contain' />
    </div>
  </div>
);

export default InsightCard;
