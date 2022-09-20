import React from 'react'

const Result = (props) => {
  const {result} = props;
  return (


<div className='flex justify-center items-center'>

<div className='p-[100px] mt-[880px] w-[1000px] h-[600px] fixed bg-primary z-50 flex justify-center items-center'>

  <div className='w-[700px] h-[450px] fixed  flex items-center flex-col' >
    {/* 题目 */}
    <p className='text-white mt-[150px] text-6xl'>Emission (in tonnes CO2) : 
    <br/> <span className='text-red-200'>{result}</span> tonnes</p>
    <p className='text-white mt-[150px] text-3xl'> Let see <span className='text-green-200'>top 5 Energy saving</span> Refrigerator</p>
  </div>
    
</div>

</div>
  )
}

export default Result