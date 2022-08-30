import React, { Component } from 'react'
import NavBar from '../NavBar/index'
import styles from '../../style'
import Intro from '../Intro/index'
export default class Home extends Component {
  render() {
    return (
      <div className="bg-green w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <NavBar/>
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Intro />
          </div>
        </div>
      </div>
    )
  }
}
