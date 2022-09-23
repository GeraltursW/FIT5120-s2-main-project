import React from 'react'
import { Rate } from 'antd';
import Co2Icon from '../Tips/Co2Icon';
import CoalIcon from '../Tips/CoalIcon';
import GasolineIcon from '../Tips/Gasoline';
import SmartphoneIcon from '../Tips/Smartphone';

const Result = (props) => {
  const {result} = props;
  const {result1} = props;
  const {result2} = props;
  const {result3} = props;
  

  return (


<div className='flex justify-center items-center'>

<div className='p-[100px] mt-[680px] w-[1000px] h-[580px] fixed bg-green-900 z-50 flex justify-center items-center'>

  <div className='w-[700px] h-[450px]  flex items-start flex-col' >
    {/* 题目 */}
    <div className='flex pl-2 bg-primary rounded-lg w-[650px] flex-row items-center'>
    <p className='text-white text-2xl'>If you use the tips we provide, you can save up to
    <span className='text-red-200'> {result*100}</span> kg of CO2 emission per year</p>
    <Rate className='w-[100px] flex flex-row ml-[50px]'  character={<Co2Icon  />} count={result/2} disabled Value={1} /> 
    </div>
    
    <p className='text-white mt-[40px] text-xl'>Equivalent to</p>

    <div className='pl-2 mt-[20px] bg-primary rounded-lg w-[650px] flex flex-row items-center'>
    <p className='text-white  text-xl'>
    <span className='text-red-200'> {result1*100}</span> kg of Coal burned</p>
    <Rate className='w-[100px] flex flex-row ml-[50px]'  character={<CoalIcon  />} count={result1/2} disabled Value={1} /> 
    </div>
  

    <div className=' pl-2 mt-[20px] bg-primary rounded-lg w-[650px] flex flex-row items-center'>
    <p className='text-white  text-xl'> 
     <span className='text-red-200'> {result2*100}</span> litres of gasoline consumed</p>
     <Rate className='w-[100px] flex flex-row ml-[50px]'  character={<GasolineIcon  />} count={result2/2} disabled Value={1} /> 
    </div>
  

     <div className='pl-2 mt-[20px] bg-primary rounded-lg w-[650px] flex flex-row items-center'>
     <p className='text-white  text-xl'> 
     <span className='text-red-200'> {result3*100}</span>  smartphones charged</p>
     <Rate className='w-[100px] flex flex-row ml-[50px]'  character={<SmartphoneIcon  />} count={result3/1000} disabled Value={1} /> 
     </div>


    
    <p className='text-white mt-[60px] text-3xl'> Now, let's see the <span className='text-green-200'>top 5 most efficient air conditioner </span> in terms of its performance and energy use  </p>

    

  </div>
    
</div>

</div>
  )
}

export default Result