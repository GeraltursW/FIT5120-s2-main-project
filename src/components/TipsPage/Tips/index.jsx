import styles, {layout} from "../../../style";
import React, { useState } from "react";

import IntroTips from '../IntroTips'
import { appliances } from '../../../constants/props';
import AirConditionerForm from '../AirConditionerForm';
import TvForm from '../TvForm';
import RefrigeratorForm from '../RefrigeratorForm';
import './card.css'
import EnergyCompany from "./EnergyCompany";


const ApplianceCard = ({title, image, content, questionnaire}) => {
  return (
    <div 
    className={`flex  flex-col cursor-pointer p-6 m-6 rounded-[20px] appliances-card bg-darkgreen hover:bg-primary`}>
      <div className={`w-[400px] h-[400px] rounded-full ${styles.flexCenter} `}>
        <img src={image} alt="appliance" className=" object-contain" />
      </div>
      {/* 加标题 */}
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>

        {/* 加文字描述 */}
        <p className="font-poppins font-normal text-white text-[16px] leading-[24px] py-10">
          {content}
        </p>

        <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Click me</button>
      </div>
    </div>
  )
}

const Tips = () => {
  const [formOpen, setFormOpen] = useState();
  const formswtich = () =>{
    switch(formOpen) {
      case "Air Conditioner":   return <AirConditionerForm setFormModal={setFormOpen}/> ; 
      case "Tv":  return  <TvForm setFormModal={setFormOpen} />;
      case "Refrigerator": return <RefrigeratorForm setFormModal={setFormOpen}/>;
    }
  }

  return (
    <div className="bg-primary w-full overflow-hidde">
      <div>{formswtich()}</div>
      
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-darkgreen`}>
        <div className={`${styles.boxWidth}`}>
            <IntroTips/>
        </div>  
      </div>

      
      
      <div className={` ${styles.flexCenter} ${styles.paddingX}  bg-lightgreen `}>
        <div className={`${styles.boxWidth} `}>
          
            <div className={`  ${styles.paddingY} flex-row ` }>

             <div className="slider">
                <div className="slide-track">
                 
                  {appliances.map((appliance, index) => {
                        return (
                          <div key={appliance.id} onClick={()=>{ setFormOpen(appliance.title)}} >
                                  <ApplianceCard   {...appliance} index={index}>
                                  </ApplianceCard>         
                          </div>)})}

                  </div>      
              </div>
            </div>
          
        </div>  
        
      </div>    
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-darkgreen`}>
        <div className={`${styles.boxWidth}`}>
            <EnergyCompany/>
        </div>  
      </div>



    </div>
 );
};

export default Tips;