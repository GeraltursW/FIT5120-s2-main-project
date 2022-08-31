import { useState } from "react";
// 导入导航栏logo
import {close, logo, menu} from '../../assets'
//导入nav中的菜单选项
import { navLinks } from '../../constants/props'
//导入样式
import styles from '../../style'
import { Link } from "react-router-dom";
import Item from "antd/lib/list/Item";


// 导航栏组件
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToogle] = useState(false);

  return (
    <div className="bg-darkgreen sticky top-0 z-50 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>     
        <div className={`${styles.boxWidth} ` }>
          {/* left-0 使得导航横移 position fixed 固定在上方 */}
          <nav className = " bg-gradient-to-r w-full sticky top-0 left-0 z-50 flex py-6 justify-between items-center navbar" style={{position:"fixed"}}>
                                        
              {/* logo  logo图标*/}
              {/* className = " " 此为静态className */}
              {/* className = {``}此为动态className */}
              <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"/>

              {/* 导航栏中的page页面 */}
              <ul className=" list-none sm:flex hidden justify-end items-center flex-1 ">
                {navLinks.map((nav, index) => {
                return (
                  <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                  onClick={() => setActive(nav.title)}>

                      {/* 点击导航 */}
                      <Link to={nav.url}>
                            {nav.title}
                      </Link>

                      {/* <Link to="/">Home</Link> |{" "} */}

                  </li>)
                
                })}
              </ul>



              {/* mobile view nav bar 当屏幕缩小为手机尺寸的导航栏 */}
              <div className="sm:hidden flex flex-1 justify-end items-center">
                <img 
                  // close 和 menu 是导入到assets中的图片
                  src={toggle ? close : menu} 
                  alt="menu"
                  className="  w-[28px] h-[28px] object-contain"
                  // 点击变换图标
                  onClick = {() => setToogle((prev) => !prev)}/>
                {/* 显示侧边栏page页面   */}
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20
                right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                {/* 侧边栏中的page标签 */}

                  <ul className="list-none flex flex-col justify-end items-center flex-1 ">
                    {navLinks.map((nav, index) => {
                      return (
                        <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px]${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                          <Link to={nav.url}>
                            {nav.title}
                          </Link>
                    
                      </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
          </nav>
        </div>
      </div>
    </div>
  );
};


export default Navbar;