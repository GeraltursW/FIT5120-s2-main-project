import React from 'react'


const MultiChoice = (props) => {
  const {title, options, onChange} = props;

  const onClickHandle = (data) => {
    // data = {value: '1', text: '1的显示'},
    onChange(data.value)
  }

  return (

    


    <div className='flex justify-center items-center'>
      <div className='p-[100px] mt-[700px] w-[1000px] h-[580px] fixed bg-primary z-50 flex justify-center items-center'>
        <div className='w-[700px] h-[450px] fixed flex flex-col justify-center items-center' >
        {/* 题目 */}
        <h1 className='text-white text-xl '> {title} </h1>
        

        {/* 选项 */}
        <div className='flex flex-row mt-10 '>
            {options.map((item,index) =>      
                <button onClick={() => onClickHandle(item)} key={index} type="button" className="mr-10 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 
                to-yellow hover:bg-gradient-to-bl 
                focus:ring-8 focus:outline-none focus:ring-red-900 
                font-medium rounded-lg 
                text-sm px-5 py-2.5 text-center mb-2">{item.text}</button>
            )}
        </div>

        </div>    
      </div>

    </div>

    
  )
}

export default MultiChoice