import React from 'react'
import DemoLines from '../Linechart'
import DemoMix from '../Associatedchart'
import styles from '../../style'
import IntroDatav from '../IntroDatav'
const Datav = () => 
 (
    <div className="bg-primary w-full overflow-hidden">

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-darkgreen`}>
        <div className={`${styles.boxWidth}`}>
            <IntroDatav/>
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
                <h1 className='font-poppins font-semibold text-right text-white text-[25px] leading-[23.4px] mb-1'>Contribution to emissions</h1> 
                <p className='font-poppins font-semibold text-right pt-10 text-dimWhite text-[18px] leading-[23.4px] mb-1'> Electricity contributes around 30-40% of Australia's total energy emissions. Despite an increasing population and economy, the emissions per person has dropped by 50% and emissions per GDP has dropped by 65% since 2005. This has been largely due to improvements in electricity production.<br/> <br/>

Australia has actually decreased its total emissions by 19% since 2000 and by 22% since 2005. However, there is still a long way to achieve Australia's emission reduction target of 43% below 2005 levels by 2030. We need to do our part by reducing our own electricity usage. You can help save the planet by utilising these tips on energy usage.</p>
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
                <h1 className='font-poppins font-semibold text-left text-white text-[25px] leading-[23.4px] mb-1'>Proportion of contribution to emissions</h1> 
                <p className='font-poppins font-semibold text-left pt-10 text-dimWhite text-[18px] leading-[23.4px] mb-1'> The pie chart shows the proportion of contribution of different sectors to emissions in Australia. As shown, electricity production is the largest contributor to emissions. The line chart shows the historical data on emissions of different sectors for the last three years which has considerably decreased from previous years. <br/> <br/>

Clicking on pieces of the pie chart shows a sector's quarterly emission data.</p>
              </div>
              
          </div>

        </div>  
      </div>

      

      
    </div>
  )


export default Datav