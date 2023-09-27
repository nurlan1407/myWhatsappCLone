import React, { FC } from 'react'
import gif from 'public/whatsapp.gif'
import GoogleAuthBtn from 'features/GoogleSignIn/ui/googleAuthBtn'

const Login: FC = ({  }) => {

  return (
    <div className='wrapper'>
      <div className='flex justify-center items-center gap-2 h-fit border-box'>
        <img src={gif} className='' height={300} width={300} />
        <span className='text-7xl'>WhatsApp</span>
      </div>
      <span className='flex justify-center text-xl'>Login using your google account</span>
      <GoogleAuthBtn ></GoogleAuthBtn>
    </div>
  )
}

export default Login;