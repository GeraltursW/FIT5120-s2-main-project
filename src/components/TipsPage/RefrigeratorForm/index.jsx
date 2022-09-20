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
    title: "1.What % of your fridge is filled? ?",
    options: [
      { value: 1 / 4, text: " 1/4 " },
      { value: 2 / 4, text: " 2/4 " },
      { value: 3 / 4, text: " 3/4 " },
      { value: 4 / 4, text: " 4/4 " },
    ]
  },
  {
    title: "2.What temperature is your fridge set to? ",
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
  const result = parseInt(questionlist[0]) * parseInt(questionlist[1]) * 0.0011;

  return (
    <div>
      {step === 1 && <Introduction />}
      {step === 2 && <MultiChoice {...questions[0]} onChange={(value) => onChange('one', value)} />}
      {step === 3 && <Inputform  {...questions[1]} onChange={(value) => onChange('two', value)} />}
      {step === 4 && <Result result={result} />}
      {step === 5 && <TopAC />}


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

                <div className={`${styles.paddingY} flex flex-col md:flex-row-reverse `}>
                  {/* 图1 */}
                  <div className='h-[600px] w-[800px] '>
                    <img src={Refrigerator} alt="hoobank" className=" " />
                  </div>

                  <div className={`h-[400px] w-[600px] py-10 flex flex-col`}>
                    <h1 className='font-poppins font-semibold text-left text-white text-[25px] leading-[23.4px] '>Refrigerator Tips</h1>
                    <p className='font-poppins font-semibold text-left pt-10 text-dimWhite text-[18px] leading-[23.4px] '>
                      
                      Keep your <span className='text-red-400'>fridge door closed</span>  to maintain its temperature and reduce cooling costs. <br /><br />
                      <span className='text-red-400'>Fill up</span> your fridge without<span className='text-red-400'>overfilling</span>. This prevents warm air from entering when you open the door. You can cover <span className='text-red-400'>big empty spaces</span> with <span className='text-red-400'>containers of water.</span> <br /><br /><br />
                      Set <span className='text-red-400'>fridge</span> to <span className='text-red-400'>3C</span> and <span className='text-red-400'>freezer</span> to <span className='text-red-400'>-15C</span>. Setting it below this wastes extra energy without any benefit.  <br /><br />
                      Prevent <span className='text-red-400'>frost</span> from <span className='text-red-400'>buiding up</span> in the <span className='text-red-400'>freezer</span> which may block coils that remove heat from the warm air.  <br /><br />

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

          {step === 4 && (
            <div className='flex justify-center'>
              <button type="button" onClick={() => { setStep(step + 1) }} className=" w-[300px] h-[40px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Top 5 energy Refrigertor</button>
            </div>)}

          {/* 前讲后退按钮 */}
          {step > 1 && step < 4 && (
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