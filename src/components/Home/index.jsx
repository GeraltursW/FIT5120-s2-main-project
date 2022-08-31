import React, { Component } from 'react'
import styles from '../../style'
import Intro from '../Intro/index'
import Stats from '../Stats'
import Description from '../FunctionDescrption'
import Footer from '../Footer'
import videobg from '../../assets/back-video2.mp4'
import Navbar from '../NavBar'

export default class Home extends Component {
  render() {
    return (
      <div className="bg-darkgreen w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-darkgreen ${styles.paddingX} ${styles.flexCenter}`}>    
        <video src={videobg} autoPlay loop muted className=" z-0 py-0 px-0 w-full h-full fixed opacity-80 " />
          <div className={`${styles.boxWidth} h-[600px]` }>
            <Intro />
          </div>
        
        </div>
        
        <div className={`bg-green z-100 ${styles.paddingX} ${styles.flexCenter}`}>     
          <div className={`${styles.boxWidth} ` }>            
            <Stats/>
          </div>
        </div>

        <div className={`bg-darkgreen  ${styles.paddingX} ${styles.flexCenter}`}>     
          <div className={`${styles.boxWidth} ` }>
            <Description/>
          </div>
        </div>

        <div className={`bg-footer ${styles.paddingX} ${styles.flexCenter}`}>     
          <div className={`${styles.boxWidth} ` }>
            <Footer/>
          </div>
        </div>
      </div>
      
      
    )
  }
}
