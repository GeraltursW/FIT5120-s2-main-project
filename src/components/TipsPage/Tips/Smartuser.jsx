
import styles from "../../../style";
import Iframe from 'react-iframe'
import {smartuser} from "../../../constants/props";
import React, { useState } from "react";

const SmartUserCard = ({ title, src }) => (
  <div  className={`hover:bg-sky-700 bg-green-900 w-[400px] flex flex-row cursor-pointer p-5 rounded-[20px] `}>
     {/* 加图标 */}
   
    {/* 加标题 */}
    <div className="flex-1 flex flex-col justify-center items-center">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] ">
        {title}
      </h4>

    </div>
  </div>
);



const Smartuser = () => {
  const [formSrc, setFormSrc] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.224910818931!2d145.13561341590645!3d-37.901805346860485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4e776a2d61%3A0xe10cc853204934dd!2sSmart%20User!5e0!3m2!1sen!2sau!4v1665190386352!5m2!1sen!2sau");

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}  `}>
        <div className={`${styles.boxWidth}`}>

        <p className='font-poppins font-semibold text-left pt-10 text-dimWhite text-[50px] leading-[23.4px] mb-1'> Smart user</p>
        <p className='font-poppins font-semibold text-left pt-10 text-dimWhite text-[20px] leading-[23.4px] mb-1'> Description Description Description Description Description  Description Description Description Description Description  Description Description Description Description Description  Description Description Description Description Description  Description Description Description Description Description  Description Description Description Description Description  Description Description Description Description Description</p>

          <div className={`flex flex-col sm:pt-[300px] md:flex-row-reverse md:pt-10 h-[700px] justify-center items-center`}>
              {/* 图1 */}
              <div className=' pl-10'>
              <Iframe src={formSrc} width="700" height="550" style="border:0;" loading="lazy" referrerPolicy="no-referrer-when-downgrade">

              </Iframe>
              </div>

              <div className={`h-[400px] w-[600px] flex flex-col items-center`}>
                
                {smartuser.map((smartuser, index) => {
                return (
                <div onClick={()=>{setFormSrc(smartuser.src);}}  className='pt-5'  key={smartuser.id}>
                   {/* 点击卡片跳转页面 */}
                   <SmartUserCard  {...smartuser} index={index}>
                          {/* <Link to="/">Home</Link> |{" "} */}
                          </SmartUserCard>
                </div>
                 
              
                  )
                
                })}
              <a href="https://smartuser.com.au/store-location/" className='font-poppins font-semibold text-left pt-10 text-red-200 text-[20px] leading-[23.4px] mb-1'> Click me to find more location</a>  
              </div>
              
          </div>


        </div>  
      </div>  
  )
}

export default Smartuser