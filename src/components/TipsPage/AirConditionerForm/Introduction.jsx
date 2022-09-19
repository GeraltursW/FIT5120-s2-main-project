import React from 'react'



const AirConditionerForm = ({  }) => {

  return (
    <div className='flex justify-center items-center'>

      <div className='p-[100px] mt-[880px] w-[1000px] h-[600px] fixed bg-primary z-50 flex justify-center items-center'>
      <p className='font-poppins font-semibold text-left pt-10 text-dimWhite text-[18px] leading-[23.4px] mb-1'>
      <span className='text-red-200'>Summer's </span> the time to hit the beach while <span className='text-blue-200'>Winter </span> is when you stay at home. 
      <br/>
      Regardless, using your <span className='text-green-200'>AC</span> to <span className='text-blue-200'>Cool</span> or <span className='text-red-300'>Heat</span> your home uses up a lot of <span className='text-yellow'>Electricity Usage</span>. 
      It is important that you  <span className='text-yellow'>set your temperature</span> accordingly to ensure that you are cozy without blowing up your energy usage.
      <br/><br/><br/><br/><br/><br/>
      <span className='text-red-200'>Go to the quiz below to find out how much you can save on your AC usage by following our tips and recommendations. </span>              
                     
      </p>
      </div>

    </div>
  )
}

export default AirConditionerForm