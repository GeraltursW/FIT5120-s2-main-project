import React from 'react'

const Result = (props) => {
  const {result} = props;
  return (


<div className='flex justify-center items-center'>

<div className='p-[100px] mt-[880px] w-[1000px] h-[600px] fixed bg-primary z-50 flex justify-center items-center'>

  <div className='w-[700px] h-[450px] fixed  flex justify-center items-center flex-col' >
    {/* 题目 */}
    <p className='text-white text-xl '>your Emission (in tonnes CO2) are : {result} </p>
  </div>

</div>

</div>
  )
}

export default Result