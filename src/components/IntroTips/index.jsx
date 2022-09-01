import styles from "../../style";
import { Earth } from "../../assets";

// import GetStarted from "../GetStarted/index";


const IntroTips = () => {
  return (
    <div>  
      <section id="home" className={` flex md:flex-row flex-col ${styles.paddingY}`}>
        
        {/* 此为左边显示文字 */}
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 `}>
          <div className="flex flex-row justify-between items-center w-full z-0">
            <h1 className="z-0 flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ">
              Save  <br className="sm:block hidden" />{" "}
              <span className="z-0 text-gradient">Electricity Energy</span>{" "}
            </h1>
            {/* <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div> */}
          </div>
          <h1 className="z-0 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          usage Tips
          </h1>
        </div>


        {/* 此为右边显示图片 */}
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={Earth} alt="logo" className="w-[50%] h-[100%] relative z-[5]" />
          {/* 这是图中的渐变颜色效果 */}
          {/* gradient start */}
          {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
          {/* gradient end */}
        </div>

        
      </section>
    
    </div>
  );
};

export default IntroTips;