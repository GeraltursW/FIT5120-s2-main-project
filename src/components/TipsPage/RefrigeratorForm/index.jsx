import React from 'react'
import styles from '../../../style'

const RefrigeratorForm = ({setFormModal}) => {
  return (
    <div>
      {/* 透明背景 */}
    <div className={` z-50 py-0 px-0 w-full h-full fixed opacity-60 object-cover  bg-primary`}/>
    
    <div className={` ${styles.paddingX} ${styles.flexStart} py-[100px] z-50 flex  px-0 w-full h-full fixed object-cover `}>
      <div className=' w-[1000px] h-[600px] rounded-lg bg-gray  pb-0'>

        <div className="  flex justify-end p-2">
        <button className='' onClick={()=>{setFormModal("");}} >
            x
        </button>
        </div>
        <h1> Refrigerator</h1>

        <div className='h-[400px]'></div>


        <div className="flex flex-1 justify-center items-center">
        <button onClick={()=>{setFormModal("");}} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Cancel</button>
          <div className='w-[200px]'></div>
        <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Next</button>
        </div>


      </div>
    </div>

    
    </div>

  )
}

export default RefrigeratorForm