import React from 'react'

const Result = (props) => {
  const {result} = props;
  const {result1} = props;
  const {result2} = props;
  const {result3} = props;

  return (


<div className='flex justify-center items-center'>

<div className='p-[100px] mt-[880px] w-[1000px] h-[600px] fixed bg-primary z-50 flex justify-center items-center'>

  <div className='w-[700px] h-[450px] fixed  flex items-start flex-col' >
    {/* 题目 */}
    <p className='text-white mt-[40px] text-2xl'>you will produce
    <span className='text-red-200'> {result}</span> of CO2 emission</p>

    <p className='text-white mt-[60px] text-4xl'>Equivalent to</p>

    <p className='text-white mt-[40px] text-xl'>
    <span className='text-red-200'> {result1}</span> kg of Coal burned</p>

    <p className='text-white mt-[40px] text-xl'> 
     <span className='text-red-200'> {result2}</span> litres of gasoline consumed</p>

    <p className='text-white mt-[40px] text-xl'> 
     <span className='text-red-200'> {result3}</span>  smartphones charged</p>

    
    <p className='text-white mt-[80px] text-3xl'> Let see <span className='text-green-200'>top 5 Energy saving</span> Air conditioner</p>

    

  </div>
    
</div>

</div>
  )
}

export default Result