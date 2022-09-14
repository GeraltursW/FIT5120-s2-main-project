import styles from "../../../style";


const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        {/* logo和描述
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain z-0"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px] z-0`}>
            Let's protect our only planet together
        </p>
      </div> */}
    {/* 小组描述 */}
      
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      {/* <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p> */}

      <div className="flex flex-row md:mt-0 mt-6 justify-between">
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {/* <p className={`${styles.paragraph} mt-4 text-white z-0`}>
              Qiang Tang   ：   26567881 &nbsp; &nbsp; &nbsp;Qiang Tang   ：   26567881<br/>
              Qiang Tang   ：   26567881 &nbsp; &nbsp; &nbsp;Qiang Tang   ：   26567881

          </p> */}
        
          {/* {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
         
        ))} */}
         </div>
      </div>
    </div>
  </section>
);

export default Footer;
