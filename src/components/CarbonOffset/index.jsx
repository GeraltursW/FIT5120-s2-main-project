import React from 'react'
import styles from '../../style'
import IntroC from './IntroC'
import { GroupTree } from "../../assets"

const CarbonOffset = () => {
    return (
        <div className="bg-darkgreen w-full ">

            <div className={`${styles.paddingX} ${styles.flexCenter} bg-lightgreen `}>
                <div className={`${styles.boxWidth} `}>
                    <IntroC />
                </div>
            </div>


            <div className={`${styles.paddingX} ${styles.flexCenter}  bg-darkgreen h-full`}>
                <div className={`${styles.boxWidth} `}>
                    <div className={` ${styles.boxWidth} bg-darkgreen flex justify-center `}>
                        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 `}>
                            <p className='font-poppins font-semibold text-left py-20 text-dimWhite text-[20px] leading-[23.4px] mb-1'> After reducing your energy usage, you can also do a <sapn className="text-yellow" > carbon offset</sapn>  which is the removal of carbon dioxide or other greenhouse gases by compensating for emissions made elsewhere. This usually comes through <span className='text-yellow'> donating to a carbon offset</span> company and you can contribute to various projects that the company does. This is a great way to be more climate conscious and contribute to <span className='text-yellow'> saving the planet</span>  in the long run.

                                <br /><br />Note that it is almost always better to reduce your energy emissions than compensating it with carbon offsetting. This is because carbon offsetting produces effects that comes in the future such as <span className='text-yellow'> planting trees</span> and <span className='text-yellow'> restoring forests.</span> </p>
                        </div>
                        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                            <img src={GroupTree} />
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <p className='font-poppins font-semibold text-left py-5 text-dimWhite text-[20px] leading-[23.4px] '> Here are some of the projects that are done in Australia that you can contribute to.</p>
                    </div>
                </div>
            </div>
            
            <div className={`${styles.flexCenter} bg-yellowgreen py-10 `}>
                <div className={`${styles.boxWidth} flex flex-row `}>
                <img src={GroupTree} className= "w-[50%]"/>

                    <a href='https://www.greenfleet.com.au/'>
                    <div className={`${styles.flexCenter} `}>
                        <div className={`flex w-[300px] flex-col cursor-pointer p-6 m-6 rounded-[20px] appliances-card bg-darkgreen hover:bg-primary`}>
                            <div className={`h-[100px] rounded-full ${styles.flexCenter} `}>
                                <h1 className="flex font-poppins font-semibold text-yellow text-[18px] leading-[23.4px] ">
                                    Greenfleet
                                </h1>
                            </div>
                            {/* 加标题 */}
                            <div className="flex flex-col ml-3">
                                <h4 className="flex justify-center font-poppins font-semibold text-white text-[18px] leading-[23.4px] ">
                                    Greenfleet restores forests in Australia and New Zealand and restore critical ecosystems and capture carbon emissions on behalf of your donation.
                                </h4>
                                <button type="button" className="mt-[100px] text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Join us</button>
                            </div>
                        </div>
                        
                    </div>
                    </a>
                    <a href='https://corenafund.org.au/'>
                    <div className={`${styles.flexCenter} `}>

                        <div
                            className={`flex w-[350px] flex-col cursor-pointer p-6 m-6 rounded-[20px] appliances-card bg-darkgreen hover:bg-primary`}>
                            <div className={`h-[100px] rounded-full ${styles.flexCenter} `}>
                                <h1 className="flex font-poppins font-semibold text-yellow text-[18px] leading-[23.4px] ">
                                CORENA
                                </h1>
                            </div>
                            {/* 加标题 */}
                            <div className="flex flex-col ml-3">
                                <h4 className="flex justify-center font-poppins font-semibold text-white text-[18px] leading-[23.4px] ">
                                CORENA improves the energy efficiency of the community and does projects such as installing solar panels, switching away from fossil fuels and promoting usage of electric vehicles.
                                </h4>



                                <button type="button" className="mt-[100px] text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Join us</button>
                            </div>
                        </div>

                    </div>
                    </a>
                </div>
            </div>





        </div>

    )
}

export default CarbonOffset