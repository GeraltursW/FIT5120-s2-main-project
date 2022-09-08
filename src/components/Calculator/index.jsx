import React from 'react'
import videobg from '../../assets/back-video4.mp4'

const Calculator = () => {
  return (
    <div>
        <video src={videobg} autoPlay loop muted className=" z-0 py-0 px-0 w-full h-full fixed opacity-100 object-cover" />
    <div className="w-screen h-screen place-items-center grid ">
        
        <div>
            <button type ="button" class="relative opacity-80 text-white w-[300px] h-[100px] inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    COMING SOON
                </span>
            </button>

        </div>
        

    </div>
    </div>
  )
}

export default Calculator