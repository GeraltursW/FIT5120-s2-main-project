import React, { useState } from 'react'
import styles from '../../../style'
import { CloseOutlined } from '@ant-design/icons'
import { Airconditionar } from '../../../assets'
import Introduction from './Introduction'
import TopAC from './TopAC'
import Inputform from './Inputform'
import Result from './Result'
import MultiChoice from './MultiChoice'


const questions = [
  {
    title: "1.what is your current seaon now ?",
    options: [
      { value: "Spring", text: "Spring" },
      { value: "Summer", text: "Summer" },
      { value: "Autumn", text: "Autumn" },
      { value: "Winter", text: "Winter" },
    ]
  },
  {
    title: "2.what degree are you setting your AC at ",
  },
  {
    title: "3. How many kWh is your AC?",
    options: [
      { value: 3, text: "average" },
      { value: 3, text: "Around 3 kw" },
      { value: 5, text: "Around 5 kw" },
      { value: 7, text: "Around 7 kw" },
    ]
  },
  {
    title: "4.How long are you planning to use it",
    options: [
      { value: 1, text: "1 hour" },
      { value: 2, text: "2 hour" },
      { value: 3, text: "3 hour" },
      { value: 3, text: "4 hour" },
    ]
  },
]

const AirConditionerForm = ({ setFormModal }) => {
  const [form, setForm] = useState({});
  const [step, setStep] = useState(0);

  const onChange = (key, value) => {
    form[key] = value;
    setForm({ ...form })
  }
  const questionlist = Object.values(form)
  console.dir(form)
  const result =Math.round( parseInt(questionlist[2]) * parseInt(questionlist[3]) * 0.0011 *1000)/1000;
  const result1 = parseInt(questionlist[2]) * parseInt(questionlist[3]) * 0.55;
  const result2 = parseInt(questionlist[2]) * parseInt(questionlist[3]) * 0.03;
  const result3 = parseInt(questionlist[2]) * parseInt(questionlist[3]) * 134;

  return (
    <div>
      {step === 1 && <Introduction />}
      {step === 2 && <MultiChoice {...questions[0]} onChange={(value) => onChange('one', value)} />}
      {step === 3 && <Inputform  {...questions[1]} onChange={(value) => onChange('two', value)} />}
      {step === 4 && <MultiChoice {...questions[2]} onChange={(value) => onChange('three', value)} />}
      {step === 5 && <MultiChoice {...questions[3]} onChange={(value) => onChange('four', value)} />}
      {step === 6 && <Result result={result} result1={result1} result2={result2} result3={result3} /> }
      {step === 7 && <TopAC /> }


      {/* 透明背景 */}
      <div className={` z-10 py-0 px-0 w-full h-full fixed opacity-60 object-cover  bg-primary`} />

      <div className={` ${styles.paddingX} ${styles.flexStart} py-[100px] z-20 flex  px-0 w-full h-full fixed object-cover `}>
        <div className=' w-[1000px] h-[800px] rounded-lg bg-primary  pb-0'>

          <div className="  flex justify-end p-2">
            <CloseOutlined style={{ fontSize: '20px' }} className=' text-white mr-[5px] mt-[5px]' onClick={() => { setFormModal(""); }} />
          </div>



          <div className='w-[1000px] h-[600px] '>
            <div className={`${styles.paddingX} ${styles.flexCenter}  `}>
              <div className={`w-full `}>



                <div className={`${styles.paddingY} flex flex-col md:flex-row `}>
                  <div className='h-[600px] w-[800px] '>
                    <img src={Airconditionar} alt="hoobank" className=" " />
                  </div>
                  <div className={`h-[400px] w-[600px] py-10 flex flex-col`}>
                    <h1 className='font-poppins font-semibold text-right text-white text-[25px] leading-[23.4px] mb-1'>Air conditioner Tips</h1>
                    <p className='font-poppins font-semibold text-left pt-10 text-dimWhite text-[18px] leading-[23.4px] mb-1'>
                      Set the temperature at <span className='text-red-300'>26C</span> for cooling in <span className='text-red-300'>summer</span> and <span className='text-red-300'>20C</span> for heating in <span className='text-red-300'>winter</span> to minimise energy usage. Setting the temperature closer to the ambient temperature will reduce your energy usage significantly. A small change of <span className='text-red-300'>one degree</span>can save you around <span className='text-red-300'>10%</span>from your cooling/heating costs.<br /><br /><br /><br />
                      Avoid <span className='text-red-300'>turning on</span> and <span className='text-red-300'>off</span> your air conditioning when at home. <span className='text-red-300'>Freguent switching</span>not only causes a <span className='text-red-300'>higher energy bill</span> but also may add <span className='text-red-300'>extra strain</span> on your unit.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
          {step === 0 && (
            <div className='flex justify-center'>
              <button type="button" onClick={() => setStep(step + 1)} className=" w-[105px] h-[40px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Next</button>
            </div>)}
          {step === 1 && (
            <div className='flex justify-center'>
              <button type="button" onClick={() => setStep(step + 1)} className=" w-[105px] h-[40px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Start</button>
            </div>)}

            {step === 6 && (
            <div className='flex justify-center'>
              <button type="button"  onClick={() => { setStep(step + 1) }} className=" w-[300px] h-[40px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Top 5 energy Air Condition</button>
            </div>)}

          {/* 前讲后退按钮 */}
          {step > 1 && step < 6 && (
            <div className='flex justify-center'>
              <button type="button" onClick={() => setStep(step - 1)} class=" w-[105px] h-[40px] text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-[200px] mb-2">Back</button>
              <button type="button" onClick={() => setStep(step + 1)} className=" w-[105px] h-[40px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Next</button>
            </div>
          )}


        </div>
      </div>


    </div>

  )
}

export default AirConditionerForm