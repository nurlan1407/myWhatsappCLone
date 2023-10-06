import React, { FC } from 'react'
import avatar from 'public/avatars/2.png'
import Button from 'shared/ui/button';
import SearchInput from 'features/Search/ui';

interface ChatlistProps {

}

const Chatlist: FC<ChatlistProps> = ({ }) => {
    return (
        <div className='h-full'>
            <div className='w-full h-[60px] flex justify-between items-center py-2 px-4 bg-boundaryColor'>
                <div className='w-fit flex gap-3 items-center h-full'>
                    <img src={avatar} height={48} width={48} className='object-cover'></img>
                    <div className='text-xl'>John</div>
                </div>
                <div>
                    <Button className='text-white' onClick={() => { }}>Log out</Button>
                </div>
            </div>
            <div className='py-2 px-4 bg-headerColor'>
                <SearchInput ></SearchInput>
            </div>
        </div>
    )
}

export default Chatlist;