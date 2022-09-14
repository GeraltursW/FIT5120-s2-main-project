import styles, {layout} from "../../../style";
import React, { useState } from "react";

import IntroTips from '../IntroTips'
import { appliances } from '../../../constants/props';
import AirConditionerForm from '../AirConditionerForm';
import TvForm from '../TvForm';
import RefrigeratorForm from '../RefrigeratorForm';



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
    <div className="bg-primary w-full overflow-hidden">
      <div>{formswtich()}</div>
      
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-darkgreen`}>
        <div className={`${styles.boxWidth}`}>
            <IntroTips/>
        </div>  
      </div>

      
      
      <div className={` ${styles.flexCenter} bg-lightgreen `}>
        <div className={`${styles.boxWidth} overflow-x-auto`}>
          <div className={`${styles.paddingY} flex flex-col md:flex-row `}>
            <div className={`${layout.sectionImg} flex-row `}>
            {appliances.map((appliance, index) => {
                    return (
                    <div  key={appliance.id} onClick={()=>{ setFormOpen(appliance.title)}} >
                              <ApplianceCard   {...appliance} index={index}>
                              </ApplianceCard>

                            
                    </div>
                      )     
                    })}
            </div>
          </div>
        </div>  
      </div>    



    </div>
 );
};

export default Tips;