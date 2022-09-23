import { Select } from 'antd';
import React from 'react'


const DropDown = (props) => {
    const { title, options, onChange } = props;

    const onClickHandle = (value) => {
        // console.log(value)
        // data = {value: '1', text: '1的显示'},
        onChange(value)



    }
    return (
        <div className='flex justify-center items-center'>
            <div className='p-[100px] mt-[700px] w-[1000px] h-[580px] fixed bg-white z-50 flex justify-center items-center'>
                <div className='w-[700px] h-[450px] fixed flex flex-col justify-center items-center' >
                    <h1> {title} </h1>



                    <Select  onChange={onClickHandle}>
                        {options.map((item, index) =>
                            <Select.Option value={item.value} key={index}>
                                {item.text}
                            </Select.Option>)}
                    </Select>

                </div>
            </div>



        </div>

    )
}

export default DropDown