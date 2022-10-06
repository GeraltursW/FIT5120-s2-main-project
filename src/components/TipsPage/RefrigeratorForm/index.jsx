import React, { useState } from 'react'
import styles from '../../../style'
import { CloseOutlined } from '@ant-design/icons'
import { Refrigerator } from '../../../assets'
import Introduction from './Introduction'
import TopAC from './TopAC'
import Inputform from './Inputform'
import Result from './Result'
import MultiChoice from './MultiChoice'


const questions = [
  {
    title: "1.What % of your fridge is filled?",
    options: [
      { value: 1, text: "25%" },
      { value: 2, text: "50%" },
      { value: 3, text: "75%" },
      { value: 4, text: "100%" },
    ]
  },
  {
    title: "3. How many kWh is your AC?",
    options: [
      { value: 2, text: "Average" },
      { value: 2, text: "Around 2 kw" },
      { value: 3, text: "Around 3 kw" },
      { value: 4, text: "Around 4 kw" },
    ]
  },
  {
    title: "4.How long are you planning to use it",
    options: [
      { value: 1, text: "1 hour" },
      { value: 2, text: "2 hours" },
      { value: 3, text: "3 hours" },
      { value: 3, text: "4 hours" },
    ]
  },
]

const RefrigeratorForm = ({ setFormModal }) => {
  const [form, setForm] = useState({});
  const [step, setStep] = useState(0);

  const onChange = (key, value) => {
    form[key] = value;
    setForm({ ...form })
  }
  const questionlist = Object.values(form)
  console.dir(form)
  const result = Math.round(parseInt(questionlist[0]) * parseInt(questionlist[1])* parseInt(questionlist[2]) * 0.0011 * 1000) / 1000 * 1000;
  const result1 = Math.round(parseInt(questionlist[0]) * parseInt(questionlist[1])* parseInt(questionlist[2]) * 0.55 * 1000) / 1000
  const result2 = Math.round(parseInt(questionlist[0]) * parseInt(questionlist[1])* parseInt(questionlist[2]) * 0.03 * 1000) / 1000
  const result3 = Math.round(parseInt(questionlist[0]) * parseInt(questionlist[1])* parseInt(questionlist[2]) * 134 * 1000) / 1000

  return (
    <div>
      {step === 1 && <Introduction />}
      {step === 2 && <MultiChoice {...questions[0]} onChange={(value) => onChange('one', value)} />}
      {/* {step === 3 && <Inputform  {...questions[1]} onChange={(value) => onChange('two', value)} />} */}
      {step === 3 && <MultiChoice {...questions[1]} onChange={(value) => onChange('two', value)} />}
      {step === 4 && <MultiChoice {...questions[2]} onChange={(value) => onChange('three', value)} />}
      {step === 5 && <Result result={result} result1={result1} result2={result2} result3={result3} />}
      {step === 6 && <TopAC />}


      {/* 透明背景 */}
      <div className={` z-10 py-0 px-0 w-full h-full fixed opacity-60 object-cover  bg-primary`} />

      <div className={` ${styles.paddingX} ${styles.flexStart} py-[0px] z-20 flex  px-0 w-full h-full fixed object-cover `}>
        <div className=' w-[1000px] h-[800px] rounded-lg bg-primary  pb-0'>

          <div className="  flex justify-end p-2">
            <CloseOutlined style={{ fontSize: '20px' }} className=' text-white mr-[5px] mt-[5px]' onClick={() => { setFormModal(""); }} />
          </div>



          <div className='w-[1000px] h-[600px] '>
            <div className={`${styles.paddingX} ${styles.flexCenter}  `}>
              <div className={`w-full `}>


                <div className={`${styles.paddingY} flex flex-col md:flex-row-reverse `}>
                  {/* 图1 */}
                  <div className='h-[600px] w-[800px] '>
                    <img src={Refrigerator} alt="hoobank" className=" " />
                  </div>

                  <div className={`h-[400px] w-[600px] py-10 flex flex-col`}>
                    <h1 className='font-poppins font-semibold text-left text-white text-[25px] leading-[23.4px] mb-1'>Refrigerator</h1>
                    <p className='font-poppins font-semibold text-left pt-10 text-dimWhite text-[18px] leading-[23.4px] mb-1'>
                      
                      Keep your <span className='text-red-400'>fridge door closed</span>  to maintain its temperature and reduce cooling costs. <br />
                      <span className='text-red-400'>Fill up</span> your fridge without<span className='text-red-400'>overfilling</span>. This prevents warm air from entering when you open the door. You can cover <span className='text-red-400'>big empty spaces</span> with <span className='text-red-400'>containers of water.</span> <br /><br /><br />
                      Set <span className='text-red-400'>fridge</span> to <span className='text-red-400'>3C</span> and <span className='text-red-400'>freezer</span> to <span className='text-red-400'>-15C</span>. Setting it below this wastes extra energy without any benefit.  <br />
                      Prevent <span className='text-red-400'>frost</span> from <span className='text-red-400'>buiding up</span> in the <span className='text-red-400'>freezer</span> which may block coils that remove heat from the warm air.  <br />

                    </p>
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

          {step === 5 && (
            <div className='flex justify-center'>
              <button type="button" onClick={() => { setStep(step + 1) }} className=" w-[300px] h-[40px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Top 5 Most Efficient Refrigerator
              </button>
            </div>)}

          {/* 前讲后退按钮 */}
          {step > 1 && step < 5 && (
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

export default RefrigeratorForm