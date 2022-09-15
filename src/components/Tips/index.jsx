import React from 'react'
import DemoLines from '../Linechart'
import DemoMix from '../Associatedchart'
import styles from '../../style'
import IntroTips from '../IntroTips'
import {Tv,Airconditionar,Refrigerator} from '../../assets'

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
              <img src={Airconditionar} alt="hoobank" className=" "/>
              
              </div>

              <div className={`h-[400px] w-[600px] py-10 flex flex-col`}>
                <h1 className='font-poppins font-semibold text-right text-white text-[25px] leading-[23.4px] mb-1'>Air conditioner</h1> 
                <p className='font-poppins font-semibold text-right pt-10 text-dimWhite text-[18px] leading-[23.4px] mb-1'>
                Set the temperature at <span className='text-red-300'>26C</span> for cooling in <span className='text-red-300'>summer</span> and <span className='text-red-300'>20C</span> for heating in <span className='text-red-300'>winter</span> to minimise energy usage. Setting the temperature closer to the ambient temperature will reduce your energy usage significantly. A small change of <span className='text-red-300'>one degree</span>can save you around <span className='text-red-300'>10%</span>from your cooling/heating costs.<br/><br/><br/><br/>
                Avoid <span className='text-red-300'>turning on</span> and <span className='text-red-300'>off</span> your air conditioning when at home. <span className='text-red-300'>Freguent switching</span>not only causes a <span className='text-red-300'>higher energy bill</span> but also may add <span className='text-red-300'>extra strain</span> on your unit.</p>
              </div>
              
          </div>
        </div>  
      </div>


      <div className={`${styles.paddingX} ${styles.flexCenter} bg-darkgreen `}>
        <div className={`${styles.boxWidth}`}>

          <div className={`${styles.paddingY} flex flex-col md:flex-row-reverse `}>
              {/* 图1 */}
              <div className='h-[600px] w-[800px] '>
              <img src={Refrigerator} alt="hoobank" className=" "/>
              </div>

              <div className={`h-[400px] w-[600px] py-10 flex flex-col`}>
                <h1 className='font-poppins font-semibold text-left text-white text-[25px] leading-[23.4px] mb-1'>Refrigerator</h1> 
                <p className='font-poppins font-semibold text-left pt-10 text-dimWhite text-[18px] leading-[23.4px] mb-1'> 
<br/><br/>
	Keep your <span className='text-red-400'>fridge door closed</span>  to maintain its temperature and reduce cooling costs. <br/><br/><br/>
	<span className='text-red-400'>Fill up</span> your fridge without<span className='text-red-400'>overfilling</span>. This prevents warm air from entering when you open the door. You can cover <span className='text-red-400'>big empty spaces</span> with <span className='text-red-400'>containers of water.</span> <br/><br/><br/>
	Set <span className='text-red-400'>fridge</span> to <span className='text-red-400'>3C</span> and <span className='text-red-400'>freezer</span> to <span className='text-red-400'>-15C</span>. Setting it below this wastes extra energy without any benefit.  <br/><br/><br/>
	Prevent <span className='text-red-400'>frost</span> from <span className='text-red-400'>buiding up</span> in the <span className='text-red-400'>freezer</span> which may block coils that remove heat from the warm air.  <br/><br/><br/>

               </p>
              </div>
              
          </div>

        </div>  
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-lightgreen `}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.paddingY} flex flex-col md:flex-row `}>
              {/* 图1 */}
              <div className='h-[600px] w-[800px] '>
              <img src={Tv} alt="hoobank" className=" "/>
              
              </div>

              <div className={`h-[400px] w-[600px] py-10 flex flex-col`}>
                <h1 className='font-poppins font-semibold text-right text-white text-[25px] leading-[23.4px] mb-1'>TV</h1> 
                <p className='font-poppins font-semibold text-right pt-10 text-dimWhite text-[18px] leading-[23.4px] mb-1'> 
                Lower the <span className='text-red-300'>volume</span> and <span className='text-red-300'>brightness</span> of your <span className='text-red-300'>TV</span>. Choose the <span className='text-red-300'>Eco</span> or <span className='text-red-300'>Moive</span> picture mode if available. The Movie mode option is especially useful as it adjusts brightness automatically to ambient lighting for best viewing pleasure and energy cost.<br/><br/><br/><br/>
                Turn off the TV completely at the wall. Using the remote to turn the TV off usually only puts it on standby mode which still uses electricity.

                </p>
              </div>
              
          </div>
        </div>  
      </div>


      

      

      
    </div>
  )


export default Tips