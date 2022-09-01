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
              <div className='h-[400px] w-[600px] '>
              <DemoLines/>
              </div>

              <div className={`h-[400px] w-[600px] py-10 flex flex-col`}>
                <h1 className='font-poppins font-semibold text-right text-white text-[25px] leading-[23.4px] mb-1'>Titile 1</h1> 
                <p className='font-poppins font-semibold text-right pt-10 text-dimWhite text-[18px] leading-[23.4px] mb-1'> Description Description Description Description Description Description DescriptionDescription Description Description Description Description</p>
              </div>
              
          </div>
        </div>  
      </div>


      <div className={`${styles.paddingX} ${styles.flexCenter} bg-yellowgreen `}>
        <div className={`${styles.boxWidth}`}>

          <div className={`${styles.paddingY} flex flex-col md:flex-row-reverse `}>
              {/* 图1 */}
              <div className='h-[400px] w-[600px] '>
              <DemoMix/>
              </div>

              <div className={`h-[400px] w-[600px] py-10 flex flex-col`}>
                <h1 className='font-poppins font-semibold text-left text-white text-[25px] leading-[23.4px] mb-1'>Titile 1</h1> 
                <p className='font-poppins font-semibold text-left pt-10 text-dimWhite text-[18px] leading-[23.4px] mb-1'> Description Description Description Description Description Description DescriptionDescription Description Description Description Description</p>
              </div>
              
          </div>

        </div>  
      </div>

      

      
    </div>
  )


export default Datav