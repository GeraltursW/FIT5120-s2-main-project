import React, { Component } from 'react'
import styles from '../../style'
import Intro from '../Intro/index'
import Stats from '../Stats'
import Description from '../FunctionDescrption'
import Footer from '../Footer'
import videobg from"../../assets/back-video4.mp4"

export default class Home extends Component {
  
  render() {
    return (
      <div className="w-full overflow-hidden bg-black">
        <video src={videobg} autoPlay loop muted className=" z-0 py-0 px-0 w-full h-full fixed opacity-70 object-cover" />
        
        
        <div className={` hover:bg-black ${styles.paddingX} ${styles.flexCenter}`}>    

          <div className={` ${styles.boxWidth} h-[450px]` }>
            <Intro />
          </div>
        
        </div>
        
        <div className={` hover:bg-black z-100 ${styles.paddingX} ${styles.flexCenter}`}>     
          <div className={`${styles.boxWidth} ` }>            
            <Stats/>
          </div>
        </div>

        <div className={` hover:bg-black  ${styles.paddingX} ${styles.flexCenter}`}>     
          <div className={`${styles.boxWidth} ` }>
            <Description/>
          </div>
        </div>

        <div className={` hover:bg-black ${styles.paddingX} ${styles.flexCenter}`}>     
          <div className={`${styles.boxWidth} ` }>
            <Footer/>
          </div>
        </div>
        
      </div>
      
      
    )
  }
}
