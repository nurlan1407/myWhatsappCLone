import React, { FC } from 'react'
import gif from 'public/whatsapp.gif'
import Input from 'shared/ui/input'
import defaultAvatar from 'public/default_avatar.png'
import Button from 'shared/ui/button' 
import TextArea from 'shared/ui/textArea'



interface AuthorizationProps {

}

const Authorization: FC<AuthorizationProps> = ({ }) => {

  return (
    <div className='wrapper'>
      <div className='flex justify-center items-center gap-2 h-fit border-box'>
        <img src={gif} className='' height={300} width={300} />
        <span className='text-7xl'>WhatsApp</span>
      </div>
      <span className='flex justify-center text-xl'>Create your profile</span>
      <div className='m-auto w-full flex justify-center items-center py-3 border-box'>
        <div className='py-2'>
          <Input name={'Display Name'} type={"text"} label='Display Name' onChange={() => { }} value={""} />
          <TextArea name={'Bio'} type={"text"} label='Bio' onChange={() => { }} value={""}></TextArea>
          <Button onClick={()=>{}}>
            Create Profile
          </Button>
        </div>
        <img src={defaultAvatar}  width={250} height={350} />
      </div>
    </div>
  )
}

export default Authorization;