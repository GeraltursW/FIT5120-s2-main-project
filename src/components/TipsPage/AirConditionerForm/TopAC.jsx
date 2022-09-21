import React from 'react'
import { top10ac } from '../../../constants/props';
import styles, {layout} from "../../../style";

const TopAC = () => {

    const ApplianceCard = ({model,brand, image,star, coolenergy,heatenergy }) => {
        return (
          <div 
          className={`flex  flex-row  p-6 m-6 rounded-[20px] appliances-card bg-white`}>
            <div className={`w-[200px] h-[400px] rounded-full ${styles.flexCenter} `}>
              <img src={image} alt="appliance" className=" object-contain" />
            </div>
            {/* 加标题 */}
            <div className=" w-[200px] flex-1 flex flex-col ml-3">
              <h4 className="text-darkpurple mt-[60px] font-poppins font-semibold  text-[18px] leading-[23.4px] mb-1">
                Model: {model}
              </h4>
              <h4 className="mt-[20px] font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
                Brand: {brand}
              </h4>
              <h4 className=" mt-[20px] font-poppins font-semibold text-darkyellow text-[18px] leading-[23.4px] mb-1">
                Star: {star}
              </h4>
              <h4 className=" mt-[20px] font-poppins font-semibold text-blue-800 text-[18px] leading-[23.4px] mb-1">
                Cool Energy consumption: {coolenergy}
              </h4>
              <h4 className=" mt-[20px] font-poppins font-semibold text-red-800 text-[18px] leading-[23.4px] mb-1">
              Heat Energy consumption:: {heatenergy}
              </h4>
            </div>

          </div>
        )
      }


  return (
    <div className='flex justify-center items-center'>

    <div className='p-[100px] mt-[880px] w-[1000px] bg-primary h-[600px] fixed bg- z-50 flex justify-center '>
        <h1 className='text-green-200 text-xl '> Top 5 Energy Air Conditioner </h1>
      <div className='w-[700px] h-[600px] fixed flex  items-center flex-col overflow-auto' >
        {/* 题目 */}
        
        <div className='flex flex-col '>
        {top10ac.map((ac, index) => {
                        return (
                          <div key={ac.id} className='mt-[50px]' >
                                  <ApplianceCard   {...ac} index={index}>
                                  </ApplianceCard>         
                          </div>)})}
        </div>

      </div>

    </div>

  </div>

  )
}

export default TopAC