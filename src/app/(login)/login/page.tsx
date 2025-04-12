import React from 'react'
import Image from 'next/image'
import LoginImage from "../../../../public/img/a5719b147a8fe9cf4a90f9d842083703-min.jpg"
import Logo from "../../../../public/img/Logo.png"
function LoginPage() {
  return (
    <div className='flex items-center justify-center gap-34 my-10 w-full'>
      <div className='h-fit rounded-[32px] overflow-hidden'>
        <Image src={LoginImage} alt='login' width={519}/>
      </div>
      <div className='flex flex-col gap-24'>
        <Image src={Logo} alt='logo'/>
        
      </div>
    </div>
  )
}

export default LoginPage