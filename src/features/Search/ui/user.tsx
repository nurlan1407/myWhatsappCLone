import React, { FC } from 'react'

interface UserProps {
  tag:string,
  name: string,
  avatartUrl: string,
  bio: string
}

const User: FC<UserProps> = ({ tag, name, avatartUrl, bio }) => {
  return (
    <div className='w-full px-3 flex	items-center cursor-pointer hover:bg-gray-500 hover:bg-opacity-50 transition-all ease-in-out duration-200'>
      <img src={avatartUrl} width={50} height={50} className='rounded-full object-cover cursor-pointer'></img>
      <div className='px-3 flex-1'>
        <div className='w-full flex justify-between py-2  '>
          <h4 className='text-primary text-lg p-0'>{name}</h4>
          <h4 className='text-primary text-sm p-0 m-0'>{tag}</h4>
        </div>
        <p className='py-2 p-0 m-0 text-secondaryText'>{bio}</p>
      </div>
    </div>
  )
}

export default User;