import React from 'react'
import DemoLines from '../Linechart'
import DemoMix from '../Associatedchart'
import styles from '../../style'
import IntroDatav from '../IntroDatav'
const Datav = (props) => {
  console.log("props",props)
return <>
    <div className="bg-primary w-full overflow-hidden">

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
            <IntroDatav/>
        </div>  
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary `}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.paddingY} flex flex-col md:flex-row `}>
              {/* 图1 */}
              <div className='h-[600px] w-[800px] '>
              <DemoLines/>
              
              </div>

              <div className={`h-[400px] w-[600px] py-10 flex flex-col`}>
                <h1 className='font-poppins font-semibold text-right text-white text-[25px] leading-[23.4px] mb-1'>Contribution to emissions</h1> 
                <p className='font-poppins font-semibold text-right pt-10 text-dimWhite text-[18px] leading-[23.4px] mb-1'> 
                In 2022, Australia has reduced its greenhouse gas emissions by <span className='text-red-300'>22% </span> since <span className='text-red-300'>2005 </span> . However, 
                this is still a long way from reaching the <span className='text-red-300'>target goal </span> of reduction by <span className='text-red-300'>43% </span> by <span className='text-red-300'>2030 </span>. 
                Production of <span className='text-red-300'>electricity </span> plays a big part in climate change, 
                contributing around <span className="text-red-300">30-40% </span>  of Australia’s total greenhouse gas emissions. 
                We need to do our part in combating climate change by reducing our electricity usage. 
                Here are some <a href='/tips' className='text-red-400'>tips (click me)</a>  that you can use to reduce your energy usage.
                </p>
              </div>
              
          </div>
        </div>  
      </div>


      <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary `}>
        <div className={`${styles.boxWidth}`}>

          <div className={`${styles.paddingY} flex flex-col md:flex-row-reverse `}>
              {/* 图1 */}
              <div className='h-[600px] w-[800px] '>
              <DemoMix/>
              </div>

              <div className={`h-[400px] w-[600px] py-10 flex flex-col`}>
                
                <p className='font-poppins font-semibold text-left pt-10 text-dimWhite text-[18px] leading-[23.4px] mb-1'> The pie chart shows the proportion of contribution of different sectors to emissions in Australia. As shown, electricity production is the largest contributor to emissions. The line chart shows the historical data on emissions of different sectors for the last three years which has considerably decreased from previous years. <br/> <br/>

Clicking on pieces of the pie chart shows a sector's quarterly emission data.</p>
              </div>
              
          </div>

        </div>  
      </div>

      

      
    </div>
    </>
  
} 


export default Datav