import React, { FC } from 'react'
import gif from 'public/whatsapp.gif'
import Input from 'shared/ui/input'

interface AuthorizationProps {
  
}

const Authorization: FC<AuthorizationProps> = ({  }) => {
  return (
    <div className='wrapper'>
        <div className='flex justify-center items-center gap-2 h-fit'>
            <img src={gif} className='' height={300} width={300}/>
            <span className='text-7xl'>WhatsApp</span>
        </div>
        <span className='flex justify-center text-5xl'>Create your profile</span>
        <div className=''>
          <Input name={'username'} type={"text"} label='username' onChange={()=>{}}/>
        </div>
    </div>
  )
}

export default Authorization;