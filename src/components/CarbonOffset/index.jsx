import React from 'react'
import styles from '../../style'
import IntroC from './IntroC'

const CarbonOffset = () => {
  return (
    <div className="bg-darkgreen w-full ">

    <div className={`${styles.paddingX} ${styles.flexCenter} bg-lightgreen `}>
        <div className={`${styles.boxWidth} `}>
            <IntroC />
        </div>
    </div>


    <div className={`${styles.paddingX} ${styles.flexCenter} pt-[50px] bg-darkgreen h-full`}>
        <div className={`${styles.boxWidth} `}>
            <div className={` ${styles.boxWidth} bg-darkgreen flex justify-center `}>
                
            </div>

        </div>
    </div>





</div>

  )
}

export default CarbonOffset