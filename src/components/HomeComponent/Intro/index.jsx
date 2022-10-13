import styles from "../../../style";
import {ArrowDown} from "../../../assets";

// import GetStarted from "../GetStarted/index";


const Intro = () => {
  return (
<div>
    <div className='flex flex-row' >
      <section id="home" className={`flex-1 flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 `}>
          <div className="flex flex-row justify-between items-center w-full z-0">
            <h1 className="z-0 flex-1 font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ">
              Become a<br className="sm:block hidden" />{" "}
              <span className="z-0 text-gradient">carbon neutral </span>{" "}
            </h1>
          </div>
          <h1 className="z-0 font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            citizen today
          </h1>
        </div>
      </section>

      <section className='flex-1 z-0 ml-[250px]'>
      <p className=' font-poppins font-semibold text-white text-[25px]  mb-1 tracking-wide'>Australia has one of the highest annual emissions per person. <span className="text-gradient"> International students</span> make up almost 30% of Australia's society. Your individual contribution matters in helping us reduce climate change. In turn, we are here to help you become a carbon neutral citizen through our website.</p>
      </section>


    </div>
    <a href={`#journey`}  >
        <div className=" mt-[150px] flex items-center justify-center cursor-pointer">
          <img src={ArrowDown} className='z-10' />
        </div>
      </a>
    </div>
  );
};

export default Intro;