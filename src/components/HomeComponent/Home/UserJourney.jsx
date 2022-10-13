import React from 'react'
import {UserJourneyImg} from "../../../assets"
import {CO2CalTool, EnergyTipTool, EnergyProTool, CarbonOffTool} from "../Home/Tooltip"

const UserJourney = () => {
  return (
    <div className='h-[850px] '>
      
      <a href={`/calculator`}>
      <div className={`ml-[72px] mt-[580px] bg-green-900 absolute  hover:bg-primary flex flex-row cursor-pointer  rounded-[20px] `}>
      
        <div className=" flex-1 z-40 justify-center items-center flex flex-col">
          {/* <h4 className=" font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
            CO2 Calculator 
          </h4>  */}
          <CO2CalTool/>
        </div> 
        
      </div>
      
      </a>

      

      <a href={`/tips`}>
      <div className={`ml-[280px] mt-[120px] bg-green-900 absolute  hover:bg-primary flex flex-row cursor-pointer  rounded-[20px] `}>
       {/* 加图标 */}
      {/* <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} `}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div> */}
      {/* 加标题 */}
        <div className=" flex-1 z-40 justify-center items-center flex flex-col">
         <EnergyTipTool/>

          {/* 加文字描述 */}
          {/* <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
            {content}
          </p> */}
        </div>   
      </div>
      </a>

      <a href={`/energysupplier`}>
      <div className={`ml-[610px] mt-[570px] bg-green-900 absolute  hover:bg-primary flex flex-row cursor-pointer  rounded-[20px] `}>
       {/* 加图标 */}
      {/* <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} `}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div> */}
      {/* 加标题 */}
        <div className=" flex-1 z-40 justify-center items-center flex flex-col">
          <EnergyProTool/>
          {/* 加文字描述 */}
          {/* <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
            {content}
          </p> */}
        </div>   
      </div>
      </a>

      <a href={`/carbonoffset`}>
      <div className={`ml-[1100px] mt-[250px] bg-green-900 absolute   hover:bg-primary flex flex-row cursor-pointer  rounded-[20px] `}>
       {/* 加图标 */}
      {/* <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} `}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div> */}
      {/* 加标题 */}
        <div className=" flex-1 z-40 justify-center items-center flex flex-col">
          <CarbonOffTool/>

          {/* 加文字描述 */}
          {/* <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
            {content}
          </p> */}
        </div>   
      </div>
      </a>



    
    <img className='z-0 pl-[70px] w-[1500px] ' src={UserJourneyImg}/>
    <p className='flex justify-center pt-[60px] font-poppins font-semibold text-white text-[40px] leading-[23.4px] m'> How can we help you ?</p>
    </div>
  )
}

export default UserJourney