import styles from "../../../style";
import GetStarted from "../Home/GetStarted";

import { arrowUp } from "../../../assets";
// import GetStarted from "../GetStarted/index";


const Intro = () => {
  return (

    <div >
      <section id="home" className={` flex md:flex-row flex-col ${styles.paddingY}`}>

        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 `}>

          {/* 此为20%显示 */}
          {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <img src={logo} alt="logo" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">20%</span> Discount For{" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </div> */}

          {/* 这是  save your electricity energy 的 文字 */}
          <div className="flex flex-row justify-between items-center w-full z-0">
            <h1 className="z-0 flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ">
              Optimize Your  <br className="sm:block hidden" />{" "}
              <span className="z-0 text-gradient">Energy Usage </span>{" "}
            </h1>
            {/* <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div> */}
          </div>
          <h1 className="z-0 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            and Save the Planet
          </h1>

          {/* 这是描述的文字
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Australian households generate about one fifth of Australia's greenhouse emissions which are causing climate change. Many households also struggle to pay their energy bills.
          <br/><br/>
          We are here to help international students optimize their energy usage so as to reduce their carbon emissions and energy bills. 
          </p> */}
        </div>

        {/* 这是图片 */}
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <div className="ss:flex hidden md:mr-4 mr-0">

            {/* get started 按钮 */}
            <a href={`#stats`}>
            <div  className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
              <div className={`${styles.flexCenter} flex-col bg-darkgreen w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                  <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                    <span className="text-gradient">Get</span>
                  </p>
                  <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
                </div>

                <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                  <span className="text-gradient">Started</span>
                </p>
              </div>
            </div>
            </a>


          </div>

          {/* 这是图中的渐变颜色效果 */}
          {/* gradient start
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          gradient end */}

        </div>

        {/* 
        此为按钮在小屏幕的时候隐藏加下方显示 */}


      </section>

    </div>
  );
};

export default Intro;