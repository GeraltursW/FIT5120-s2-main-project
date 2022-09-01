import { features } from "../../constants/props";
import styles, {layout} from "../../style";
import { Link } from "react-router-dom";

// 此为card的组件
// 导入图标内容和文字
const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row cursor-pointer p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
       {/* 加图标 */}
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      {/* 加标题 */}
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>

        {/* 加文字描述 */}
        <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
  // 此为整个功能描述的大组件
  const Description = () =>  (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} z-0`}>
          Introduction
        </h2>
        <p className={`${styles.paragraph} z-0 max-w-[470px] mt-5 text-white`}>
        Australian households generate about one fifth of Australia's greenhouse emissions which are causing climate change. Many households also struggle to pay their energy bills.
        <br/>
        <br/>
        We are here to help international students optimize their energy usage so as to reduce their carbon emissions and energy bills. 
        </p>

      </div>
  
      <div className={`${layout.sectionImg} flex-col`}>

        {/* 将常数映射到上面创建的card里 */}

        {features.map((feature, index) => {
                return (<Link to={feature.url}>
                  {/* 点击卡片跳转页面 */}
                          <FeatureCard key={feature.id} {...feature} index={index}>
                          {/* <Link to="/">Home</Link> |{" "} */}
                          </FeatureCard>
                </Link>
                  )
                
                })}




      </div>
    </section>
  );
  
  export default Description;
  