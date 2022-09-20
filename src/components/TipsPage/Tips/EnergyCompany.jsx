import React from 'react'
import { erngycompany } from "../../../constants/props";
import styles, { layout } from "../../../style";

const EnergyCompany = () => {

    const EnergyCompanyCard = ({ id, icon,title, score, content, feature1, feature2, feature3 }) => (
        <div className={`flex flex-col  p-6 rounded-[20px] feature-card`}>
            {/* 加图标 */}
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
                <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
                <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
                
                
            </div>
            {/* 加标题 */}
            <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                    {id}. {title}
                </h4>
                <br/>
                {/* 加文字描述 */}
                <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
                  <span className='text-blue-200'>{score}</span>  
                </p>
                <br/>
                <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
                    {content}
                </p>
                <br/> <br/> 
                <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
                   <span className='text-red-200'> Feature1: </span>{feature1}
                </p>
                <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
                <span className='text-red-200'> Feature2: </span>{feature2}
                </p>
                <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
                <span className='text-red-200'> Feature3: </span>  {feature3}
                </p>
                
                
            </div>
        </div>
    );

    return (
        <div>
            
                <p className="mt-[100px] font-poppins font-normal text-white text-[16px] leading-[24px]">
                <span className='text-white text-6xl '> Top 5 Greenest Electricity Provider in Victoria" or something  </span></p>

            {erngycompany.map((ep, index) => {
                return (

                    <div key={ep.id}> {/* 点击卡片跳转页面 */}
                        <EnergyCompanyCard  {...ep} index={index}>
                            {/* <Link to="/">Home</Link> |{" "} */}
                        </EnergyCompanyCard>
                    </div>
                )

            })}
        </div>
    )
}

export default EnergyCompany