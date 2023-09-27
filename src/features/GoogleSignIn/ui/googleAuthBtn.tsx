import React, { FC } from 'react'
import Button from 'shared/ui/button';
import GoogleIcon from 'public/icons/icon_google.svg'


const GoogleAuthBtn: FC = ({  }) => {
  return (
    <Button onClick={()=>{}} className='flex justify-between items-center gap-5'>
        <GoogleIcon width={24} height={24}/><span>Sign in with google</span>
    </Button>
  )
}

export default GoogleAuthBtn;