import React from 'react'



const AirConditionerForm = ({  }) => {

  return (
    <div className='flex justify-center items-center'>

      <div className='p-[100px] mt-[700px] w-[1000px] h-[580px] fixed bg-primary z-50 flex justify-center items-center'>
      <p className='font-poppins font-semibold text-left pt-10 text-dimWhite text-[18px] leading-[23.4px] mb-1'>
      Nothing better than to chill at home and watch some TV after a long day of school and work. Did you know though that your <span className='text-red-200'>TV</span> can use up to <span className='text-yellow'>200%</span> as much <span className='text-yellow'>electricity</span> depending on its settings? Check out our quiz below to see the best settings to use to make sure you have the best viewing experience while keeping your energy use down.
      <br/><br/><br/><br/><br/><br/>
      <span className='text-red-200'>Go to the quiz by clicking below to find out how much electricity are you using for your TV.</span>              
                     
      </p>
      </div>

    </div>
  )
}

export default AirConditionerForm