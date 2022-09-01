import React from 'react'
import DemoLines from '../Linechart'
import DemoMix from '../Associatedchart'
import styles from '../../style'
import DemoColumn from '../BarChart'
const Datav = () => 
 (
    <div>
      {/* 上图 */}
      <div className="bg-primary w-full overflow-hidden">
        
        <div className={`${styles.paddingX} flex justify-center items-start h-[600px] `}>
          {/* 图1 */}
          <div className="w-[800px]">
          <DemoLines/> 
          <h1 className="text-white">chart1</h1>
          {/* <p className="text-white">Description Description Description Description Description</p> */}
          </div>  
        
        </div>
        

      

      {/* 下图 */}
        {/* 图4 */}
        <div className={`${styles.paddingX} flex justify-center items-end h-[600px] `}>
          <div className="w-[1200px]">
          <DemoMix/>
          <h1 className="text-white">chart4</h1>
          {/* <p className="text-white">Description Description Description Description Description</p> */}
        
        </div>

        
        </div>

        <div className={`${styles.paddingX} flex justify-center items-start h-[600px] w-[2000px] `}>
        <p className="text-white max-w-7xl ">Description Description Description Description Description
        DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription</p>       
        </div> 
        
      </div>

    </div>
  )


export default Datav