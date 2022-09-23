
import styles from '../../style'
import './table.css'
import Introd from './Introd';
import {Tago, Diamondenergy, Momentum, EnergyLocal, Indigopower, Copower, Amber, Powershop, Lumo, Redenergy} from '../../assets';

import React from 'react';

const EnergySupplier = () => {
    return (


        <div className="bg-darkgreen w-full ">

            <div className={`${styles.paddingX} ${styles.flexCenter} bg-lightgreen `}>
                <div className={`${styles.boxWidth} `}>
                    <Introd />
                </div>
            </div>


            <div className={`${styles.paddingX} ${styles.flexCenter} pt-[50px] bg-darkgreen h-full`}>
                <div className={`${styles.boxWidth} `}>
                    <div className={` ${styles.boxWidth} bg-darkgreen flex justify-center `}>
                        <div class=" overflow-x-auto relative shadow-md sm:rounded-lg">
                            <table class="w-[1280px] text-sm text-left text-white dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                            Supplier Name
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            Score
                                        </th>

                                        <th scope="col" class="py-3 px-6">
                                            Link
                                        </th>
                                    </tr>
                                </thead>

                                {/* supliier1 */}
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td scope="col" class="text-xl py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                            Diamond energy <img src={Diamondenergy}></img>

                                        </td>
                                        <td scope="col" class="py-3 px-6">
                                            10/10
                                        </td>

                                        <td scope="col" class="py-3 px-6">
                                            <a href='https://diamondenergy.com.au' className='text-red-200'>Link to company</a>
                                        </td>
                                    </tr>
                                </thead>
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td colSpan="3" className='text-xl lowercase p-5'  ><span className='uppercase text-red-200 '>Diamond energy </span>generates more renewable electricity than customers use through their solar panels. They also support households choosing to adopt rooftop solar by providing energy meters and discounts. Their pricing is reasonable and you can get discounts to your energy bill by referring a friend through their Thrive program.
                                        </td>
                                    </tr>
                                </thead>

                                {/* supliier2 */}
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td scope="col" class="text-xl py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                        Momentum Energy <img src={Momentum}></img>

                                        </td>
                                        <td scope="col" class="py-3 px-6">
                                        8.6/10
                                        </td>

                                        <td scope="col" class="py-3 px-6">
                                            <a href='https://www.momentumenergy.com.au' className='text-red-200'>Link to company</a>
                                        </td>
                                    </tr>
                                </thead>
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td colSpan="3" className='text-xl lowercase p-5'  ><span className='uppercase text-red-200 '> Momentum Energy </span>s a part of Hydro Tasmania which generates renewable energy through hydro power. Backed by the Tasmanian government, they are the main reason why Tasmania is 100% powered by renewable energy. However, they still operate gas power stations which continue to produce carbon emissions.

                                        </td>
                                    </tr>
                                </thead>


                                {/* supliier3 */}
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td scope="col" class="text-xl py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                        Energy Locals <img src={EnergyLocal}></img>

                                        </td>
                                        <td scope="col" class="py-3 px-6">
                                        8.09/10
                                        </td>

                                        <td scope="col" class="py-3 px-6">
                                            <a href='https://energylocals.com.au' className='text-red-200'>Link to company</a>
                                        </td>
                                    </tr>
                                </thead>
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td colSpan="3" className='text-xl lowercase p-5'  ><span className='uppercase text-red-200 '>Energy Locals </span>claims to buy carbon offsets for most of their customers' energy usage. They also support renewables and works with partners such as Tesla to optimise home energy batteries and implementing solar PV on apartment buildings. However, their energy emission is still considerable although they claim that most of their energy is sourced from biomass.
                                        </td>
                                    </tr>
                                </thead>


                                {/* supliier4 */}
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td scope="col" class="text-xl py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                        Indigo Power<img src={Indigopower}></img>

                                        </td>
                                        <td scope="col" class="py-3 px-6">
                                        7.88/10
                                        </td>

                                        <td scope="col" class="py-3 px-6">
                                            <a href='https://indigopower.com.au' className='text-red-200'>Link to company</a>
                                        </td>
                                    </tr>
                                </thead>
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td colSpan="3" className='text-xl lowercase p-5'  ><span className='uppercase text-red-200 '>Indigo Power </span> works with Energy Locals to obtain their energy. They mostly focus on the development of local renewable energy projects in eastern Victoria and most of regional NSW.
                                        </td>
                                    </tr>
                                </thead>


                                {/* supliier5 */}
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td scope="col" class="text-xl py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                        CoPower <img src={Copower}></img>

                                        </td>
                                        <td scope="col" class="py-3 px-6">
                                        7.88/10
                                        </td>

                                        <td scope="col" class="py-3 px-6">
                                            <a href='https://www.cooperativepower.org.au' className='text-red-200'>Link to company</a>
                                        </td>
                                    </tr>
                                </thead>
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td colSpan="3" className='text-xl lowercase p-5'  ><span className='uppercase text-red-200 '>CoPower</span> is also another company that partners with Energy Locals for their business. However, they got a lower score on the list due to their unclear opposition against the use of coal for energy.
                                        </td>
                                    </tr>
                                </thead>


                                {/* supliier6 */}
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td scope="col" class="text-xl py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                        Amber Electric<img src={Amber}></img>

                                        </td>
                                        <td scope="col" class="py-3 px-6">
                                        7/10
                                        </td>

                                        <td scope="col" class="py-3 px-6">
                                            <a href='https://www.amber.com.au' className='text-red-200'>Link to company</a>
                                        </td>
                                    </tr>
                                </thead>
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td colSpan="3" className='text-xl lowercase p-5'  ><span className='uppercase text-red-200 '>Amber Electric </span>sells their electricity wholesale with updated electricity prices every five minutes. They incentivise users to use more energy during times where wind and solar are powering the grid. Although they still use coal, their business model, marketing and customer tools support users' transition to 100% renewable energy by rewarding them.
                                        </td>
                                    </tr>
                                </thead>


                                {/* supliier7 */}
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td scope="col" class="text-xl py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                        Powershop <img src={Powershop}></img>

                                        </td>
                                        <td scope="col" class="py-3 px-6">
                                        7/10
                                        </td>

                                        <td scope="col" class="py-3 px-6">
                                            <a href='https://www.powershop.com.au' className='text-red-200'>Link to company</a>
                                        </td>
                                    </tr>
                                </thead>
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td colSpan="3" className='text-xl lowercase p-5'  ><span className='uppercase text-red-200 '>Powershop </span>  uses renewables and produces more energy than their consumers use but in February 2022, they have been bought by fossil fuel giant Shell.
                                        </td>
                                    </tr>
                                </thead>


                                {/* supliier8 */}
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td scope="col" class="text-xl py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                        Lumo Energy <img src={Lumo}></img>

                                        </td>
                                        <td scope="col" class="py-3 px-6">
                                        6.6/10
                                        </td>

                                        <td scope="col" class="py-3 px-6">
                                            <a href='https://www.lumoenergy.com.au' className='text-red-200'>Link to company</a>
                                        </td>
                                    </tr>
                                </thead>
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td colSpan="3" className='text-xl lowercase p-5'  ><span className='uppercase text-red-200 '>Lumo Energy </span> owned by Snowy Hydro, produces renewable electricity energy but their parent company also utilises gas and diesel power stations. Still, the emissions intensity of the company is quite low despite some of their dirty power stations, hence their decent score.
                                        </td>
                                    </tr>
                                </thead>


                                {/* supliier9 */}
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td scope="col" class="text-xl py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                        Red Energy <img src={Redenergy}></img>

                                        </td>
                                        <td scope="col" class="py-3 px-6">
                                        6.6/10
                                        </td>

                                        <td scope="col" class="py-3 px-6">
                                            <a href='https://www.redenergy.com.au' className='text-red-200'>Link to company</a>
                                        </td>
                                    </tr>
                                </thead>
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td colSpan="3" className='text-xl lowercase p-5'  ><span className='uppercase text-red-200 '>Red Energy </span> is the same as Lumo Energy being owned by Snowy Hydro. They provide an interesting renewable matching promise where they will generate a unit of electricity from a renewable source for every unit of energy you buy from Red Energy.
                                        </td>
                                    </tr>
                                </thead>


                                {/* supliier10 */}
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td scope="col" class="text-xl py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                        Tango Energy <img src={Tago}></img>

                                        </td>
                                        <td scope="col" class="py-3 px-6">
                                        6.49/10
                                        </td>

                                        <td scope="col" class="py-3 px-6">
                                            <a href='https://www.tangoenergy.com/homepage' className='text-red-200'>Link to company</a>
                                        </td>
                                    </tr>
                                </thead>
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <td colSpan="3" className='text-xl lowercase p-5'  ><span className='uppercase text-red-200 '>Tango Energy </span>  is the Australian Pacific Hydro who uses wind farms and hydro plants to generate their electricity. Their generation assets almost have an emission of zero. However, their parent company SPIC is a large operator of coal mining.
                                        </td>
                                    </tr>
                                </thead>


                        


                            </table>
                        </div>
                    </div>

                </div>
            </div>





        </div>


    )
}

export default EnergySupplier

