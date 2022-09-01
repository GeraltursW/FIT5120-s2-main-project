import React from 'react'
import videobg from '../../assets/back-video3.mp4'

function getAccessToken() {
    const url = window.location.href;
    const hash = url.substring(url.indexOf('#') + 1);
    let result = hash.split('&')
    result = result[0].split('=')
    localStorage.setItem("idToken",result)
    // return result[1];
  }


function goUrl(){
    window.location.href="https://electrosaver1.auth.ap-southeast-2.amazoncognito.com/login?client_id=6i90lnbfj0p0l1u40eo6nuujg0&response_type=code&scope=openid+profile&redirect_uri=https://www.energysaveee.ml/home"
}

const Login = () => {
  return (
    <div>
        <video src={videobg} autoPlay loop muted className=" z-0 py-0 px-0 w-full h-full fixed opacity-100 object-cover" />
    <div className="w-screen h-screen place-items-center grid ">
        
        <div>
            <button  onClick={(event)=>{goUrl(); getAccessToken()}} type ="button" class="relative opacity-80 text-white w-[300px] h-[100px] inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Login
                </span>
            </button>

        </div>
        

    </div>
    </div>
  )
}

export default Login