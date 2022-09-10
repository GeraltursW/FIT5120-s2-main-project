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
      <div className="w-full overflow-hidden bg-black  ">
       
        <div className={` hover:bg-black ${styles.flexStart} `}> 
        <video src={videobg} autoPlay loop muted className=" z-0  w-full h-full  opacity-70 object-cover" />  

          <div className={` ${styles.boxWidth}  absolute ` }>
            <Intro />
            <div className={` ${styles.boxWidth}  absolute pt-[100px] ` }>
            <Stats/>
            </div>
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
