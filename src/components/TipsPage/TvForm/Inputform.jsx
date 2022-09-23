import React from 'react'
import { Input } from 'antd';


const Inputform = (props) => {
  const { title, onChange } = props;

  const onClickHandle = (e) => {
    // data = {value: '1', text: '1的显示'},
    // console.log('onClickHandle---', e.target.value)
    onChange(e.target.value)

  }


  return (

    <div className='flex justify-center items-center'>

      <div className='p-[100px] mt-[700px] w-[1000px] h-[500px] fixed bg-primary z-50 flex justify-center items-center'>

        <div className='w-[700px] h-[450px] fixed  flex justify-center items-center flex-col' >
          {/* 题目 */}
          <h1 className='text-white text-xl '> {title} </h1>

          <Input  onChange={onClickHandle} className="mt-10 shadow w-[400px] appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="hour" />


        </div>

      </div>

    </div>



  )
}

export default Inputform