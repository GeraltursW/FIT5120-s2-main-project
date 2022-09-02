import React from 'react'
import DemoLines from '../Linechart'
import DemoMix from '../Associatedchart'
import styles from '../../style'
import IntroTips from '../IntroTips'
import {close, logo, menu} from '../../assets'

const Tips = () => 
 (
    <div className="bg-primary w-full overflow-hidden">

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-darkgreen`}>
        <div className={`${styles.boxWidth}`}>
            <IntroTips/>
        </div>  
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-lightgreen `}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.paddingY} flex flex-col md:flex-row `}>
              {/* 图1 */}
              <div className='h-[600px] w-[800px] '>
              <DemoMix/>
              
              </div>

              <div className={`h-[400px] w-[600px] py-10 flex flex-col`}>
                <h1 className='font-poppins font-semibold text-right text-white text-[25px] leading-[23.4px] mb-1'>Air conditioner</h1> 
                <p className='font-poppins font-semibold text-right pt-10 text-dimWhite text-[18px] leading-[23.4px] mb-1'> 1. Setting the temperature at 26℃ is the best when using air conditioning at home.<br/><br/><br/><br/>
2. Frequent switching of air conditioning is the operation that consumes energy. Can use the timing and sleep function, reduce the number of electrical restart. </p>
              </div>
              
          </div>
        </div>  
      </div>


      <div className={`${styles.paddingX} ${styles.flexCenter} bg-yellowgreen `}>
        <div className={`${styles.boxWidth}`}>

          <div className={`${styles.paddingY} flex flex-col md:flex-row-reverse `}>
              {/* 图1 */}
              <div className='h-[600px] w-[800px] '>
              <DemoLines/>
              </div>

              <div className={`h-[400px] w-[600px] py-10 flex flex-col`}>
                <h1 className='font-poppins font-semibold text-left text-white text-[25px] leading-[23.4px] mb-1'>Refrigerator</h1> 
                <p className='font-poppins font-semibold text-left pt-10 text-dimWhite text-[18px] leading-[23.4px] mb-1'> 
                1. The thick frost in the refrigerator not only affects the refrigeration effect, but also makes the refrigerator consume more electricity. Regular defrosting is a great way to save electricity.<br/><br/><br/><br/>
                2. It is recommended that you only fill your fridge with 80 percent of your food, leaving about 1 centimeter of space between each item.<br/><br/><br/><br/>
                3. Don't leave the fridge door open too often or for too long, as it takes a lot of electricity energy.</p>
              </div>
              
          </div>

        </div>  
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-lightgreen `}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.paddingY} flex flex-col md:flex-row `}>
              {/* 图1 */}
              <div className='h-[600px] w-[800px] '>
              <DemoMix/>
              
              </div>

              <div className={`h-[400px] w-[600px] py-10 flex flex-col`}>
                <h1 className='font-poppins font-semibold text-right text-white text-[25px] leading-[23.4px] mb-1'>TV</h1> 
                <p className='font-poppins font-semibold text-right pt-10 text-dimWhite text-[18px] leading-[23.4px] mb-1'> 
                1. The higher volume of the TV and the higher of screen brightness, the greater natural power consumption; the appropriate volume and brightness, not only can protect the ears and eyes, but also can save energy.<br/><br/><br/><br/>
                2. Unplug when not in use. After some TVs are turned off, the whole machine is still in the state of waiting for use. Therefore, it is best to unplug the power supply after the shutdown, which is not only save electricity but also very safe.
                </p>
              </div>
              
          </div>
        </div>  
      </div>


      

      

      
    </div>
  )


export default Tips